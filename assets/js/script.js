// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .proj-card');
const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.08 }
);
revealEls.forEach(el => io.observe(el));

// Nav scroll
const navbar = document.getElementById('navbar');
window.addEventListener(
  'scroll',
  () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
  },
  { passive: true }
);

// Mobile nav menu
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileBackdrop = document.getElementById('mobileMenuBackdrop');
const mobileMenuLinks = document.querySelectorAll('.mobile-links a, .mobile-cta');

const closeMenu = () => {
  document.body.classList.remove('menu-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  mobileMenu?.setAttribute('aria-hidden', 'true');
  if (mobileBackdrop) mobileBackdrop.hidden = true;
};

const openMenu = () => {
  document.body.classList.add('menu-open');
  navToggle?.setAttribute('aria-expanded', 'true');
  mobileMenu?.setAttribute('aria-hidden', 'false');
  if (mobileBackdrop) mobileBackdrop.hidden = false;
};

if (navToggle && mobileMenu && mobileBackdrop) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('menu-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileBackdrop.addEventListener('click', closeMenu);
  mobileMenuLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener(
    'resize',
    () => {
      if (window.innerWidth > 1024) closeMenu();
    },
    { passive: true }
  );
}

// Filter logic: hide cards not in category
const tabs = document.querySelectorAll('.ftab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    const cards = document.querySelectorAll('.proj-card');

    cards.forEach((card, i) => {
      const match = filter === 'all' || card.dataset.cat === filter;
      if (match) {
        card.classList.remove('filtered-out');
        card.style.transitionDelay = `${i * 0.06}s`;
      } else {
        card.classList.add('filtered-out');
        card.style.transitionDelay = '0s';
      }
    });
  });
});
