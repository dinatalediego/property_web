// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = import.meta.env.SUPABASE_DATABASE_URL
//const supabaseKey = import.meta.env.SUPABASE_KEY

const supabaseUrl  = process.env.SUPABASE_DATABASE_URL
const supabaseKey  = process.env.SUPABASE_KEY


export const supabase = createClient(supabaseUrl, supabaseKey)
