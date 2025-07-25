// =====================
// CAROUSEL
// =====================
let currentSlide = 0;
const totalSlides = 3;
const carouselTrack = document.getElementById('carouselTrack');
const indicators = document.querySelectorAll('.carousel-indicator');

function updateCarousel() {
    const translateX = -currentSlide * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Auto-play functionality
setInterval(nextSlide, 5000);

// Touch/swipe support for carousel
let startX = 0;
let endX = 0;

carouselTrack.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

carouselTrack.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;
    if (Math.abs(diff) > swipeThreshold) {
        diff > 0 ? nextSlide() : previousSlide();
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();
});


// =====================
// MOVIES CONTAINER SCROLL
// =====================
function scrollMovies(direction) {
    const container = document.getElementById('moviesContainer');
    const scrollAmount = 340; // Width of card + gap
    
    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

const container = document.getElementById('moviesContainer');
let startTouchX = 0;
let scrollLeft = 0;

// Touch/swipe support for movie container
container.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('touchmove', (e) => {
    if (!startTouchX) return;
    e.preventDefault();
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startTouchX) * 2;
    container.scrollLeft = scrollLeft - walk;
});

container.addEventListener('touchend', () => {
    startTouchX = 0;
});

// Mouse wheel horizontal scroll
container.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({
            left: e.deltaY > 0 ? 340 : -340,
            behavior: 'smooth'
        });
    }
});