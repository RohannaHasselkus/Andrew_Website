// Smooth scroll for nav links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

   const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  let index = 0;

  document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlider();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
  });

  function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
