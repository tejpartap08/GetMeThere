document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // You can add more interactive JavaScript here later, e.g.:
    // - Form submission handling (for the contact form)
    // - Animations on scroll
    // - Dynamic content loading (more advanced)

    console.log("GetMeThere! website loaded.");
});