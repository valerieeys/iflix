// =======================
// NAVBAR SCROLL EFFECT
// =======================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-red-800', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-red-800', 'shadow-lg');
        navbar.classList.add('bg-transparent');
    }
});


// =======================
// MOBILE MENU TOGGLE
// =======================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!mobileMenuButton || !mobileMenu || !menuIcon || !closeIcon) return;

    // Default: menu terbuka? tidak
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    mobileMenu.classList.add('hidden');

    // Toggle menu
    mobileMenuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = mobileMenu.classList.contains('hidden');

        // Tampilkan / sembunyikan menu
        mobileMenu.classList.toggle('hidden');

        if (isHidden) { 
            // Kalau menu sebelumnya hidden → buka menu
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else { 
            // Kalau menu sebelumnya terbuka → tutup menu
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Klik di luar menu → tutup
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Klik link di menu → tutup
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
});


// =====================
// PROFILE DROPDOWN
// =====================
document.addEventListener('DOMContentLoaded', function() {
    const profileButton = document.getElementById('profile-dropdown-button');
    const profileMenu = document.getElementById('profile-dropdown-menu');
    
    if (profileButton && profileMenu) {
        profileButton.addEventListener('click', function(e) {
            e.stopPropagation();
            profileMenu.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!profileButton.contains(e.target) && !profileMenu.contains(e.target)) {
                profileMenu.classList.add('hidden');
            }
        });
    }
});