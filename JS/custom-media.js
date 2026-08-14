const slides = document.querySelectorAll(".carousel-slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);