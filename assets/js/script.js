// ── Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .proj-card');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => io.observe(el));

// ── Nav scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

// ── Filter logic — HIDE cards not in category (not just fade)
const tabs = document.querySelectorAll('.ftab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    const cards = document.querySelectorAll('.proj-card');

    cards.forEach((card, i) => {
      const match = filter === 'all' || card.dataset.cat === filter;
      if (match) {
        card.classList.remove('filtered-out');
        // Stagger re-entrance
        card.style.transitionDelay = (i * 0.06) + 's';
      } else {
        card.classList.add('filtered-out');
        card.style.transitionDelay = '0s';
      }
    });
  });
});
