// search.js
const searchInput = document.getElementById('searchInput');
const cakeCards = document.querySelectorAll('.cake-card');

if (searchInput) {
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    cakeCards.forEach(function(card) {
      const cakeName = card.querySelector('.cake-name').textContent.toLowerCase();
      if (cakeName.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}