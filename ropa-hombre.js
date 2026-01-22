// ropa-hombre.js

document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.querySelector('.filter-btn');
    const filtersSidebar = document.querySelector('.filters-sidebar');

    // Toggle filters sidebar
    filterBtn.addEventListener('click', () => {
        filtersSidebar.style.display = filtersSidebar.style.display === 'none' ? 'block' : 'none';
        filterBtn.textContent = filtersSidebar.style.display === 'none' ? 'Mostrar filtros' : 'Ocultar filtros';
    });

    // Ordenar por dropdown (opcional)
    const sortDropdown = document.querySelector('.sort-dropdown');
    sortDropdown.addEventListener('click', () => {
        alert('Funcionalidad de ordenar no implementada aún.');
    });
});