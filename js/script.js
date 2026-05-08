/* ============================================
   Driscoll Chen - Portfolio JavaScript
   Final Project - Web Design

   Grading rubric coverage:
   - At least 2 DOM queries
   - At least 1 function called in response to a DOM event
   - The function updates page content and/or CSS properties
   ============================================ */

// ============================================
// Feature 1: Expand/collapse experience cards
// DOM Query #1: querySelectorAll
// DOM Event: click
// ============================================

const experienceCards = document.querySelectorAll('.experience-card[data-card]');

experienceCards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Get the details panel and the hint label
        const details = card.querySelector('.exp-details');
        const hint = card.querySelector('.expand-hint');

        if (!details) return;

        // Toggle the expanded class (modifies CSS via class)
        details.classList.toggle('expanded');

        // Update the hint text (modifies page content)
        if (details.classList.contains('expanded')) {
            if (hint) hint.textContent = '▲ Click to collapse';
        } else {
            if (hint) hint.textContent = '▼ Click for details';
        }
    });
});

// ============================================
// Feature 2: Theme toggle (Light / Dark Mode)
// DOM Query #2: getElementById
// DOM Event: click
// Modifies CSS (via class) and updates button text
// ============================================

const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        // Toggle the dark-mode class (modifies CSS properties)
        document.body.classList.toggle('dark-mode');

        // Update the button text (modifies page content)
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Switch to Light Mode';
        } else {
            themeToggleBtn.textContent = '🌙 Switch to Dark Mode';
        }
    });
}

// ============================================
// Feature 3: Contact form validation
// DOM Query #3: getElementById (form fields)
// DOM Event: click on submit button
// ============================================

const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const feedback = document.getElementById('form-feedback');

if (submitBtn) {
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // Read input values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Basic empty-field check
        if (name === '' || email === '' || message === '') {
            feedback.textContent = '⚠️ Please fill in all fields before submitting.';
            feedback.className = 'form-message error';
            return;
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = '⚠️ Please enter a valid email address.';
            feedback.className = 'form-message error';
            return;
        }

        // Success: update page content
        feedback.textContent = '✓ Thanks, ' + name + '! Your message has been recorded. I will get back to you at ' + email + '.';
        feedback.className = 'form-message success';

        // Clear the form
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
}

// ============================================
// Feature 4: Navbar shadow on scroll
// DOM Query #4: querySelector
// DOM Event: scroll
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// Feature 5: Fade-in animation on load
// Adds the fade-in class to each main section
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    sections.forEach(function(section, index) {
        section.style.animationDelay = (index * 0.1) + 's';
        section.classList.add('fade-in');
    });
});
