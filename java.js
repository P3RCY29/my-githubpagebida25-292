// =====================
// BOOKING FORM VALIDATION
// =====================
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {

    // Set min date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        const fields = bookingForm.querySelectorAll('[required]');
        fields.forEach(field => {
            const error = field.parentElement.querySelector('.ff-error');
            if (!field.value.trim()) {
                field.classList.add('error');
                if (error) error.classList.add('visible');
                valid = false;
            } else {
                field.classList.remove('error');
                if (error) error.classList.remove('visible');
            }
        });

        if (valid) {
            const name = document.getElementById('fullName').value;
            const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
            const barber = document.getElementById('barber').options[document.getElementById('barber').selectedIndex].text;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').options[document.getElementById('time').selectedIndex].text;

            alert(`✅ Booking Confirmed!\n\n👤 Name: ${name}\n✂ Service: ${service}\n💈 Barber: ${barber}\n📅 Date: ${date}\n🕐 Time: ${time}\n\nWe will contact you shortly to confirm your appointment.`);
            bookingForm.reset();
        }
    });

    // Live validation
    bookingForm.querySelectorAll('[required]').forEach(field => {
        field.addEventListener('input', function () {
            const error = field.parentElement.querySelector('.ff-error');
            if (field.value.trim()) {
                field.classList.remove('error');
                if (error) error.classList.remove('visible');
            }
        });
    });
}

// =====================
// CONTACT FORM VALIDATION
// =====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        const fields = contactForm.querySelectorAll('[required]');
        fields.forEach(field => {
            const error = field.parentElement.querySelector('.ff-error');
            if (!field.value.trim()) {
                field.classList.add('error');
                if (error) error.classList.add('visible');
                valid = false;
            } else {
                field.classList.remove('error');
                if (error) error.classList.remove('visible');
            }
        });

        // Email validation
        const emailField = document.getElementById('contactEmail');
        if (emailField && emailField.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailError = emailField.parentElement.querySelector('.ff-error');
            if (!emailRegex.test(emailField.value)) {
                emailField.classList.add('error');
                if (emailError) emailError.classList.add('visible');
                valid = false;
            }
        }

        if (valid) {
            const name = document.getElementById('contactName').value;
            alert(`✅ Message Sent!\n\nThank you ${name}! We have received your message and will get back to you shortly.`);
            contactForm.reset();
        }
    });

    // Live validation
    contactForm.querySelectorAll('[required]').forEach(field => {
        field.addEventListener('input', function () {
            const error = field.parentElement.querySelector('.ff-error');
            if (field.value.trim()) {
                field.classList.remove('error');
                if (error) error.classList.remove('visible');
            }
        });
    });
}

// =====================
// SERVICES FILTER
// =====================
function filterServices(category) {
    const items = document.querySelectorAll('.service-item');
    const buttons = document.querySelectorAll('.ff-filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// =====================
// NAVBAR SCROLL EFFECT
// =====================
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.ff-navbar');
    if (navbar) {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});