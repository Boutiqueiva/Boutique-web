document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       CAMBIO DE IMÁGENES POR LOOK
    =============================== */

    document.querySelectorAll(".look-box").forEach(lookBox => {

        const mainImg = lookBox.querySelector(".look-main-img");
        const thumbs = lookBox.querySelectorAll(".look-thumb");
        const btnLook = lookBox.querySelector(".btn-look");
        const title = lookBox.querySelector(".lookTitle");
        const desc = lookBox.querySelector(".lookDesc");

        const originalImg = mainImg.dataset.original;
        const originalTitle = mainImg.dataset.title;
        const originalDesc = mainImg.dataset.desc;

        // Click en miniaturas
        thumbs.forEach(thumb => {
            thumb.addEventListener("click", () => {
                mainImg.src = thumb.dataset.image;
                title.textContent = thumb.dataset.title;
                desc.textContent = thumb.dataset.desc;
            });
        });

        // Botón "Ver Look" → regresar al conjunto
        btnLook.addEventListener("click", () => {
            mainImg.src = originalImg;
            title.textContent = originalTitle;
            desc.textContent = originalDesc;
        });
    });


    /* ===============================
       SCROLL CON FLECHAS
    =============================== */

    const scrollContainer = document.querySelector(".look-scroll");
    const btnPrev = document.getElementById("lookPrev");
    const btnNext = document.getElementById("lookNext");

    if (scrollContainer && btnPrev && btnNext) {

        btnNext.addEventListener("click", () => {
            scrollContainer.scrollBy({
                left: 380,
                behavior: "smooth"
            });
        });

        btnPrev.addEventListener("click", () => {
            scrollContainer.scrollBy({
                left: -380,
                behavior: "smooth"
            });
        });
    }

});
