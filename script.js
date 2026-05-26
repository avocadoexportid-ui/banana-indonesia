const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  navMenu.style.flexDirection = 'column';
  navMenu.style.position = 'absolute';
  navMenu.style.top = '70px';
  navMenu.style.right = '20px';
  navMenu.style.background = '#1a2e1a';
  navMenu.style.padding = '20px';
  navMenu.style.borderRadius = '12px';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
