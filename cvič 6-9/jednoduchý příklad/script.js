
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';

        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 150);
    });
});


const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('click', function() {
        this.style.borderLeftWidth = '8px';
        setTimeout(() => {
            this.style.borderLeftWidth = '5px';
        }, 300);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});