const filterButtons = document.querySelectorAll('[data-filter]');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const filterValue = this.getAttribute('data-filter');
    const products = document.querySelectorAll('.cake-card');

    products.forEach(product => {
      if (filterValue === 'all' || product.getAttribute('data-category') === filterValue) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});