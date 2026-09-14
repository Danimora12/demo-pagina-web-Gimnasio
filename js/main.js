/* =========================================================
   NAVBAR scroll effect
   ========================================================= */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

/* =========================================================
   Reveal on scroll (Intersection Observer)
   ========================================================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* =========================================================
   Stagger reveal en grids (beneficios, planes, testimonios)
   ========================================================= */
document.querySelectorAll('.benefit-grid .reveal, .plan-grid .reveal, .testi-grid .reveal, .gallery-grid .reveal')
  .forEach((el, i) => {
    el.style.transitionDelay = (i * 0.1) + 's';
  });