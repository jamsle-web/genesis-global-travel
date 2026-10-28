/* =========================================================
   GÉNESIS GLOBAL — PLANNER
   Lógica del formulario y validaciones (Fase 2)
   ========================================================= */

const countryData = window.countryData || [];

function showError(inputId, message) {
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
    errorEl.textContent = message;
}

function clearError(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.style.borderColor = '';
    const errorEl = input.parentElement.querySelector('.error-msg');
    if (errorEl) errorEl.remove();
}

function setupAutocomplete(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    if (!input || !list) return;

    input.addEventListener('input', function() {
        clearError(inputId);
        const query = this.value.toLowerCase().trim();
        if (query.length === 0) { list.classList.remove('show'); return; }
        const filtered = countryData.filter(c => c.name.toLowerCase().includes(query) || c.code.toLowerCase().includes(query));
        if (filtered.length === 0) { list.classList.remove('show'); return; }
        list.innerHTML = '';
        filtered.forEach(c => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.innerHTML = `<span class="flag">${c.flag}</span> ${c.name} (${c.code})`;
            item.addEventListener('click', function() {
                input.value = c.name;
                list.classList.remove('show');
                input.dispatchEvent(new Event('change'));
            });
            list.appendChild(item);
        });
        list.classList.add('show');
    });

    document.addEventListener('click', function(e) {
        if (!input.contains(e.target) && !list.contains(e.target)) list.classList.remove('show');
    });
}

function showStep(stepId) {
    document.querySelectorAll('.planner-step').forEach(el => el.classList.remove('active'));
    const step = document.getElementById(stepId);
    if (step) step.classList.add('active');
    document.getElementById('planner').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.goToStep1 = function() { showStep('step1'); };

window.goToStep2 = function() {
    const origen = document.getElementById('origenInput').value.trim();
    const destino = document.getElementById('destinoInput').value.trim();
    let valid = true;
    if (!origen) { showError('origenInput', 'Por favor, indica tu origen.'); valid = false; }
    if (!destino) { showError('destinoInput', 'Por favor, indica tu destino.'); valid = false; }
    if (valid) showStep('step2');
};

window.goToStep3 = function() { showStep('step3'); };

function getCountryFlag(name) {
    const found = countryData.find(c => c.name === name);
    return found ? found.flag : '🌍';
}

window.showSummary = function() {
    const fields = ['nombre', 'whatsapp', 'email', 'residencia'];
    let valid = true;

    fields.forEach(field => {
        const value = document.getElementById(field).value.trim();
        if (!value) { showError(field, 'Este campo es obligatorio.'); valid = false; } 
        else { clearError(field); }
    });

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) { showError('email', 'Ingresa un correo válido.'); valid = false; }

    if (!valid) return;

    const origen = document.getElementById('origenInput').value.trim();
    const destino = document.getElementById('destinoInput').value.trim();
    const fechaViaje = document.getElementById('fechaViaje').value;
    const fechaRegreso = document.getElementById('fechaRegreso').value;
    const adultos = document.getElementById('adultos').value;
    const ninos = document.getElementById('ninos').value;
    const tipoSelect = document.getElementById('tipoViaje');
    const tipo = tipoSelect.options[tipoSelect.selectedIndex].text;
    const nombre = document.getElementById('nombre').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const residencia = document.getElementById('residencia').value.trim();
    const comentarios = document.getElementById('comentarios').value.trim();

    const summaryDiv = document.getElementById('summaryContent');
    summaryDiv.innerHTML = `
        <div class="route">
            <span>${getCountryFlag(origen)} ${origen}</span>
            <span class="arrow">→</span>
            <span>${getCountryFlag(destino)} ${destino}</span>
        </div>
        <div class="details">
            <div><strong>📅 Fecha viaje:</strong> ${fechaViaje || 'No especificada'}</div>
            <div><strong>📅 Regreso:</strong> ${fechaRegreso || 'No especificada'}</div>
            <div><strong>👥 Viajeros:</strong> ${adultos} adultos${ninos > 0 ? `, ${ninos} niños` : ''}</div>
            <div><strong>❤️ Motivo:</strong> ${tipo}</div>
            <div><strong>👤 Nombre:</strong> ${nombre}</div>
            <div><strong>📱 WhatsApp:</strong> ${whatsapp}</div>
            <div><strong>📧 Email:</strong> ${email}</div>
            <div><strong>🌍 Residencia:</strong> ${residencia}</div>
            ${comentarios ? `<div><strong>💬 Comentarios:</strong> ${comentarios}</div>` : ''}
        </div>
    `;
    showStep('step4');
};

document.addEventListener('DOMContentLoaded', () => {
    setupAutocomplete('origenInput', 'origenList');
    setupAutocomplete('destinoInput', 'destinoList');
});
