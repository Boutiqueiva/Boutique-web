let lastScrollTop = 0;
const mainHeader = document.getElementById('smartHeader');

if (mainHeader) {
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
}

function moverSlider(distancia) {
    const slider = document.getElementById('mainSlider');
    if (slider) {
        slider.scrollBy({ left: distancia, behavior: 'smooth' });
    }
}
