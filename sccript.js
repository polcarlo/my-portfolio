
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
               
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 10;
        const color = Math.random() > 0.5 ? 'var(--primary)' : 'var(--accent)';
                
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.background = color;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
                
        particlesContainer.appendChild(particle);
    }
}
        
function animateOnScroll() {
    const courseCards = document.querySelectorAll('.course-card');
           
    courseCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
                
        if (cardPosition < screenPosition) {
            card.classList.add('animate');
        }
    });
}
        
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
            
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
                   
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
                    
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});
            
const imageContainer = document.querySelector('.image-container');
const image = imageContainer.querySelector('img');
            
imageContainer.addEventListener('mousemove', (e) => {
    const rect = imageContainer.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
               
    image.style.transform = `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale(1.05)`;
});
            
    imageContainer.addEventListener('mouseleave', () => {
        image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
            
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
})