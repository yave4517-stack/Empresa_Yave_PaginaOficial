document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de menú y la barra lateral
    var menuToggle = document.getElementById('menu-toggle');
    var sidebar = document.getElementById('sidebar');

    // Verifica que ambos elementos existan antes de añadir el evento
    if (menuToggle && sidebar) {
        // Agrega un listener para el evento 'click' en el botón
        menuToggle.addEventListener('click', function() {
            // Alterna la clase 'active' en la barra lateral
            // Esta clase 'active' es la que maneja la visibilidad en CSS
            sidebar.classList.toggle('active');
        });

        // Opcional: Cerrar la barra lateral si se hace clic en un enlace
        var sidebarLinks = sidebar.querySelectorAll('.sidebar-links a');
        sidebarLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) { // Asume que 768px es el breakpoint móvil
                    sidebar.classList.remove('active');
                }
            });
        });
    }
});