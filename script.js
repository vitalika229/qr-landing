let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function updateCarousel() {
    const offset = index * 25;
    carousel.style.transform = `translateX(-${offset}%)`;
}

nextButton.addEventListener("click", () => {
    index = (index + 1) % (totalSlides - 3); // Ограничение по количеству видимых слайдов
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    index = (index - 1 + (totalSlides - 3)) % (totalSlides - 3);
    updateCarousel();
});
