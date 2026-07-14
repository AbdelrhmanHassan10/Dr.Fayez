document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Progress & Scroll To Top
    const progressBar = document.getElementById('scroll-progress-bar');
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    const navbar = document.getElementById('navbar');
    const navContainer = document.getElementById('nav-container');

    const handleScroll = () => {
        const h = document.documentElement;
        const scrollPosition = h.scrollTop;
        const maxScroll = h.scrollHeight - h.clientHeight;
        const scrollPercentage = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;
        
        // Update Progress Bar
        if (progressBar) {
            progressBar.style.width = `${scrollPercentage}%`;
        }

        // Scroll To Top Button
        if (scrollTopBtn) {
            if (scrollPosition > 500) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        }

        // Navbar Scroll Effect
        if (navbar && navContainer) {
            if (scrollPosition > 20) {
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
                navContainer.classList.remove('bg-transparent');
                navContainer.classList.add('glass-panel');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
                navContainer.classList.add('bg-transparent');
                navContainer.classList.remove('glass-panel');
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Scroll to Top Click
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 2. Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            const menuOpenIcon = document.getElementById('menu-icon-open');
            const menuCloseIcon = document.getElementById('menu-icon-close');
            
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                if(menuOpenIcon) menuOpenIcon.classList.add('hidden');
                if(menuCloseIcon) menuCloseIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                if(menuOpenIcon) menuOpenIcon.classList.remove('hidden');
                if(menuCloseIcon) menuCloseIcon.classList.add('hidden');
            }
        });

        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                const menuOpenIcon = document.getElementById('menu-icon-open');
                const menuCloseIcon = document.getElementById('menu-icon-close');
                if(menuOpenIcon) menuOpenIcon.classList.remove('hidden');
                if(menuCloseIcon) menuCloseIcon.classList.add('hidden');
            });
        });
    }

    // 3. Intersection Observer (Fade Up Animations)
    const revealElements = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("animate-fade-up");
                e.target.style.opacity = "1";
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((el) => {
        el.style.opacity = "0";
        io.observe(el);
    });

    // 4. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
        const btn = item.querySelector('.faq-btn');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        if (btn && content && icon) {
            btn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other accordions
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if(otherContent && otherIcon) {
                        otherContent.classList.remove('open');
                        otherIcon.classList.remove('rotate-180');
                    }
                });

                if (!isActive) {
                    // Open this accordion
                    item.classList.add('active');
                    content.classList.add('open');
                    icon.classList.add('rotate-180');
                }
            });
        }
    });
});
