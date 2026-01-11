// ===================================
// Typing Animation
// ===================================
const typingText = document.getElementById('typing-text');
const typingStrings = [
    'Software Development Engineer',
    'Python Developer',
    'Data Engineer',
    'Computer Vision Specialist',
    'Backend Architect',
    'ML Engineer',
    'Software Engineer',
    'Problem Solver',
    'Tech Enthusiast',
    'Creative Coder'
];

let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
    const currentString = typingStrings[stringIndex];
    
    if (isDeleting) {
        typingText.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typingText.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }
    
    if (!isDeleting && charIndex === currentString.length) {
        typingDelay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % typingStrings.length;
        typingDelay = 500;
    }
    
    setTimeout(typeEffect, typingDelay);
}

// Start typing animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// ===================================
// Navigation Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===================================
// Mobile Menu Toggle
// ===================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    observer.observe(item);
});

// Observe project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    observer.observe(card);
});

// Observe interest cards
const interestCards = document.querySelectorAll('.interest-card');
interestCards.forEach(card => {
    observer.observe(card);
});

// Observe skill categories
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach(category => {
    observer.observe(category);
});

// ===================================
// Animated Counter for Stats
// ===================================
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, stepTime);
}

// ===================================
// Form Handling
// ===================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// ===================================
// Scroll Reveal Animation
// ===================================
const revealElements = document.querySelectorAll('.about-text, .section-title, .section-subtitle');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    revealObserver.observe(element);
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// ===================================
// Floating Shapes Animation
// ===================================
const shapes = document.querySelectorAll('.shape');
shapes.forEach((shape, index) => {
    shape.style.animationDelay = `${index * 2}s`;
});

// ===================================
// Add smooth reveal animation to sections
// ===================================
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sectionObserver.observe(section);
});

// ===================================
// Initialize page
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    navLinks[0].classList.add('active');
    
    // Add loading animation complete class
    document.body.classList.add('loaded');
    
    console.log('Portfolio website loaded successfully!');
});
