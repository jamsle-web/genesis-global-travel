document.addEventListener('keydown', function(e) {
    // Ctrl + Alt + G
    if (e.ctrlKey && e.altKey && (e.key === 'g' || e.key === 'G')) {
        e.preventDefault();
        // Redirige a la carpeta admin que creamos
        window.location.href = "/admin/login.html";
    }
});
