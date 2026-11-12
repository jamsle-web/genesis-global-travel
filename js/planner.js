
/* =========================================================
   GÉNESIS GLOBAL — PLANNER
   Formulario, validaciones y resumen multilingüe
   Idiomas: ES / EN / FR / PT
   ========================================================= */

const countryData = window.countryData || [];

/* =========================================================
   1. TRADUCCIONES
   ========================================================= */

const plannerTranslations = {
    es: {
        originRequired: 'Por favor, indica tu origen.',
        destinationRequired: 'Por favor, indica tu destino.',
        required: 'Este campo es obligatorio.',
        invalidEmail: 'Ingresa un correo electrónico válido.',
        notSpecified: 'No especificada',
        travelDate: 'Fecha de viaje:',
        returnDate: 'Regreso:',
        travelers: 'Viajeros:',
        adults: 'adultos',
        children: 'niños',
        reason: 'Motivo:',
        name: 'Nombre:',
        whatsapp: 'WhatsApp:',
        email: 'Email:',
        residence: 'Residencia:',
        comments: 'Comentarios:'
    },

    en: {
        originRequired: 'Please enter your departure location.',
        destinationRequired: 'Please enter your destination.',
        required: 'This field is required.',
        invalidEmail: 'Please enter a valid email address.',
        notSpecified: 'Not specified',
        travelDate: 'Travel date:',
        returnDate: 'Return date:',
        travelers: 'Travelers:',
        adults: 'adults',
        children: 'children',
        reason: 'Purpose:',
        name: 'Name:',
        whatsapp: 'WhatsApp:',
        email: 'Email:',
        residence: 'Residence:',
        comments: 'Comments:'
    },

    fr: {
        originRequired: 'Veuillez indiquer votre lieu de départ.',
        destinationRequired: 'Veuillez indiquer votre destination.',
        required: 'Ce champ est obligatoire.',
        invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
        notSpecified: 'Non spécifiée',
        travelDate: 'Date du voyage :',
        returnDate: 'Retour :',
        travelers: 'Voyageurs :',
        adults: 'adultes',
        children: 'enfants',
        reason: 'Motif :',
        name: 'Nom :',
        whatsapp: 'WhatsApp :',
        email: 'E-mail :',
        residence: 'Résidence :',
        comments: 'Commentaires :'
    },

    pt: {
        originRequired: 'Por favor, informe sua origem.',
        destinationRequired: 'Por favor, informe seu destino.',
        required: 'Este campo é obrigatório.',
        invalidEmail: 'Informe um endereço de e-mail válido.',
        notSpecified: 'Não especificada',
        travelDate: 'Data da viagem:',
        returnDate: 'Retorno:',
        travelers: 'Viajantes:',
        adults: 'adultos',
        children: 'crianças',
        reason: 'Motivo:',
        name: 'Nome:',
        whatsapp: 'WhatsApp:',
        email: 'E-mail:',
        residence: 'Residência:',
        comments: 'Comentários:'
    }
};

/* =========================================================
   2. IDIOMA ACTUAL
   ========================================================= */

function getPlannerLanguage() {
    const selectedLanguage =
        window.GenesisI18n?.getLanguage?.() ||
        document.documentElement.lang ||
        'es';

    const language = String(selectedLanguage).toLowerCase().slice(0, 2);

    return plannerTranslations[language] ? language : 'es';
}

function plannerText(key) {
    const language = getPlannerLanguage();

    return plannerTranslations[language][key] ||
        plannerTranslations.es[key] ||
        key;
}

/* =========================================================
   3. VALIDACIONES Y ERRORES
   ========================================================= */

function showError(inputId, messageKey) {
    const input = document.getElementById(inputId);

    if (!input) return;

    input.style.borderColor = '#ff6b6b';

    let errorEl = input.parentElement.querySelector('.error-msg');

    if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'error-msg';
        errorEl.style.color = '#ff6b6b';
        errorEl.style.fontSize = '12px';
        errorEl.style.marginTop = '5px';

        input.parentElement.appendChild(errorEl);
    }

    // Guardamos la clave para poder actualizar el idioma.
    errorEl.dataset.translationKey = messageKey;
    errorEl.textContent = plannerText(messageKey);
}

