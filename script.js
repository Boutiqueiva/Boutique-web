let lastScrollTop = 0;
const mainHeader = document.getElementById('smartHeader');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        if (scrollTop > lastScrollTop) {
            mainHeader.style.transform = 'translateY(-100%)';
        } else {
            mainHeader.style.transform = 'translateY(0)';
        }
    } else {
        mainHeader.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function moverSlider(distancia) {
    document.getElementById('mainSlider')
        .scrollBy({ left: distancia, behavior: 'smooth' });
}
