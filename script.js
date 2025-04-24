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
