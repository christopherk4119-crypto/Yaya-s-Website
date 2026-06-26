import { createClient } from "@supabase/supabase-js";

// REPLACE WITH YOUR SUPABASE URL
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
// REPLACE WITH YOUR SUPABASE ANON KEY
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key-here";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Appointment = {
  id?: string;
  name: string;
  phone: string;
  email: string;
  service_type: string;
  appointment_date: string;
  appointment_time: string;
  notes?: string;
  status?: string;
  created_at?: string;
};
