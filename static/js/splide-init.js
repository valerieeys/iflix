document.addEventListener('DOMContentLoaded', function () {
    new Splide('#carousel', {
        type: 'loop',
        autoplay: true,
        interval: 4000,
        arrows: true,
        pagination: true,
        speed: 800,
    }).mount();
});