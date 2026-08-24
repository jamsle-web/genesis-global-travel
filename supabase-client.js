// GÉNESIS GLOBAL — Conexión con Supabase

const SUPABASE_URL = "https://qwtqfkpcveekqrajsqjq.supabase.co";

// IMPORTANTE:
// Aquí irá únicamente la clave pública (anon/publishable).
// NUNCA coloques aquí la service_role key.
const SUPABASE_ANON_KEY = "sb_publishable_X8Aw8G_yu9UoXG0RXsUu3w_J3hfbiCS";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

window.genesisSupabase = supabaseClient;
