/* ============ NAV ACTIVE STATE (condiviso) ============ */
(function () {
  const links = document.querySelectorAll('#pillnav a');
  if (!links.length) return;
  const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = '#' + e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => s && io.observe(s));
})();
