// ============================================================
// GÉNESIS GLOBAL — Supabase Client
// ============================================================
// IMPORTANTE:
// - Usa solamente la Publishable Key / anon key.
// - NUNCA coloques aquí una service_role key.
// ============================================================

const SUPABASE_URL = "https://qwtqfkpcveekqrajsqjq.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_X8Aw8G_yu9UoXG0RXsUu3w_J3hfbiCS";

// Crear cliente de Supabase
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// Disponible para el resto del sitio
window.genesisSupabase = supabaseClient;
// ============================================================
// ANALYTICS — REGISTRAR VISITAS
// ============================================================

function getGenesisVisitorId() {
    const storageKey = "genesis_global_visitor_id";

    let visitorId = localStorage.getItem(storageKey);

    if (!visitorId) {
        visitorId =
            window.crypto?.randomUUID?.() ||
            `${Date.now()}-${Math.random().toString(36).slice(2)}`;

        localStorage.setItem(storageKey, visitorId);
    }

    return visitorId;
}

window.trackGenesisPageView = async function () {
    try {
        const { error } = await window.genesisSupabase
            .from("site_page_views")
            .insert({
                visitor_id: getGenesisVisitorId(),
                page_path: window.location.pathname,
                page_title: document.title || null,
                referrer: document.referrer || null,
                user_agent: navigator.userAgent || null
            });

        if (error) {
            console.warn(
                "Analytics GÉNESIS GLOBAL:",
                error.message
            );
        }
    } catch (error) {
        console.warn(
            "No se pudo registrar la visita:",
            error
        );
    }
};


// Registrar visita cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    window.trackGenesisPageView();
});

// ============================================================
// GUARDAR SOLICITUD DE VIAJE
// ============================================================

window.saveTravelRequest = async function (data) {

    try {

        const { data: result, error } =
            await window.genesisSupabase.rpc(
                "submit_travel_request",
                {
                    p_origen: data.origen,
                    p_destino: data.destino,

                    p_fecha_viaje:
                        data.fechaViaje || null,

                    p_fecha_regreso:
                        data.fechaRegreso || null,

                    p_adultos:
                        Number(data.adultos || 1),

                    p_ninos:
                        Number(data.ninos || 0),

                    p_tipo_viaje:
                        data.tipo || "other",

                    p_nombre:
                        data.nombre,

                    p_whatsapp:
                        data.whatsapp,

                    p_email:
                        data.email,

                    p_residencia:
                        data.residencia,

                    p_comentarios:
                        data.comentarios || null
                }
            );


        // Comprobar error de Supabase
        if (error) {

            console.error(
                "❌ Error de Supabase:",
                error
            );

            throw error;
        }


        // Confirmación
        console.log(
            "✅ Solicitud guardada correctamente:",
            result
        );


        return result;


    } catch (error) {

        console.error(
            "❌ No se pudo guardar la solicitud:",
            error
        );

        throw error;
    }
};
