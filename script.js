// Factory Fades - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const hasBookingModal = document.getElementById('successModal');

    if (bookingForm && !hasBookingModal) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameEl = document.getElementById('name');
            const serviceEl = document.getElementById('service');
            const dateEl = document.getElementById('date');
            const timeEl = document.getElementById('time');

            const name = nameEl ? nameEl.value : 'Client';
            const service = serviceEl && serviceEl.selectedIndex >= 0
                ? serviceEl.options[serviceEl.selectedIndex].text
                : 'Service';
            const date = dateEl ? dateEl.value : '';
            const time = timeEl ? timeEl.value : '';

            alert(`Booking request received!\n\nThank you, ${name}!\n\nService: ${service}\nDate: ${date}\nTime: ${time}\n\nWe will confirm by SMS shortly.`);

            bookingForm.reset();
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent. We will reply within 24 hours.');
            contactForm.reset();
        });
    }

    const dateInput = document.getElementById('date');
    if (dateInput && !dateInput.getAttribute('min')) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        if (!dateInput.value) {
            dateInput.value = today;
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href.length > 1) {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        const linkPage = href.split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        const toggleScrollBtn = function() {
            if (window.scrollY > 350) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        };
        window.addEventListener('scroll', toggleScrollBtn, { passive: true });
        toggleScrollBtn();
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
