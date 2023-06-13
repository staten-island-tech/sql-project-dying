import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nzbqlkqfyaqbaiwaijan.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56YnFsa3FmeWFxYmFpd2FpamFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2NjUyNDYsImV4cCI6MjAwMjI0MTI0Nn0.Slcks3VxpJcyM8R8T2DW96T2lE_raB0om1GGYxK57MY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
