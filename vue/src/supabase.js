import { createClient } from '@supabase/supabase-js'

const VITE_SUPABASE_URL = 'https://fpkejmxvpvlhslabdvav.supabase.co'

const VITE_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwa2VqbXh2cHZsaHNsYWJkdmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5NTAwMjIsImV4cCI6MTk5ODUyNjAyMn0.qgHy-0uRy6Jro3P1_epJbIBW4zyQ25__BEf6jR5wPdo'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
