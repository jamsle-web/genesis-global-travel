
document.addEventListener('DOMContentLoaded', () => {
    // Evitar crear el popup dos veces
    if (document.getElementById('newsletterPopup')) return;

    // 1. Crear el HTML del Popup
    const popupHTML = `
        <div id="newsletterPopup" class="nl-popup-overlay">
            <div class="nl-popup-content">
                <button
                    type="button"
                    class="nl-close"
                    onclick="window.closeNewsletterPopup()"
                    aria-label="Cerrar"
                >&times;</button>

                <div class="nl-icon">✉️</div>

                <h2>No te pierdas nuestras
                    <span class="text-gradient">mejores ofertas</span>
                </h2>

                <p>
                    Suscríbete para recibir ofertas exclusivas de vuelos,
                    remesas y productos directamente en tu correo.
                </p>

                <form id="nlFormPopup" class="nl-form">
                    <input
                        type="text"
                        id="nlNamePopup"
                        placeholder="Tu nombre (opcional)"
                        autocomplete="name"
                        maxlength="100"
                    >

                    <input
                        type="email"
                        id="nlEmailPopup"
                        placeholder="Tu correo electrónico"
                        autocomplete="email"
                        maxlength="254"
                        required
                    >

                    <div class="nl-interests">
                        <label>
                            <input type="checkbox" name="interests" value="viajes" checked>
                            Vuelos y Viajes
                        </label>
                        <label>
                            <input type="checkbox" name="interests" value="remesas">
                            Remesas
                        </label>
                        <label>
                            <input type="checkbox" name="interests" value="recargas">
                            Recargas
                        </label>
                        <label>
                            <input type="checkbox" name="interests" value="productos">
                            Cambios y Productos
                        </label>
                    </div>

                    <button type="submit" class="primary" id="nlBtnPopup">
                        Suscribirme ahora
                    </button>

                    <div
                        id="nlMsgPopup"
                        class="nl-message"
                        role="status"
                        aria-live="polite"
                    ></div>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // 2. Obtener elementos
    const popup = document.getElementById('newsletterPopup');
    const form = document.getElementById('nlFormPopup');
    const btn = document.getElementById('nlBtnPopup');
    const msg = document.getElementById('nlMsgPopup');
    const nameInput = document.getElementById('nlNamePopup');
    const emailInput = document.getElementById('nlEmailPopup');

    // 3. Cierre del popup (definido antes de registrar eventos)
    window.closeNewsletterPopup = function () {
        popup.classList.remove('show');

        try {
            sessionStorage.setItem('genesis_nl_closed', 'true');
        } catch (error) {
            console.warn('No se pudo guardar el estado del popup.');
        }
    };

    // 4. Comprobar si el usuario ya lo cerró durante esta sesión
    let alreadyClosed = false;

    try {
        alreadyClosed =
            sessionStorage.getItem('genesis_nl_closed') === 'true';
    } catch (error) {
        console.warn('No se pudo consultar el estado del popup.');
    }

    // 5. Mostrar automáticamente después de 2 segundos
    if (!alreadyClosed) {
        window.setTimeout(() => {
            if (document.body.contains(popup)) {
                popup.classList.add('show');
            }
        }, 2000);
    }

    // 6. Cerrar al hacer clic fuera del cuadro
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            window.closeNewsletterPopup();
        }
    });

    // 7. Enviar datos a Supabase
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        if (btn.disabled) return;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim().toLowerCase();

        const interests = Array.from(
            form.querySelectorAll('input[name="interests"]:checked')
        )
            .map(cb => cb.value)
            .join(',');

        if (!email) {
            msg.textContent = 'Por favor, ingresa tu correo.';
            msg.className = 'nl-message error';
            emailInput.focus();
            return;
        }

        if (!emailInput.checkValidity()) {
            msg.textContent = 'Ingresa un correo electrónico válido.';
            msg.className = 'nl-message error';
            emailInput.focus();
            return;
        }

        btn.textContent = 'Guardando...';
        btn.disabled = true;
        msg.textContent = '';
        msg.className = 'nl-message';

        try {
            if (!window.genesisSupabase) {
                throw new Error('Supabase no está conectado.');
            }

            const { error } = await window.genesisSupabase
                .from('newsletter_subscribers')
                .insert([{
                    name: name || null,
                    email: email,
                    interests: interests
                }]);

            if (error) {
                if (error.code === '23505') {
                    throw new Error('Este correo ya está suscrito.');
                }

                throw error;
            }

            msg.textContent =
                '¡Gracias por suscribirte! Revisa tu correo pronto.';
            msg.className = 'nl-message success';

            form.reset();

            window.setTimeout(() => {
                window.closeNewsletterPopup();
            }, 3000);

        } catch (error) {
            console.error('[GÉNESIS GLOBAL] Error Newsletter:', error);

            msg.textContent =
                error.message || 'Hubo un error. Intenta de nuevo.';
            msg.className = 'nl-message error';

        } finally {
            btn.textContent = 'Suscribirme ahora';
            btn.disabled = false;
        }
    });
});