function clearError(inputId) {
    const input = document.getElementById(inputId);

    if (!input) return;

    input.style.borderColor = '';

    const errorEl = input.parentElement.querySelector('.error-msg');

    if (errorEl) {
        errorEl.remove();
    }
}

/* =========================================================
   4. AUTOCOMPLETADO DE PAÍSES
   ========================================================= */

function setupAutocomplete(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (!input || !list) return;

    input.addEventListener('input', function () {
        clearError(inputId);

        const query = this.value.toLowerCase().trim();

        if (!query) {
            list.classList.remove('show');
            list.replaceChildren();
            return;
        }

        const filtered = countryData.filter(country => {
            const name = String(country.name || '').toLowerCase();
            const code = String(country.code || '').toLowerCase();

            return name.includes(query) || code.includes(query);
        });

        list.replaceChildren();

        if (filtered.length === 0) {
            list.classList.remove('show');
            return;
        }

        filtered.forEach(country => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';

            const flag = document.createElement('span');
            flag.className = 'flag';
            flag.textContent = country.flag || '🌍';

            const label = document.createElement('span');
            label.textContent =
                ` ${country.name} (${country.code})`;

            item.append(flag, label);

            item.addEventListener('click', function () {
                input.value = country.name;

                list.classList.remove('show');

                input.dispatchEvent(
                    new Event('change', { bubbles: true })
                );
            });

            list.appendChild(item);
        });

        list.classList.add('show');
    });

    document.addEventListener('click', function (event) {
        if (
            !input.contains(event.target) &&
            !list.contains(event.target)
        ) {
            list.classList.remove('show');
        }
    });
}

/* =========================================================
   5. NAVEGACIÓN ENTRE PASOS
   ========================================================= */

