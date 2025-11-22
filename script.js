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
// =======================================================
// LÓGICA PARA EL MENÚ SIDEBAR (Navegación Móvil)
// =======================================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.seccion-principal-wrapper');

    if (menuToggle && sidebar && mainContent) {
        // Toggle (mostrar/ocultar) el menú al hacer clic en el botón de hamburguesa
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
        
        // Cierra el sidebar si se hace click en el contenido principal (solo si está abierto)
        mainContent.addEventListener('click', function() {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
        
        // Evita que el click dentro del propio sidebar cierre el menú inmediatamente
        sidebar.addEventListener('click', function(e) {
             e.stopPropagation();
        });
    }

    // Nota: Si necesitas alguna funcionalidad extra en el futuro (como sliders o validación de formularios), 
    // debes añadir el código aquí, dentro o después de este bloque de DOMContentLoaded.
});