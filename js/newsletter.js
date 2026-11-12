
/* =========================================================
   GÉNESIS GLOBAL — NEWSLETTER
   Popup de suscripción
   Idiomas: ES / EN / FR / PT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       1. TRADUCCIONES
       ===================================================== */

    const translations = {
        es: {
            title: 'No te pierdas nuestras',
            highlight: 'mejores ofertas',
            description: 'Suscríbete para recibir ofertas exclusivas de vuelos, remesas y productos directamente en tu correo.',
            name: 'Tu nombre (opcional)',
            email: 'Tu correo electrónico',
            interestTitle: 'Selecciona tus intereses:',
            flights: 'Vuelos y Viajes',
            remittances: 'Remesas',
            topups: 'Recargas',
            products: 'Cambios y Productos',
            privacy: 'Al suscribirte, aceptas recibir comunicaciones relacionadas con tus intereses. Puedes dejar de recibirlas cuando lo desees.',
            button: 'Suscribirme ahora',
            loading: 'Guardando...',
            required: 'Por favor, ingresa tu correo.',
            invalidEmail: 'Ingresa un correo electrónico válido.',
            unavailable: 'El servicio de suscripción no está disponible en este momento.',
            duplicate: 'Este correo ya está suscrito.',
            success: '¡Gracias por suscribirte! Tu solicitud ha sido registrada.',
            error: 'No se pudo completar la suscripción. Intenta de nuevo.',
            close: 'Cerrar'
        },

        en: {
            title: "Don't miss out on our",
            highlight: 'best offers',
            description: 'Subscribe to receive exclusive flight, remittance and product offers directly in your inbox.',
            name: 'Your name (optional)',
            email: 'Your email address',
            interestTitle: 'Select your interests:',
            flights: 'Flights and Travel',
            remittances: 'Remittances',
            topups: 'Mobile Top-ups',
            products: 'Currency Exchange and Products',
            privacy: 'By subscribing, you agree to receive communications related to your interests. You can unsubscribe at any time.',
            button: 'Subscribe now',
            loading: 'Saving...',
            required: 'Please enter your email address.',
            invalidEmail: 'Please enter a valid email address.',
            unavailable: 'The subscription service is currently unavailable.',
            duplicate: 'This email is already subscribed.',
            success: 'Thank you for subscribing! Your request has been registered.',
            error: 'Your subscription could not be completed. Please try again.',
            close: 'Close'
        },

        fr: {
            title: 'Ne manquez pas nos',
            highlight: 'meilleures offres',
            description: 'Abonnez-vous pour recevoir directement par e-mail nos offres exclusives de vols, de transferts d’argent et de produits.',
            name: 'Votre nom (facultatif)',
            email: 'Votre adresse e-mail',
            interestTitle: 'Sélectionnez vos centres d’intérêt :',
            flights: 'Vols et Voyages',
            remittances: 'Transferts d’argent',
            topups: 'Recharges mobiles',
            products: 'Change et Produits',
            privacy: 'En vous abonnant, vous acceptez de recevoir des communications liées à vos centres d’intérêt. Vous pouvez vous désabonner à tout moment.',
            button: 'M’abonner maintenant',
            loading: 'Enregistrement...',
            required: 'Veuillez saisir votre adresse e-mail.',
            invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
            unavailable: 'Le service d’abonnement est momentanément indisponible.',
            duplicate: 'Cette adresse e-mail est déjà abonnée.',
            success: 'Merci pour votre abonnement ! Votre demande a été enregistrée.',
            error: 'Votre abonnement n’a pas pu être effectué. Veuillez réessayer.',
            close: 'Fermer'
        },

        pt: {
            title: 'Não perca nossas',
            highlight: 'melhores ofertas',
            description: 'Inscreva-se para receber ofertas exclusivas de voos, remessas e produtos diretamente no seu e-mail.',
            name: 'Seu nome (opcional)',
            email: 'Seu endereço de e-mail',
            interestTitle: 'Selecione seus interesses:',
            flights: 'Voos e Viagens',
            remittances: 'Remessas',
            topups: 'Recargas',
            products: 'Câmbio e Produtos',
            privacy: 'Ao se inscrever, você concorda em receber comunicações relacionadas aos seus interesses. Você pode cancelar a inscrição quando quiser.',
            button: 'Inscrever-me agora',
            loading: 'Salvando...',
            required: 'Por favor, informe seu e-mail.',
            invalidEmail: 'Informe um endereço de e-mail válido.',
            unavailable: 'O serviço de inscrição está indisponível no momento.',
            duplicate: 'Este e-mail já está inscrito.',
            success: 'Obrigado por se inscrever! Sua solicitação foi registrada.',
            error: 'Não foi possível concluir sua inscrição. Tente novamente.',
            close: 'Fechar'
        }
    };

    /* =====================================================
       2. ESTADO
       ===================================================== */

    let currentStatus = null;
    let isSubmitting = false;
    let closeTimer = null;

    function getLanguage() {
        const selected =
            window.GenesisI18n?.getLanguage?.() ||
            document.documentElement.lang ||
            'es';

        const language = String(selected).toLowerCase().slice(0, 2);

        return translations[language] ? language : 'es';
    }

    function t(key) {
        return translations[getLanguage()][key] ||
            translations.es[key] ||
            key;
    }

    /* =====================================================
       3. CONSTRUCCIÓN SEGURA DEL POPUP
       ===================================================== */

    if (document.getElementById('newsletterPopup')) return;

    const popup = document.createElement('div');
    popup.id = 'newsletterPopup';
    popup.className = 'nl-popup-overlay';

    const content = document.createElement('div');
    content.className = 'nl-popup-content';

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'nl-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', t('close'));
    closeButton.addEventListener('click', closeNewsletterPopup);

    const icon = document.createElement('div');
    icon.className = 'nl-icon';
    icon.textContent = '✉️';

    const heading = document.createElement('h2');
    const title = document.createElement('span');
    title.dataset.nlText = 'title';

    const highlight = document.createElement('span');
    highlight.className = 'text-gradient';
    highlight.dataset.nlText = 'highlight';

    heading.append(title, document.createTextNode(' '), highlight);

    const description = document.createElement('p');
    description.dataset.nlText = 'description';

    const form = document.createElement('form');
    form.id = 'nlFormPopup';
    form.className = 'nl-form';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'nlNamePopup';
    nameInput.name = 'name';
    nameInput.maxLength = 100;
    nameInput.autocomplete = 'name';
    nameInput.placeholder = t('name');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'nlEmailPopup';
    emailInput.name = 'email';
    emailInput.required = true;
    emailInput.maxLength = 254;
    emailInput.autocomplete = 'email';
    emailInput.placeholder = t('email');

    const interestTitle = document.createElement('p');
    interestTitle.className = 'nl-interest-title';
    interestTitle.dataset.nlText = 'interestTitle';

    const interestsContainer = document.createElement('div');
    interestsContainer.className = 'nl-interests';

    const interestOptions = [
        { value: 'viajes', key: 'flights', checked: true },
        { value: 'remesas', key: 'remittances' },
        { value: 'recargas', key: 'topups' },
        { value: 'productos', key: 'products' }
    ];

    interestOptions.forEach(option => {
        const label = document.createElement('label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'interests';
        checkbox.value = option.value;
        checkbox.checked = Boolean(option.checked);

        const text = document.createElement('span');
        text.dataset.nlText = option.key;

        label.append(checkbox, text);
        interestsContainer.appendChild(label);
    });

    const privacy = document.createElement('small');
    privacy.className = 'nl-privacy';
    privacy.dataset.nlText = 'privacy';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'primary';
    submitButton.id = 'nlBtnPopup';

    const message = document.createElement('div');
    message.id = 'nlMsgPopup';
    message.className = 'nl-message';
    message.setAttribute('role', 'status');
    message.setAttribute('aria-live', 'polite');

    form.append(
        nameInput,
        emailInput,
        interestTitle,
        interestsContainer,
        privacy,
        submitButton,
        message
    );

    content.append(
        closeButton,
        icon,
        heading,
        description,
        form
    );

    popup.appendChild(content);
    document.body.appendChild(popup);

    /* =====================================================
       4. ACTUALIZAR IDIOMA
       ===================================================== */

    function updateLanguage() {
        popup.querySelectorAll('[data-nl-text]').forEach(element => {
            const key = element.dataset.nlText;
            element.textContent = t(key);
        });

        nameInput.placeholder = t('name');
        emailInput.placeholder = t('email');
        closeButton.setAttribute('aria-label', t('close'));

        submitButton.textContent = isSubmitting
            ? t('loading')
            : t('button');

        if (currentStatus) {
            message.textContent = currentStatus.text;
            message.className = `nl-message ${currentStatus.type}`;
        }
    }

    function showMessage(key, type) {
        currentStatus = { key, type };

        message.textContent = t(key);
        message.className = `nl-message ${type}`;
    }

    document.addEventListener('genesis:languagechange', updateLanguage);

    updateLanguage();

    /* =====================================================
       5. CIERRE DEL POPUP
       ===================================================== */

    window.closeNewsletterPopup = function () {
        popup.classList.remove('show');

        try {
            sessionStorage.setItem('genesis_nl_closed', 'true');
        } catch (error) {
            // El cierre visual no depende del almacenamiento.
        }
    };

    popup.addEventListener('click', event => {
        if (event.target === popup) {
            window.closeNewsletterPopup();
        }
    });

    /* =====================================================
       6. MOSTRAR POPUP
       ===================================================== */

    let alreadyClosed = false;

    try {
        alreadyClosed = sessionStorage.getItem('genesis_nl_closed') === 'true';
    } catch (error) {
        // Si sessionStorage no está disponible, el popup sigue funcionando.
    }

    if (!alreadyClosed) {
        window.setTimeout(() => {
            if (document.body.contains(popup)) {
                popup.classList.add('show');
            }
        }, 2000);
    }

    /* =====================================================
       7. ENVÍO A SUPABASE
       ===================================================== */

    form.addEventListener('submit', async event => {
        event.preventDefault();

        if (isSubmitting) return;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim().toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            showMessage('required', 'error');
            emailInput.focus();
            return;
        }

        if (!emailRegex.test(email)) {
            showMessage('invalidEmail', 'error');
            emailInput.focus();
            return;
        }

        const interests = Array.from(
            interestsContainer.querySelectorAll('input:checked')
        )
            .map(checkbox => checkbox.value)
            .join(',');

        if (!window.genesisSupabase) {
            showMessage('unavailable', 'error');
            return;
        }

        isSubmitting = true;
        submitButton.disabled = true;
        submitButton.textContent = t('loading');
        message.textContent = '';
        message.className = 'nl-message';
        currentStatus = null;

        try {
            const { error } = await window.genesisSupabase
                .from('newsletter_subscribers')
                .insert([{
                    name: name || null,
                    email,
                    interests
                }]);

            if (error) {
                if (error.code === '23505') {
                    showMessage('duplicate', 'error');
                    return;
                }

                throw error;
            }

            showMessage('success', 'success');

            form.reset();

            if (closeTimer) {
                clearTimeout(closeTimer);
            }

            closeTimer = window.setTimeout(() => {
                window.closeNewsletterPopup();
            }, 3000);

        } catch (error) {
            console.error('[GÉNESIS GLOBAL] Newsletter error:', error);

            showMessage('error', 'error');

        } finally {
            isSubmitting = false;
            submitButton.disabled = false;
            submitButton.textContent = t('button');
        }
    });

});
