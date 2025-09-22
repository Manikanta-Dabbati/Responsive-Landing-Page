document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.getElementById('main-nav');
    const modeToggle = document.getElementById('mode-toggle');
    const pageSections = document.querySelectorAll('.fade-in');

    // 1. Navigation bar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });

    // 2. Light/Dark mode toggle
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Change button emoji based on mode
        if (document.body.classList.contains('dark-mode')) {
            modeToggle.textContent = '🌙';
        } else {
            modeToggle.textContent = '☀️';
        }
    });

    // 3. Fade-in animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    pageSections.forEach(section => {
        observer.observe(section);
    });
});