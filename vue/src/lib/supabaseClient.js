import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://fpkejmxvpvlhslabdvav.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwa2VqbXh2cHZsaHNsYWJkdmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5NTAwMjIsImV4cCI6MTk5ODUyNjAyMn0.qgHy-0uRy6Jro3P1_epJbIBW4zyQ25__BEf6jR5wPdo'
)
