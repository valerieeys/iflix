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
const container = document.getElementById('moviesContainer');

function scrollMovies(direction) {
    const scrollAmount = 340; // Width of card + gap
    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

// Touch/swipe support
let startTouchX = 0;
let scrollLeft = 0;

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


// =====================
// MALL SELECTION
// =====================
document.querySelectorAll('.select-mall-btn').forEach(button => {
    button.addEventListener('click', function() {
        const mallCard = this.closest('.mall-card');
        const mallName = mallCard.querySelector('h3').textContent;
        
        // Remove active state from all cards
        document.querySelectorAll('.mall-card').forEach(card => {
            card.classList.remove('ring-2', 'ring-red-500');
            const btn = card.querySelector('.select-mall-btn');
            btn.textContent = 'Pilih Lokasi';
            btn.classList.remove('bg-green-600');
            btn.classList.add('bg-red-600');
        });
        
        // Add active state to selected card
        mallCard.classList.add('ring-2', 'ring-red-500');
        this.textContent = 'Terpilih ✓';
        this.classList.remove('bg-red-600');
        this.classList.add('bg-green-600');
        
        // Log selected mall (atau bisa disimpan ke localStorage)
        console.log('Selected mall:', mallName);
    });
});