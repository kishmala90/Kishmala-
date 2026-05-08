document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Intersection Observer for Reveal Animations
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once it reveals, we don't need to observe it anymore
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // Simple Mobile Menu Toggle (if needed)
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Mobile menu logic could go here
            console.log('Menu toggled');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax-ish atmosphere movement on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const atmosphere = document.querySelector('.atmosphere');
        if (atmosphere) {
            atmosphere.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Micro-interaction: Logo hover effect
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.innerHTML = 'AFTAB.';
        });
        logo.addEventListener('mouseleave', () => {
            logo.innerHTML = 'AS.';
        });
    }
});
