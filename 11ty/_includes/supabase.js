import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://jujsidzudoqlljbabqjd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1anNpZHp1ZG9xbGxqYmFicWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNDg4MzUsImV4cCI6MjA1MjkyNDgzNX0.YpBU16MXP4jNyvQynwJzhV1h5AoNnClp17GqyPipxaI';
const options = {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
}
const supabase = createClient(supabaseUrl, supabaseKey, options);