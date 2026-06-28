"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";

type ServiceType = "Electrical" | "Plumbing" | "Appliance";

interface BookingFormProps {
  defaultService?: ServiceType;
}

const getTimeSlots = (date: string): string[] => {
  if (!date) return [];
  const d = new Date(date);
  const day = d.getDay();

  const slots: string[] = [];
  if (day === 0 || day === 6) {
    for (let h = 0; h < 23; h++) {
      const hour = h % 12 === 0 ? 12 : h % 12;
      const ampm = h < 12 ? "AM" : "PM";
      slots.push(`${hour}:00 ${ampm}`);
    }
  } else {
    slots.push(
      "4:30 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM",
      "12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM"
    );
  }
  return slots;
};

export default function BookingForm({ defaultService = "Electrical" }: BookingFormProps) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    service_type: defaultService,
    appointment_date: "",
    appointment_time: "",
    notes: "",
  });
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "taken" | "email_limit">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!form.appointment_date) return;
    const fetchBooked = async () => {
      const { data } = await supabase
        .from("appointments")
        .select("appointment_time")
        .eq("appointment_date", form.appointment_date)
        .neq("status", "cancelled");
      setBookedSlots(data?.map((r) => r.appointment_time) ?? []);
      setForm((f) => ({ ...f, appointment_time: "" }));
    };
    fetchBooked();
  }, [form.appointment_date]);

  const slots = getTimeSlots(form.appointment_date);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.status === 409) {
      setStatus("taken");
      return;
    }

    if (res.status === 429) {
      setStatus("email_limit");
      return;
    }

    if (!res.ok) {
      const data = await res.json();
      setStatus("error");
      setErrorMsg(data.error || "Something went wrong.");
      return;
    }

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <CheckCircle size={64} className="mx-auto mb-4" style={{ color: "#FFD700" }} />
        <h3 className="text-3xl font-black text-white mb-2">Appointment Booked!</h3>
        <p className="text-gray-300 text-lg">
          Yaya will confirm shortly at <span style={{ color: "#FFD700" }}>(403) 400-3055</span>.
          <br />
          <span className="text-sm text-gray-500 mt-1 block">A confirmation email is on its way to you.</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { name: "name", placeholder: "Full Name", type: "text" },
          { name: "phone", placeholder: "Phone Number", type: "tel" },
          { name: "email", placeholder: "Email Address", type: "email" },
        ].map((f) => (
          <input
            key={f.name}
            type={f.type}
            placeholder={f.placeholder}
            required
            value={form[f.name as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
            className="px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm"
            style={{ background: "#1a1a1a", border: "1px solid #333" }}
          />
        ))}
        <select
          required
          value={form.service_type}
          onChange={(e) => setForm({ ...form, service_type: e.target.value as ServiceType })}
          className="px-4 py-3 rounded-lg text-white text-sm"
          style={{ background: "#1a1a1a", border: "1px solid #333" }}
        >
          {["Electrical", "Plumbing", "Appliance"].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-3">
        <Calendar size={18} style={{ color: "#FFD700" }} />
        <input
          type="date"
          required
          min={new Date().toISOString().split("T")[0]}
          value={form.appointment_date}
          onChange={(e) => setForm({ ...form, appointment_date: e.target.value })}
          className="flex-1 px-4 py-3 rounded-lg text-white text-sm"
          style={{ background: "#1a1a1a", border: "1px solid #333", colorScheme: "dark" }}
        />
      </div>

      {form.appointment_date && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} style={{ color: "#FFD700" }} />
            <span className="text-white font-semibold text-sm">Select Time</span>
            <span className="text-gray-500 text-xs ml-2">
              {new Date(form.appointment_date).getDay() === 0 || new Date(form.appointment_date).getDay() === 6
                ? "24hr availability"
                : "After-hours: 4:30 PM – 6:00 AM"}
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-48 overflow-y-auto pr-1">
            {slots.map((slot) => {
              const taken = bookedSlots.includes(slot);
              const selected = form.appointment_time === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  disabled={taken}
                  onClick={() => !taken && setForm({ ...form, appointment_time: slot })}
                  className="py-2 px-2 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer"
                  style={{
                    background: taken ? "#1a1a1a" : selected ? "#FFD700" : "#222",
                    color: taken ? "#555" : selected ? "#000" : "#fff",
                    border: selected ? "2px solid #FFD700" : "1px solid #333",
                    cursor: taken ? "not-allowed" : "pointer",
                  }}
                >
                  {taken ? "✗" : slot}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <textarea
        placeholder="Additional notes (optional)"
        rows={3}
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm resize-none"
        style={{ background: "#1a1a1a", border: "1px solid #333" }}
      />

      {status === "taken" && (
        <div className="flex items-center gap-2 p-4 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
          <AlertCircle size={18} className="text-red-400" />
          <p className="text-red-400 text-sm">Sorry, this time slot is already booked. Please choose a different time.</p>
        </div>
      )}

      {status === "email_limit" && (
        <div className="flex items-center gap-2 p-4 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
          <AlertCircle size={18} className="text-red-400" />
          <p className="text-red-400 text-sm">You already have a booking on this date. Please call <strong>(403) 400-3055</strong> if you need to make changes.</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 p-4 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
          <AlertCircle size={18} className="text-red-400" />
          <p className="text-red-400 text-sm">{errorMsg || "Something went wrong. Please try again."}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!form.appointment_time || status === "loading"}
        className="w-full py-4 rounded-full font-black text-black text-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
      >
        {status === "loading" ? "Booking..." : "Book My Appointment"}
      </button>
    </form>
  );
}
