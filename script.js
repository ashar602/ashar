const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('data-section');

        sections.forEach(section => {
            if (section.id === target) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});