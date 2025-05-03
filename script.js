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

  document.querySelectorAll('.music-note-btn').forEach(button => {
    button.addEventListener('click', () => {
      const fact = button.getAttribute('data-fact');
      showFunFact(fact);
    });
  });
});

function showFunFact(text) {
  const popup = document.createElement('div');
  popup.className = 'fun-fact-popup active';
  popup.innerHTML = `
    <button class="popup-close" onclick="this.parentElement.remove()">×</button>
    ${text}
  `;
  document.body.appendChild(popup);
}