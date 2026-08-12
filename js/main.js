document.addEventListener('DOMContentLoaded', () => {
  const introSplash = document.querySelector('.intro-splash');

  if (introSplash) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const finishIntro = () => {
      introSplash.classList.add('is-hidden');
      document.body.classList.remove('intro-active');
      window.setTimeout(() => introSplash.remove(), prefersReducedMotion ? 0 : 1000);
    };

    if (prefersReducedMotion) {
      finishIntro();
    } else {
      window.addEventListener('load', () => {
        window.setTimeout(finishIntro, 1800);
      });

      window.setTimeout(finishIntro, 3500);
    }
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navOverlay = document.querySelector('.nav-overlay');

  if (menuToggle && navOverlay) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navOverlay.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navOverlay.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navOverlay.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Bericht verzonden!';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }
});
