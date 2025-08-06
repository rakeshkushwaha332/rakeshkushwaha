// Theme switching functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  
    
    // Add smooth transition effect
    html.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        html.style.transition = '';
    }, 300);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.className = 'fas fa-sun';
        icon.style.transform = 'rotate(180deg)';
    }
}

// Project Modal Functionality
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.querySelector('.modal-title');
const mainImage = document.getElementById('mainImage');
const thumbnails = document.getElementById('thumbnails');
const projectDescription = document.getElementById('projectDescription');
const projectFeatures = document.getElementById('projectFeatures');
const projectTech = document.getElementById('projectTech');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Project data - Updated with Rakesh's actual projects
const projectsData = {
    devfolio: {
        title: 'DevFolio – Personal Portfolio Website',
        description: 'A responsive web application designed to showcase projects, skills, and professional experience. Built with modern web technologies to create an engaging and interactive portfolio experience.',
        images: [
            'images/Portfolio.png',
            'images/project_portfolio.png',
            'images/getintuoch.png'

        ],
        features: [
            'Project gallery with detailed descriptions',
            'Contact form integration with EmailJS',
            'Smooth animations and transitions',
            'Mobile-friendly responsive design',
            'GitHub and LinkedIn integration',
            'Dark/light theme toggle',
            'Interactive project modals',
            'Professional portfolio layout'
        ],
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'JavaScript', 'HTML5', 'CSS3']
    },
    wonderlust: {
        title: 'WonderLust – Airbnb Clone',
        description: 'A full-stack web application that replicates Airbnb functionality, allowing users to explore, list, and book stays worldwide. Features comprehensive booking system with payment integration.',
        images: [
            'images/Homepage.png',
            'images/show_hotel.png',
            'images/my_booking.png',
            'images/new_listing.png'
            

        ],
        features: [
            'Search and filter listings',
            'User authentication system',
            'Post and manage stays',
            'Review and rating system',
            'Mapbox integration for location',
            'Razorpay payment integration (in progress)',
            'Responsive design for all devices',
            'Real-time booking management'
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JavaScript', 'Mapbox', 'Razorpay']
    },
    agristack: {
        title: 'AgriStack – Open Source Agriculture Platform',
        description: 'A MERN stack web application developed during a hackathon to empower farmers through digitized agricultural data and services. Focuses on providing valuable insights and tools for modern farming.',
        images: [
            'images/agrifusion_home.png',
            'images/agrifusion_about.png',
            'images/agrifustion_map.png',
            'images/agristack_login.png'
        ],
        features: [
            'Farmer profile management',
            'Crop data management system',
            'Advisory dashboard for farmers',
            'API integration for weather data',
            'Market price tracking',
            'Agricultural insights and tips',
            'Responsive mobile design',
            'Real-time data updates'
        ],
        technologies: ['EJS', 'JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'Weather API']
    }
};

let currentProject = null;
let currentImageIndex = 0;

// Open project modal
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    currentProject = projectId;
    currentImageIndex = 0;
    
    // Update modal content
    modalTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    
    // Update main image
    mainImage.src = project.images[0];
    mainImage.alt = project.title;
    
    // Create thumbnails
    createThumbnails(project.images);
    
    // Update features
    updateFeatures(project.features);
    
    // Update technologies
    updateTechnologies(project.technologies);
    
    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Create thumbnails
function createThumbnails(images) {
    thumbnails.innerHTML = '';
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Project image ${index + 1}`;
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        thumbnail.addEventListener('click', () => {
            setActiveImage(index);
        });
        
        thumbnails.appendChild(thumbnail);
    });
}

// Set active image
function setActiveImage(index) {
    if (!currentProject) return;
    
    const project = projectsData[currentProject];
    currentImageIndex = index;
    
    // Update main image
    mainImage.src = project.images[index];
    
    // Update active thumbnail
    const allThumbnails = thumbnails.querySelectorAll('.thumbnail');
    allThumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Update features
function updateFeatures(features) {
    projectFeatures.innerHTML = '';
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        projectFeatures.appendChild(li);
    });
}

// Update technologies
function updateTechnologies(technologies) {
    projectTech.innerHTML = '';
    technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        projectTech.appendChild(tag);
    });
}

// Close modal
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
    currentProject = null;
}

// Navigation functions
function nextImage() {
    if (!currentProject) return;
    
    const project = projectsData[currentProject];
    const nextIndex = (currentImageIndex + 1) % project.images.length;
    setActiveImage(nextIndex);
}

function prevImage() {
    if (!currentProject) return;
    
    const project = projectsData[currentProject];
    const prevIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
    setActiveImage(prevIndex);
}

// Event listeners
modalClose.addEventListener('click', closeProjectModal);
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal || e.target.classList.contains('modal-overlay')) {
        closeProjectModal();
    }
});

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!projectModal.classList.contains('active')) return;
    
    switch (e.key) {
        case 'Escape':
            closeProjectModal();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
});

// Project card click handlers
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const viewButtons = document.querySelectorAll('.view-project-btn');
    
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on links
            if (e.target.closest('.project-link')) return;
            
            const projectId = card.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectCard = button.closest('.project-card');
            const projectId = projectCard.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
});

// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'var(--navbar-bg)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'var(--navbar-bg)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-content, .skills-grid, .projects-grid, .contact-content, .experience-grid');
    
    animatedElements.forEach((element, index) => {
        if (index % 2 === 0) {
            element.classList.add('slide-in-left');
        } else {
            element.classList.add('slide-in-right');
        }
        observer.observe(element);
    });
    
    // Add fade-in animation to individual elements
    const fadeElements = document.querySelectorAll('.skill-category, .project-card, .stat, .experience-card');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.innerHTML;
    const highlightElement = heroTitle.querySelector('.highlight');
    
    if (highlightElement) {
        const highlightText = highlightElement.textContent;
        heroTitle.innerHTML = heroTitle.innerHTML.replace(highlightElement.outerHTML, '<span class="highlight"></span>');
        const newHighlight = heroTitle.querySelector('.highlight');
        
        setTimeout(() => {
            typeWriter(newHighlight, highlightText, 150);
        }, 1000);
    }
});

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const profileCard = document.querySelector('.profile-card');
    
    if (hero && profileCard) {
        const rate = scrolled * -0.5;
        profileCard.style.transform = `translateY(${rate}px)`;
    }
});

// Skill progress animation
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Trigger skill animation when skills section is visible
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Scroll to top functionality
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--accent-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px var(--shadow-color);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-3px)';
        scrollBtn.style.boxShadow = '0 6px 20px var(--shadow-color)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0)';
        scrollBtn.style.boxShadow = '0 4px 12px var(--shadow-color)';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// Preloader (optional)
function createPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = preloader.querySelector('.spinner');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid var(--border-color);
        border-top: 3px solid var(--accent-primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(preloader);
    
    // Remove preloader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
}

// Initialize preloader
createPreloader(); 