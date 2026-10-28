document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear el HTML del Popup dinámicamente
    const popupHTML = `
        <div id="newsletterPopup" class="nl-popup-overlay">
            <div class="nl-popup-content">
                <button class="nl-close" onclick="closeNewsletterPopup()">&times;</button>
                <div class="nl-icon">✉️</div>
                <h2>No te pierdas nuestras <span class="text-gradient">mejores ofertas</span></h2>
                <p>Suscríbete para recibir ofertas exclusivas de vuelos, remesas y productos directamente en tu correo.</p>
                
                <form id="nlFormPopup" class="nl-form">
                    <input type="text" id="nlNamePopup" placeholder="Tu nombre (opcional)">
                    <input type="email" id="nlEmailPopup" placeholder="Tu correo electrónico" required>
                    
                    <div class="nl-interests">
                        <label><input type="checkbox" value="viajes" checked> Vuelos y Viajes</label>
                        <label><input type="checkbox" value="remesas"> Remesas</label>
                        <label><input type="checkbox" value="recargas"> Recargas</label>
                        <label><input type="checkbox" value="productos"> Cambios y Productos</label>
                    </div>

                    <button type="submit" class="primary" id="nlBtnPopup">Suscribirme ahora</button>
                    <div id="nlMsgPopup" class="nl-message"></div>
                </form>
            </div>
        </div>
    `;

    // Insertar el popup en el body
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // 2. Lógica para mostrar el popup (solo si no se ha cerrado antes en esta sesión)
    if (!sessionStorage.getItem('genesis_nl_closed')) {
        setTimeout(() => {
            document.getElementById('newsletterPopup').classList.add('show');
        }, 2000); // Aparece a los 2 segundos
    }

    // 3. Lógica para cerrar el popup
    window.closeNewsletterPopup = function() {
        document.getElementById('newsletterPopup').classList.remove('show');
        sessionStorage.setItem('genesis_nl_closed', 'true'); // Recordar que lo cerró
    };

    // Cerrar al hacer clic fuera del cuadro
    document.getElementById('newsletterPopup').addEventListener('click', function(e) {
        if (e.target === this) closeNewsletterPopup();
    });

    // 4. Enviar datos a Supabase
    document.getElementById('nlFormPopup').addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('nlNamePopup').value.trim();
        const email = document.getElementById('nlEmailPopup').value.trim();
        const btn = document.getElementById('nlBtnPopup');
        const msg = document.getElementById('nlMsgPopup');

        // Obtener intereses seleccionados
        const interests = Array.from(document.querySelectorAll('.nl-interests input:checked')).map(cb => cb.value).join(',');

        if (!email) {
            msg.textContent = 'Por favor, ingresa tu correo.';
            msg.className = 'nl-message error';
            return;
        }

        btn.textContent = 'Guardando...';
        btn.disabled = true;
        msg.className = 'nl-message';

        try {
            if (typeof window.genesisSupabase === 'undefined') throw new Error('Supabase no está conectado.');

            const { error } = await window.genesisSupabase
                .from('newsletter_subscribers')
                .insert([{ name: name || null, email: email, interests: interests }]);

            if (error) {
                if (error.code === '23505') throw new Error('Este correo ya está suscrito.');
                throw error;
            }

            msg.textContent = '✅ ¡Gracias por suscribirte! Revisa tu correo pronto.';
            msg.className = 'nl-message success';
            this.reset();
            setTimeout(() => closeNewsletterPopup(), 3000);

        } catch (error) {
            console.error(error);
            msg.textContent = '❌ ' + (error.message || 'Hubo un error. Intenta de nuevo.');
            msg.className = 'nl-message error';
        } finally {
            btn.textContent = 'Suscribirme ahora';
            btn.disabled = false;
        }
    });
});
