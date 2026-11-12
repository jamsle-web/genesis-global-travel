
/* =========================================================
   GÉNESIS GLOBAL — SECRET TIGER
   Atajo de acceso al panel administrativo
   ========================================================= */

(() => {
    'use strict';

    const ADMIN_LOGIN_URL = 'admin/login.html';

    document.addEventListener('keydown', event => {

        // Evitar activar el atajo mientras se escribe.
        const target = event.target;

        const isTyping =
            target instanceof HTMLElement &&
            (
                target.isContentEditable ||
                ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
            );

        if (isTyping) return;

        // Ctrl + Alt + G
        if (
            event.ctrlKey &&
            event.altKey &&
            !event.shiftKey &&
            (event.key === 'g' || event.key === 'G')
        ) {
            event.preventDefault();

            window.location.assign(ADMIN_LOGIN_URL);
        }
    });

})();
