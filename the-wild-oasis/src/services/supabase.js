import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xgwztptuoovfbamwkztp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhnd3p0cHR1b292ZmJhbXdrenRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MDIwOTMsImV4cCI6MjAwNDI3ODA5M30.FxzLmFw7NCzVZF9RD4EsEWrwTI8U8usmuUW4w1pkwTs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
