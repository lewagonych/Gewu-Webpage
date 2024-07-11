document.addEventListener('turbolinks:load', () => {
  const navbar = document.querySelector('.sticky-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
  });
});