function showStep(stepId) {
    document.querySelectorAll('.planner-step').forEach(element => {
        element.classList.remove('active');
    });

    const step = document.getElementById(stepId);

    if (step) {
        step.classList.add('active');
    }

    document.getElementById('planner')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

window.goToStep1 = function () {
    showStep('step1');
};

window.goToStep2 = function () {
    const origenInput = document.getElementById('origenInput');
    const destinoInput = document.getElementById('destinoInput');

    if (!origenInput || !destinoInput) return;

    const origen = origenInput.value.trim();
    const destino = destinoInput.value.trim();

    let valid = true;

    if (!origen) {
        showError('origenInput', 'originRequired');
        valid = false;
    } else {
        clearError('origenInput');
    }

    if (!destino) {
        showError('destinoInput', 'destinationRequired');
        valid = false;
    } else {
        clearError('destinoInput');
    }

    if (valid) {
        showStep('step2');
    }
};

window.goToStep3 = function () {
    showStep('step3');
};

/* =========================================================
   6. BANDERAS DE PAÍSES
   ========================================================= */

function getCountryFlag(name) {
    const found = countryData.find(country => country.name === name);

    return found ? found.flag : '🌍';
}

/* =========================================================
   7. CONSTRUCCIÓN SEGURA DEL RESUMEN
   ========================================================= */

let lastSummaryData = null;

function createSummaryDetail(container, labelKey, value) {
    const row = document.createElement('div');

    const strong = document.createElement('strong');
    strong.textContent = plannerText(labelKey) + ' ';

    const content = document.createElement('span');
    content.textContent = String(value ?? '');

    row.append(strong, content);
    container.appendChild(row);
}

function renderSummary(data) {
    const summaryDiv = document.getElementById('summaryContent');

    if (!summaryDiv || !data) return;

    const fragment = document.createDocumentFragment();

    // Ruta
    const route = document.createElement('div');
    route.className = 'route';

    const origin = document.createElement('span');
    origin.textContent = `${getCountryFlag(data.origen)} ${data.origen}`;

    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = '→';

    const destination = document.createElement('span');
    destination.textContent =
        `${getCountryFlag(data.destino)} ${data.destino}`;

    route.append(origin, arrow, destination);

    // Detalles
    const details = document.createElement('div');
    details.className = 'details';

    createSummaryDetail(
        details,
        'travelDate',
        data.fechaViaje || plannerText('notSpecified')
    );

    createSummaryDetail(
        details,
        'returnDate',
        data.fechaRegreso || plannerText('notSpecified')
    );

    const travelers = `${data.adultos} ${plannerText('adults')}` +
        (Number(data.ninos) > 0
            ? `, ${data.ninos} ${plannerText('children')}`
            : '');

    createSummaryDetail(details, 'travelers', travelers);
    createSummaryDetail(details, 'reason', data.tipo);
    createSummaryDetail(details, 'name', data.nombre);
    createSummaryDetail(details, 'whatsapp', data.whatsapp);
    createSummaryDetail(details, 'email', data.email);
    createSummaryDetail(details, 'residence', data.residencia);

    if (data.comentarios) {
        createSummaryDetail(details, 'comments', data.comentarios);
    }

    fragment.append(route, details);

    // Sustituye el contenido anterior sin interpretar HTML.
    summaryDiv.replaceChildren(fragment);
}

/* =========================================================
   8. VALIDACIÓN Y GENERACIÓN DEL RESUMEN
   ========================================================= */

window.showSummary = function () {
    const fields = ['nombre', 'whatsapp', 'email', 'residencia'];

    let valid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);

        if (!input) {
            valid = false;
            return;
        }

        const value = input.value.trim();

        if (!value) {
            showError(field, 'required');
            valid = false;
        } else {
            clearError(field);
        }
    });

    const emailInput = document.getElementById('email');

    if (!emailInput) return;

    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
        showError('email', 'invalidEmail');
        valid = false;
    }

    if (!valid) return;

    const getValue = id =>
        document.getElementById(id)?.value.trim() || '';

    const tipoSelect = document.getElementById('tipoViaje');

    const tipo = tipoSelect?.selectedIndex >= 0
        ? tipoSelect.options[tipoSelect.selectedIndex].text
        : '';

    lastSummaryData = {
        origen: getValue('origenInput'),
        destino: getValue('destinoInput'),
        fechaViaje: getValue('fechaViaje'),
        fechaRegreso: getValue('fechaRegreso'),
        adultos: getValue('adultos'),
        ninos: getValue('ninos'),
        tipo,
        nombre: getValue('nombre'),
        whatsapp: getValue('whatsapp'),
        email,
        residencia: getValue('residencia'),
        comentarios: getValue('comentarios')
    };

    renderSummary(lastSummaryData);

    showStep('step4');
};

/* =========================================================
   9. INICIALIZACIÓN
   ========================================================= */

