/* ============================================================
   HERO SCROLL — fade-to-black + sticky header trigger
   ============================================================ */
(function () {
  var hero    = document.getElementById('hero');
  var overlay = document.getElementById('heroScrollOverlay');
  var header  = document.getElementById('stickyHeader');
  if (!hero || !overlay) return;

  var ticking = false;

  function updateOverlay() {
    var scrollY     = window.pageYOffset || document.documentElement.scrollTop;
    var heroHeight  = hero.offsetHeight;

    // Fade overlay
    var progress = Math.min(scrollY / (heroHeight * 0.8), 1);
    overlay.style.opacity = (progress * progress).toFixed(3);

    // Show sticky header once hero is ~60% scrolled past
    if (header) {
      if (scrollY > heroHeight * 0.6) {
        header.classList.add('is-visible');
      } else {
        header.classList.remove('is-visible');
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateOverlay);
      ticking = true;
    }
  }, { passive: true });

  updateOverlay();
})();


/* ============================================================
   CONNECT FORM — handle email submit
   ============================================================ */
function handleConnect(e) {
  e.preventDefault();
  var input = e.target.querySelector('.connect__input');
  if (input && input.value.trim()) {
    // Replace this with your actual subscribe logic (API call, etc.)
    alert('Connected with: ' + input.value.trim());
    input.value = '';
  }
}
