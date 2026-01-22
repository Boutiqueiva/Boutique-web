// mobile-menu.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerMenu');
    const mobileMenuPanel = document.getElementById('mobileMenuPanel');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const backToCategories = document.getElementById('backToCategories');
    const mobileCategoryItems = document.querySelectorAll('.mobile-category-item');
    const mobileSubmenu = document.getElementById('mobileSubmenu');
    const submenuTitle = document.getElementById('submenuTitle');
    const submenuContent = document.getElementById('submenuContent');

    // Datos de las categorías
    const categories = {
        all: {
            title: 'Todos',
            items: [
                { name: 'Lo Nuevo', link: '#' },
                { name: 'Hombre', link: '#' },
                { name: 'Mujer', link: '#' },
                { name: 'Niños', link: '#' },
                { name: 'Ofertas', link: '#' },
                { name: 'SNKRS', link: '#' }
            ]
        },
        hombre: {
            title: 'Hombre',
            items: [
                { name: 'Destacados', link: '#' },
                { name: 'Calzado', link: '#' },
                { name: 'Ropa', link: '#' },
                { name: 'Comprar por deporte', link: '#' },
                { name: 'Accesorios y equipo', link: '#' }
            ]
        },
        mujer: {
            title: 'Mujer',
            items: [
                { name: 'Destacados', link: '#' },
                { name: 'Calzado', link: '#' },
                { name: 'Ropa', link: '#' },
                { name: 'Comprar por deporte', link: '#' },
                { name: 'Accesorios y equipo', link: '#' }
            ]
        },
        ninos: {
            title: 'Niños',
            items: [
                { name: 'Destacados', link: '#' },
                { name: 'Calzado', link: '#' },
                { name: 'Ropa', link: '#' },
                { name: 'Comprar por deporte', link: '#' },
                { name: 'Accesorios y equipo', link: '#' }
            ]
        },
        ofertas: {
            title: 'Ofertas',
            items: []
        },
        snkrs: {
            title: 'SNKRS',
            items: []
        }
    };

    // Mostrar/Ocultar panel
    hamburger.addEventListener('click', () => {
        mobileMenuPanel.classList.add('active');
    });

    closeMobileMenu.addEventListener('click', () => {
        mobileMenuPanel.classList.remove('active');
        mobileSubmenu.classList.remove('active');
    });

    // Navegar a submenú
    mobileCategoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            showSubmenu(category);
        });
    });

    // Volver a categorías
    backToCategories.addEventListener('click', () => {
        mobileSubmenu.classList.remove('active');
    });

    function showSubmenu(category) {
        const cat = categories[category];
        if (!cat) return;

        submenuTitle.textContent = cat.title;

        let html = '';
        cat.items.forEach(item => {
            html += `
                <div class="submenu-category">
                    <h4>${item.name}</h4>
                    ${item.link ? `<a href="${item.link}">${item.name}</a>` : ''}
                </div>
            `;
        });

        submenuContent.innerHTML = html;
        mobileSubmenu.classList.add('active');
    }
});