function initializePlanner() {
    setupAutocomplete('origenInput', 'origenList');
    setupAutocomplete('destinoInput', 'destinoList');

    // Limpiar errores cuando el usuario corrige un campo.
    [
        'origenInput',
        'destinoInput',
        'nombre',
        'whatsapp',
        'email',
        'residencia'
    ].forEach(id => {
        const input = document.getElementById(id);

        if (!input) return;

        input.addEventListener('input', () => clearError(id));
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePlanner);
} else {
    initializePlanner();
}

/* =========================================================
   10. ACTUALIZACIÓN DE IDIOMA
   ========================================================= */

document.addEventListener('genesis:languagechange', () => {
    // Actualizar errores que ya estén visibles.
    document.querySelectorAll('.error-msg[data-translation-key]').forEach(error => {
        error.textContent = plannerText(error.dataset.translationKey);
    });

    // Actualizar el resumen si el usuario ya llegó al último paso.
    if (lastSummaryData) {
        renderSummary(lastSummaryData);
    }
});

/* =========================================================
   11. ENVÍO DE SOLICITUD A SUPABASE
   Integración con la RPC submit_travel_request
   Idiomas: ES / EN / FR / PT
   ========================================================= */

window.submitRequest = async function () {
    const button = document.getElementById('enviarBtn');

    if (!button || !lastSummaryData || button.disabled) {
        return;
    }

    const language = getPlannerLanguage();

    const messages = {
        es: {
            loading: 'Enviando tu solicitud...',
            success: 'Tu solicitud fue enviada correctamente. Nuestro equipo revisará la información y se pondrá en contacto contigo.',
            error: 'No fue posible enviar tu solicitud. Inténtalo nuevamente o contáctanos por WhatsApp.',
            sent: 'Solicitud enviada'
        },
        en: {
            loading: 'Sending your request...',
            success: 'Your request was sent successfully. Our team will review the information and contact you.',
            error: 'Your request could not be sent. Please try again or contact us via WhatsApp.',
            sent: 'Request sent'
        },
        fr: {
            loading: 'Envoi de votre demande...',
            success: 'Votre demande a été envoyée. Notre équipe examinera les informations et vous contactera.',
            error: 'Votre demande n’a pas pu être envoyée. Veuillez réessayer ou nous contacter sur WhatsApp.',
            sent: 'Demande envoyée'
        },
        pt: {
            loading: 'Enviando sua solicitação...',
            success: 'Sua solicitação foi enviada. Nossa equipe analisará as informações e entrará em contato.',
            error: 'Não foi possível enviar sua solicitação. Tente novamente ou entre em contato pelo WhatsApp.',
            sent: 'Solicitação enviada'
        }
    };

    const t = messages[language] || messages.es;

    function showSubmissionMessage(type) {
        const summary = document.getElementById('summaryContent');

        if (!summary) return;

        let message = document.getElementById('plannerSubmitStatus');

        if (!message) {
            message = document.createElement('p');
            message.id = 'plannerSubmitStatus';
            message.setAttribute('role', 'status');
            message.setAttribute('aria-live', 'polite');
            summary.insertAdjacentElement('afterend', message);
        }

        message.textContent = t[type];

        message.style.marginTop = '16px';
        message.style.fontSize = '14px';
        message.style.lineHeight = '1.6';
        message.style.color =
            type === 'success' ? '#66e6c4' :
            type === 'error' ? '#ff6b6b' :
            'inherit';
    }

    // Comprobar que Supabase está disponible.
    if (typeof window.saveTravelRequest !== 'function') {
        console.error(
            'GÉNESIS GLOBAL: saveTravelRequest no está disponible.'
        );

        showSubmissionMessage('error');
        return;
    }

    // Convertir los valores del selector a los tipos
    // reconocidos por la función SQL.
    const travelType = document.getElementById('tipoViaje');

    const tripTypeMap = {
        'visita-familiar': 'family_visit',
        'personal': 'other',
        'turismo': 'tourism',
        'otro': 'other'
    };

    const tipo = tripTypeMap[travelType?.value] || 'other';

    const originalText = button.textContent;

    button.disabled = true;
    button.setAttribute('aria-busy', 'true');

    showSubmissionMessage('loading');

    try {
        const result = await window.saveTravelRequest({
            ...lastSummaryData,
            tipo
        });

        // La RPC actual devuelve success: true al completar
        // correctamente las inserciones.
        if (!result || result.success !== true) {
            throw new Error(
                'Supabase no confirmó el registro de la solicitud.'
            );
        }

        showSubmissionMessage('success');

        button.textContent = t.sent;
        button.setAttribute('aria-busy', 'false');

        // No reactivar: evita enviar dos veces la misma solicitud.

    } catch (error) {
        console.error(
            'GÉNESIS GLOBAL — Error al enviar solicitud:',
            error
        );

        showSubmissionMessage('error');

        button.disabled = false;
        button.textContent = originalText;
        button.removeAttribute('aria-busy');
    }
};
