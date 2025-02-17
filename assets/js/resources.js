document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track1");
    const slides = Array.from(document.querySelectorAll(".carousel-slide1"));
    const dots = Array.from(document.querySelectorAll(".dot1"));
    const prevButton = document.querySelector(".prev1");
    const nextButton = document.querySelector(".next1");

    let currentIndex = 0;

    // Update Carousel Position
    function updateCarousel(index) {
        const slideWidth = slides[0].offsetWidth + 20; // Include margin
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        dots.forEach((dot, i) => dot.classList.toggle("active1", i === index));
    }

    // Handle Dot Clicks
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    // Handle Previous Button
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel(currentIndex);
    });

    // Handle Next Button
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel(currentIndex);
    });

    // Initialize First Slide
    updateCarousel(currentIndex);
});