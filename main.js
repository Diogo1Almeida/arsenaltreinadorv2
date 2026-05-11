// FAQ accordion
(function () {
  var items = document.querySelectorAll('.faq-item');
  if (items.length) items[0].classList.add('open');
  items.forEach(function (item) {
    item.querySelector('.faq-q').addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      items.forEach(function (el) { el.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });
})();

// Offer modal
(function () {
  var modal = document.getElementById('offerModal');
  if (!modal) return;

  function openModal() {
    modal.style.display = 'grid';
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-open-modal').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
})();
