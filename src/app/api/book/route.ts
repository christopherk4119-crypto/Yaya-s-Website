import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { rateLimit } from "@/lib/rate-limit";

const FORMSPREE = "https://formspree.io/f/mjgqynvj";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    if (!rateLimit(ip, 10, 60 * 60 * 1000)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const { name, phone, email, service_type, appointment_date, appointment_time, notes } = body;

    // 1 booking per email per day
    const { data: emailCheck } = await supabase
      .from("appointments")
      .select("id")
      .eq("email", email)
      .eq("appointment_date", appointment_date)
      .limit(1);

    if (emailCheck && emailCheck.length > 0) {
      return NextResponse.json({ error: "email_limit" }, { status: 429 });
    }

    // Double-booking check
    const { data: existing } = await supabase
      .from("appointments")
      .select("id")
      .eq("appointment_date", appointment_date)
      .eq("appointment_time", appointment_time)
      .neq("status", "cancelled")
      .limit(1);

    if (existing && existing.length > 0) {
      return NextResponse.json({ error: "time_taken" }, { status: 409 });
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from("appointments")
      .insert([{ name, phone, email, service_type, appointment_date, appointment_time, notes, status: "pending" }]);

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    // Notify via Formspree
    await fetch(FORMSPREE, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        service_type,
        appointment_date,
        appointment_time,
        notes,
        _subject: `New Booking — ${service_type} — ${appointment_date} at ${appointment_time}`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
