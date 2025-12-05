document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple typing effect for the subtitle
    const subtitle = document.querySelector('.subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Speed of typing
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 1000);

    // Add visual class to header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.05)';
            header.style.backdropFilter = 'blur(5px)';
            header.style.borderRadius = '16px';
            header.style.padding = '10px 20px';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.padding = '0';
        }
    });
});
