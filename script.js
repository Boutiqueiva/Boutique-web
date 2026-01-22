let lastScrollTop = 0;
const mainHeader = document.getElementById('smartHeader');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        if (scrollTop > lastScrollTop) {
            mainHeader.classList.add('header-hidden');
        } else {
            mainHeader.classList.remove('header-hidden');
        }
    } else {
        mainHeader.classList.remove('header-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function moverSlider(distancia) {
    document.getElementById('mainSlider')
        .scrollBy({ left: distancia, behavior: 'smooth' });
}
