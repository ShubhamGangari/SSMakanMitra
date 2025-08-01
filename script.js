// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinksArray = document.querySelectorAll('.nav-link');
    navLinksArray.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});

// Courses Functions
function loadCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid || typeof courses === 'undefined') return;

    coursesGrid.innerHTML = '';

    courses.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';

    const featuresHTML = course.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');

    card.innerHTML = `
        <div class="course-image">
            📚
        </div>
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span class="course-duration">${course.duration}</span>
                <span class="course-level">${course.level}</span>
            </div>
            <div class="course-price">${course.price}</div>
            <ul class="course-features">
                ${featuresHTML}
            </ul>
            <a href="${course.enrollmentLink}" target="_blank" class="btn btn-primary" style="width: 100%; text-align: center;">
                Enroll Now
            </a>
        </div>
    `;

    return card;
}

// Professionals Functions
let allProfessionals = [];
let filteredProfessionals = [];

function loadProfessionals() {
    const professionalsGrid = document.getElementById('professionalsGrid');
    if (!professionalsGrid || typeof professionals === 'undefined') return;

    allProfessionals = [...professionals];
    filteredProfessionals = [...professionals];
    
    displayProfessionals(filteredProfessionals);
}

function displayProfessionals(professionalsToShow) {
    const professionalsGrid = document.getElementById('professionalsGrid');
    if (!professionalsGrid) return;

    professionalsGrid.innerHTML = '';

    professionalsToShow.forEach(professional => {
        const professionalCard = createProfessionalCard(professional);
        professionalsGrid.appendChild(professionalCard);
    });

    if (professionalsToShow.length === 0) {
        professionalsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d; font-size: 1.2rem;">No professionals found matching your criteria.</p>';
    }
}

function createProfessionalCard(professional) {
    const card = document.createElement('div');
    card.className = 'professional-card';

    const stars = '★'.repeat(Math.floor(professional.rating)) + 
                 (professional.rating % 1 >= 0.5 ? '☆' : '') + 
                 '☆'.repeat(5 - Math.ceil(professional.rating));

    const initials = professional.name.split(' ').map(n => n[0]).join('');

    card.innerHTML = `
        <div class="professional-header">
            <div class="professional-avatar">${initials}</div>
            <div class="professional-info">
                <h3>${professional.name}</h3>
                <p class="professional-role">${professional.role}</p>
            </div>
        </div>
        <div class="professional-details">
            <p><strong>City:</strong> ${professional.city}</p>
            <p><strong>Experience:</strong> ${professional.experience}</p>
            <p><strong>Specialization:</strong> ${professional.specialization}</p>
        </div>
        <div class="rating">
            <span class="stars">${stars}</span>
            <span>${professional.rating}</span>
        </div>
        <div class="contact-info">
            <p><strong>📞 Phone:</strong> ${professional.phone}</p>
            <p><strong>📧 Email:</strong> ${professional.email}</p>
        </div>
        ${professional.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
    `;

    return card;
}

function setupFilters() {
    const cityFilter = document.getElementById('cityFilter');
    const serviceFilter = document.getElementById('serviceFilter');
    const clearFilters = document.getElementById('clearFilters');

    if (!cityFilter || !serviceFilter || !clearFilters) return;

    cityFilter.addEventListener('change', applyFilters);
    serviceFilter.addEventListener('change', applyFilters);
    clearFilters.addEventListener('click', function() {
        cityFilter.value = '';
        serviceFilter.value = '';
        applyFilters();
    });
}

function applyFilters() {
    const cityFilter = document.getElementById('cityFilter');
    const serviceFilter = document.getElementById('serviceFilter');

    if (!cityFilter || !serviceFilter) return;

    const selectedCity = cityFilter.value;
    const selectedService = serviceFilter.value;

    filteredProfessionals = allProfessionals.filter(professional => {
        const cityMatch = !selectedCity || professional.city === selectedCity;
        const serviceMatch = !selectedService || professional.role === selectedService;
        return cityMatch && serviceMatch;
    });

    displayProfessionals(filteredProfessionals);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});