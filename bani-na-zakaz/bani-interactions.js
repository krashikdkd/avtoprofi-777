(() => {
  const roots = [...document.querySelectorAll('[data-motion-root]')];
  const reveals = roots.flatMap(root => [...root.querySelectorAll('[data-reveal], [data-reveal-children] > *')]);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // On mobile, pin the card reel while vertical scrolling drives it sideways.
  const offerSection = document.querySelector('.x-offer');
  const reelFrame = offerSection?.querySelector('.x-reel-frame');
  const reelTrack = offerSection?.querySelector('.x-reel-track');
  const reelParent = reelFrame?.parentElement;
  let reelPin = null;
  let reelDistance = 0;
  const setupMobileReel = () => {
    if (!offerSection || !reelFrame || !reelTrack || !reelParent) return;
    const isMobile = offerSection.getBoundingClientRect().width <= 720;
    if (isMobile && !reelPin) {
      reelPin = document.createElement('div');
      reelPin.className = 'x-mobile-reel-pin';
      offerSection.dataset.mobilePin = 'true';
      reelParent.insertBefore(reelPin, reelFrame);
      reelPin.appendChild(reelFrame);
    } else if (!isMobile && reelPin) {
      reelParent.insertBefore(reelFrame, reelPin);
      reelPin.remove();
      reelPin = null;
      reelDistance = 0;
      delete offerSection.dataset.mobilePin;
      reelTrack.style.transform = '';
    }
    if (reelPin) {
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      reelDistance = Math.max(0, reelTrack.scrollWidth - reelFrame.clientWidth);
      reelPin.style.height = `${viewport + reelDistance}px`;
      requestAnimationFrame(() => { reelDistance = Math.max(0, reelTrack.scrollWidth - reelFrame.clientWidth); reelPin.style.height = `${viewport + reelDistance}px`; requestScrollMotion(); });
    }
  };
  setupMobileReel();

  // The downloaded site kept the motion CSS, but not Durable's scroll driver.
  const scrollSections = [...document.querySelectorAll('.x-root')].filter(section =>
    section.querySelector('.x-pile, .x-reel-track, .x-gallery-reel') || section.matches('.x-gallery-reel')
  );
  scrollSections.forEach(section => section.setAttribute('data-motion', 'live'));
  let scrollFrame = 0;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const updateScrollMotion = () => {
    scrollFrame = 0;
    const viewport = window.innerHeight || document.documentElement.clientHeight;
    scrollSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      let progress;
      if (section === offerSection && reelPin) {
        const travel = Math.max(1, reelPin.offsetHeight - (reelFrame.offsetHeight || viewport));
        progress = clamp(-reelPin.getBoundingClientRect().top / travel, 0, 1);
        reelTrack.style.transform = `translate3d(${-reelDistance * progress}px, 0, 0)`;
      } else {
        const distance = viewport + rect.height;
        progress = distance > 0 ? clamp((viewport - rect.top) / distance, 0, 1) : 0;
      }
      section.style.setProperty('--x-p', progress.toFixed(4));

      const pile = section.querySelector('.x-pile');
      if (pile) {
        // A subtle scroll response keeps the fan visible while the cards
        // remain side by side instead of collapsing into a single stack.
        const scrollWave = 1 - Math.sin(progress * Math.PI);
        const angles = [-2, 1.5, 0];
        const photos = [...pile.querySelectorAll('.x-pile-photo')];
        const maxShift = Math.min(84, pile.getBoundingClientRect().width * 0.14);
        photos.forEach((photo, index) => {
          const direction = index === 0 ? -1 : index === 2 ? 1 : 0;
          const angleDirection = index === 0 ? -1 : index === 2 ? 1 : 0;
          photo.style.translate = `${(direction * maxShift * scrollWave).toFixed(1)}px 0px`;
          photo.style.setProperty('--pile-angle', `${(angles[index] + angleDirection * scrollWave * 1.4).toFixed(2)}deg`);
        });
      }
    });
  };
  const requestScrollMotion = () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollMotion);
  };
  // Durable can scroll inside .website-container rather than the window.
  // Capture the non-bubbling scroll event from any nested scroller too.
  document.addEventListener('scroll', requestScrollMotion, { passive: true, capture: true });
  window.addEventListener('scroll', requestScrollMotion, { passive: true });
  window.addEventListener('wheel', requestScrollMotion, { passive: true, capture: true });
  window.addEventListener('touchmove', requestScrollMotion, { passive: true, capture: true });
  window.addEventListener('resize', () => { setupMobileReel(); requestScrollMotion(); }, { passive: true });
  requestScrollMotion();

  // Restore the site's reveal-on-scroll transitions as well.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    roots.forEach(root => root.setAttribute('data-motion', 'live'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-inview', '');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.setAttribute('data-inview', ''));
  }

  const toggle = document.querySelector('[data-ids-menu-toggle]');
  if (!toggle) return;

  const overlay = document.createElement('div');
  overlay.className = 'bani-menu-overlay';
  overlay.hidden = true;
  overlay.setAttribute('aria-hidden', 'true');
  const panel = document.createElement('div');
  panel.className = 'bani-menu-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-label', 'Меню сайта');
  panel.tabIndex = -1;

  const top = document.createElement('div');
  top.className = 'bani-menu-top';
  const brand = document.createElement('span');
  brand.className = 'bani-menu-brand';
  brand.textContent = 'Бани на заказ';
  const close = document.createElement('button');
  close.className = 'bani-menu-close';
  close.type = 'button';
  close.setAttribute('aria-label', 'Закрыть меню');
  close.textContent = '×';
  top.append(brand, close);

  const links = document.createElement('nav');
  links.className = 'bani-menu-links';
  links.setAttribute('aria-label', 'Разделы сайта');
  const desktopNav = document.querySelector('.x-desktop-nav');
  if (desktopNav) {
    desktopNav.querySelectorAll('a').forEach(source => {
      const link = source.cloneNode(true);
      links.append(link);
    });
    if (desktopNav.querySelector('button')) {
      const cta = document.createElement('button');
      cta.className = 'bani-menu-cta';
      cta.type = 'button';
      cta.textContent = 'Обсудить проект';
      cta.addEventListener('click', () => {
        closeMenu();
        document.querySelector('#contact, form')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      });
      links.append(cta);
    }
  }
  const phone = document.createElement('a');
  phone.className = 'bani-menu-contact';
  phone.href = 'tel:+79968896889';
  phone.textContent = '+7 996 889-68-89';
  panel.append(top, links, phone);
  overlay.append(panel);
  document.body.append(overlay);

  let previousFocus = null;
  function openMenu() {
    previousFocus = document.activeElement;
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('bani-menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Закрыть меню');
    toggle.setAttribute('data-state', 'open');
    requestAnimationFrame(() => {
      overlay.classList.add('is-open');
      close.focus();
    });
  }
  function closeMenu() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('bani-menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Открыть меню');
    toggle.setAttribute('data-state', 'closed');
    window.setTimeout(() => { overlay.hidden = true; }, 380);
    if (previousFocus && previousFocus.focus) previousFocus.focus();
  }

  // Capture the click before any stale hydrated Durable handler can swallow it.
  document.addEventListener('click', event => {
    if (event.target.closest('[data-ids-menu-toggle]')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      overlay.hidden ? openMenu() : closeMenu();
    }
  }, true);
  close.addEventListener('click', closeMenu);
  overlay.addEventListener('click', event => { if (event.target === overlay) closeMenu(); });
  links.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !overlay.hidden) closeMenu();
    if (event.key === 'Tab' && !overlay.hidden) {
      const focusable = [...panel.querySelectorAll('a, button')];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
