// Render Data from data.js
const renderEducation = () => {
  const container = document.getElementById('eduGrid');
  if (!container || typeof educationData === 'undefined') return;
  container.innerHTML = educationData.map(item => `
    <div class="edu-card reveal ${item.animationClass}">
      <span class="edu-icon">${item.icon}</span>
      <div class="edu-year">${item.year}</div>
      <div class="edu-degree">${item.degree}</div>
      <div class="edu-inst">${item.institution}</div>
      <div class="edu-detail">${item.detail}</div>
      ${item.badges.map(badge => `<span class="edu-badge ${badge.class}" ${badge.style ? `style="${badge.style}"` : ''}>${badge.text}</span>`).join('')}
    </div>
  `).join('');
};

const renderExperience = () => {
  const container = document.getElementById('expGrid');
  if (!container || typeof experienceData === 'undefined') return;
  container.innerHTML = experienceData.map(item => `
    <div class="exp-item reveal ${item.animationClass}">
      <div>
        <div class="exp-item-title">${item.title}</div>
        <div class="exp-item-desc">${item.desc}</div>
        ${item.metric ? `<span class="exp-metric em-teal">${item.metric}</span>` : ''}
      </div>
    </div>
  `).join('');
};

const renderSkills = () => {
  const container = document.getElementById('skillsGrid');
  if (!container || typeof skillsData === 'undefined') return;
  container.innerHTML = skillsData.map(item => `
    <div class="skill-card reveal ${item.animationClass}">
      <span class="sc-icon">${item.icon}</span>
      <div class="sc-title">${item.title}</div>
      <div class="sc-tags">
        ${item.tags.map(tag => `<span class="sc-tag ${tag.class}">${tag.name}</span>`).join('')}
      </div>
    </div>
  `).join('');
};

const renderProjects = () => {
  const container = document.getElementById('projGrid');
  if (!container || typeof projectsData === 'undefined') return;
  container.innerHTML = projectsData.map(item => `
    <div class="proj-card" data-cat="${item.category}">
      <img class="proj-img" src="${item.image}" alt="${item.alt}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
      <div class="proj-body">
        <div class="proj-tags">
          ${item.tags.map(tag => `<span class="ptag ${tag.class}">${tag.name}</span>`).join('')}
        </div>
        <div class="proj-title">${item.title}</div>
        <p class="proj-desc">${item.desc}</p>
        <div class="proj-impact">
          <span class="pi-text">${item.impact}</span>
        </div>
        <div class="proj-footer">
          <a href="${item.link}" target="_blank" class="proj-link">
            View Details
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="${item.link}" target="_blank" class="gh-chip">
            ${item.isPresentation 
                ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 2h9l5 5v15H6z" /><path d="M15 2v6h5z" fill="rgba(255,255,255,.35)" /><rect x="9" y="11" width="8" height="6" rx="1.2" fill="rgba(255,255,255,.9)" /><path d="M9 14h8" stroke="currentColor" stroke-width="1.4" /></svg> Slides Deck' 
                : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg> GitHub'
              }
          </a>
        </div>
      </div>
    </div>
  `).join('');
};

// Initialize
renderEducation();
renderExperience();
renderSkills();
renderProjects();

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
  if (mobileMenu) mobileMenu.hidden = true;
  if (mobileBackdrop) mobileBackdrop.hidden = true;
};

const openMenu = () => {
  document.body.classList.add('menu-open');
  navToggle?.setAttribute('aria-expanded', 'true');
  mobileMenu?.setAttribute('aria-hidden', 'false');
  if (mobileMenu) mobileMenu.hidden = false;
  if (mobileBackdrop) mobileBackdrop.hidden = false;
};

if (navToggle && mobileMenu && mobileBackdrop) {
  closeMenu();

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
