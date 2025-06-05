// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mzxodrteixgihkaibpjy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16eG9kcnRlaXhnaWhrYWlicGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NzA2NTIsImV4cCI6MjA2NDU0NjY1Mn0.NM0CnyWZqxiD2OmfW8TiwCi6As9i1z1wCksEeWfNfY8'
export const supabase = createClient(supabaseUrl, supabaseKey)
