document.addEventListener('DOMContentLoaded', () => {
  const record = document.querySelector('.record-img');
  const mainContent = document.querySelector('.main-content');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 20) {
      record.classList.add('animate-in');
    }

    if (scrollY > window.innerHeight - 100) {
      document.querySelector('.intro-screen').style.display = 'none';
      mainContent.classList.remove('hidden');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const genreSections = document.querySelectorAll('.genre');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  genreSections.forEach(section => observer.observe(section));
});
