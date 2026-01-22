// menu.js - Versión mejorada

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        let timeoutId;

        // Para desktop: hover
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            dropdown.querySelector('.dropdown-menu').style.display = 'grid';
        });

        dropdown.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                dropdown.querySelector('.dropdown-menu').style.display = 'none';
            }, 300);
        });

        // Para mobile: click
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu.style.display === 'grid' || menu.style.display === 'flex') {
                    menu.style.display = 'none';
                } else {
                    menu.style.display = 'grid';
                    // Cerrar otros submenus
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.querySelector('.dropdown-menu').style.display = 'none';
                    });
                }
            }
        });
    });
});