let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll(".carousel-slide model-viewer");
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    document.querySelector(".carousel-container").style.transform = `translateX(-${currentSlide * 100}%)`;
}
