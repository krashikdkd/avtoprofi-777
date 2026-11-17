(() => {
  const routes = [
    ['Home', 'index.html'],
    ['Services', 'services.html'],
    ['Prices', 'prices.html'],
    ['About us', 'about.html']
  ];
  const toggle = document.querySelector('[data-ids-menu-toggle]');
  const menuWrap = toggle?.closest('.x-menu-wrap');
  if (toggle && menuWrap) {
    const menu = document.createElement('nav');
    menu.className = 'local-mobile-nav';
    menu.setAttribute('aria-label', 'Site navigation');
    menu.hidden = true;
    routes.forEach(([label, href]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      menu.append(link);
    });
    menuWrap.append(menu);
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.removeAttribute('aria-controls');

    const closeMenu = () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.dataset.state = 'closed';
    };
    toggle.addEventListener('click', event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      const opening = menu.hidden;
      menu.hidden = !opening;
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.dataset.state = opening ? 'open' : 'closed';
    }, true);
    document.addEventListener('click', event => {
      if (!menu.hidden && !menuWrap.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !menu.hidden) { closeMenu(); toggle.focus(); }
    });
    menu.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
  }

  const animated = new Set();
  document.querySelectorAll('[data-reveal]').forEach(node => {
    node.dataset.localMotion = node.getAttribute('data-reveal') || 'fade-up';
    animated.add(node);
  });
  document.querySelectorAll('[data-reveal-children]').forEach(group => {
    [...group.children].forEach((node, index) => {
      if (animated.has(node)) return;
      node.dataset.localMotion = group.getAttribute('data-reveal-children') || 'fade-up';
      node.style.setProperty('--local-motion-delay', `${Math.min(index, 7) * 95}ms`);
      animated.add(node);
    });
  });
  if (animated.size) {
    document.documentElement.classList.add('local-motion-ready');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('local-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      animated.forEach(node => observer.observe(node));
    } else {
      animated.forEach(node => node.classList.add('local-visible'));
    }
  }
})();
