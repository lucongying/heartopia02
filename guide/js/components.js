/**
 * Heartopia Guide — Shared Components Loader (i18n-aware)
 * Depends on: i18n.js (must load first)
 */

// Store current page info for rebuilds
let _currentPage = { titleKey: '', parentKey: '', currentNav: '' };
let _tocSelectors = null;

function buildGuideNavHTML() {
  const t = (typeof I18N !== 'undefined') ? (k) => I18N.t(k) : (k) => k;
  return `
<nav class="guide-nav" id="guideNav">
  <div class="guide-nav-inner">
    <a href="../index.html" class="nav-home" title="Back to official site">
      <span class="logo-dot">💝</span>
      <span>Heartopia</span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">${t('nav.home')}</a></li>
      <li><a href="beginner.html">${t('nav.beginner')}</a></li>
      <li><a href="fishing.html">${t('nav.fishing')}</a></li>
      <li><a href="bugs.html">${t('nav.bugs')}</a></li>
      <li><a href="birds.html">${t('nav.birds')}</a></li>
      <li><a href="cats.html">${t('nav.cats')}</a></li>
      <li><a href="cooking.html">${t('nav.cooking')}</a></li>
      <li><a href="gardening.html">${t('nav.gardening')}</a></li>
      <li><a href="furniture.html">${t('nav.furniture')}</a></li>
      <li><a href="npcs.html">${t('nav.npcs')}</a></li>
      <li><a href="money.html">${t('nav.money')}</a></li>
      <li><a href="events.html">${t('nav.events')}</a></li>
      <li><a href="tutorials.html">${t('nav.tutorials')}</a></li>
      <li><a href="videos.html">${t('nav.videos')}</a></li>
    </ul>
    <button class="nav-toggle" id="navToggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-panel" id="navPanel">
  <div class="nav-section">📚 ${t('nav.section.guides')}</div>
  <a href="index.html">🏠 ${t('nav.home')}</a>
  <a href="beginner.html">🎓 ${t('nav.beginner')}</a>
  <a href="fishing.html">🎣 ${t('nav.fishing')}</a>
  <a href="bugs.html">🪲 ${t('nav.bugs')}</a>
  <a href="birds.html">🐦 ${t('nav.birds')}</a>
  <a href="cats.html">🐱 ${t('nav.cats')}</a>
  <a href="cooking.html">🍳 ${t('nav.cooking')}</a>
  <a href="gardening.html">🌷 ${t('nav.gardening')}</a>
  <a href="furniture.html">🏠 ${t('nav.furniture')}</a>
  <a href="npcs.html">👥 ${t('nav.npcs')}</a>
  <a href="money.html">💰 ${t('nav.money')}</a>
  <a href="events.html">🎉 ${t('nav.events')}</a>
  <a href="tutorials.html">📝 ${t('nav.tutorials')}</a>
  <a href="videos.html">🎬 ${t('nav.videos')}</a>
  <div class="nav-section">🔗 ${t('nav.section.links')}</div>
  <a href="../index.html">💝 ${t('nav.landing')}</a>
</div>`;
}

function rebuildNav() {
  const oldNav = document.getElementById('guideNav');
  const oldPanel = document.getElementById('navPanel');
  const oldToggle = document.getElementById('navToggle');

  // Build new nav HTML
  const div = document.createElement('div');
  div.innerHTML = buildGuideNavHTML();

  const newNav = div.querySelector('.guide-nav');
  const newPanel = div.querySelector('.nav-panel');

  if (oldNav && newNav) {
    oldNav.parentNode.replaceChild(newNav, oldNav);
  }
  if (oldPanel && newPanel) {
    oldPanel.parentNode.replaceChild(newPanel, oldPanel);
  }

  // Re-initialize toggle for new elements
  initNavToggle();
  // Re-highlight current page
  if (_currentPage.currentNav) {
    highlightCurrentNav(_currentPage.currentNav);
  }
  // Re-inject language toggle button
  if (typeof I18N !== 'undefined' && typeof I18N._injectToggle === 'function') {
    I18N._injectToggle();
  }
}

function rebuildBreadcrumb() {
  const oldBc = document.querySelector('.breadcrumb');
  if (!oldBc) return;
  const newBc = makeBreadcrumb(_currentPage.titleKey, _currentPage.parentKey);
  const div = document.createElement('div');
  div.innerHTML = newBc;
  oldBc.parentNode.replaceChild(div.firstElementChild, oldBc);
}

function rebuildFooter() {
  const oldFooter = document.querySelector('.guide-footer');
  if (!oldFooter) return;
  const div = document.createElement('div');
  div.innerHTML = buildFooterHTML();
  oldFooter.parentNode.replaceChild(div.firstElementChild, oldFooter);
}

function rebuildTOC() {
  if (!_tocSelectors) return;
  const { containerSelector, tocSelector } = _tocSelectors;
  const tocEl = document.querySelector(tocSelector);
  if (!tocEl) return;
  // Clear and rebuild TOC nav
  const tocNav = tocEl.querySelector('nav');
  if (tocNav) {
    tocNav.innerHTML = '';
    buildTOC(containerSelector, tocSelector);
  }
  // Also rebuild mobile TOC
  const mobileToc = document.querySelector('.mobile-toc');
  if (mobileToc) {
    mobileToc.innerHTML = '';
    buildMobileTOC(containerSelector, '.mobile-toc');
  }
}

function makeBreadcrumb(titleKey, parentKey) {
  const homeLabel = (typeof I18N !== 'undefined') ? I18N.t('breadcrumb.home') : 'Guide Hub';
  const title = (typeof I18N !== 'undefined' && titleKey) ? I18N.t(titleKey) : (titleKey || '');
  const parent = (typeof I18N !== 'undefined' && parentKey) ? I18N.t(parentKey) : (parentKey || '');
  const items = [{ label: homeLabel, href: 'index.html' }];
  if (parent) items.push({ label: parent, href: null });
  items.push({ label: title, href: null });
  return `
  <div class="breadcrumb">
    ${items.map((item, i) => {
      if (item.href) return `<a href="${item.href}">${item.label}</a><span class="sep">›</span>`;
      return `<span>${item.label}</span>`;
    }).join('')}
  </div>`;
}

function buildFooterHTML() {
  const t = (typeof I18N !== 'undefined') ? (k) => I18N.t(k) : (k) => k;
  return `
<footer class="guide-footer">
  <div class="container">
    <p>💝 <strong>${t('footer.brand')}</strong> · ${t('footer.desc')}</p>
    <p style="margin-top:6px;">
      <a href="../index.html">${t('footer.landingLink')}</a> ·
      <a href="index.html">${t('footer.guideHome')}</a> ·
      <a href="beginner.html">${t('footer.beginner')}</a>
    </p>
    <p style="margin-top:10px;color:rgba(255,255,255,0.4);">${t('footer.disclaimer')}</p>
  </div>
</footer>`;
}

function initGuidePage(opts = {}) {
  _currentPage = { titleKey: opts.titleKey || '', parentKey: opts.parentKey || '', currentNav: opts.currentNav || '' };

  // Inject nav
  const navDiv = document.createElement('div');
  navDiv.innerHTML = buildGuideNavHTML();
  document.body.prepend(navDiv);

  // Inject breadcrumb
  if (_currentPage.titleKey) {
    const bcDiv = document.createElement('div');
    bcDiv.innerHTML = makeBreadcrumb(_currentPage.titleKey, _currentPage.parentKey);
    document.getElementById('guideNav').after(bcDiv);
  }

  // Inject footer
  const footerDiv = document.createElement('div');
  footerDiv.innerHTML = buildFooterHTML();
  document.body.appendChild(footerDiv);

  // Back to top
  const btDiv = document.createElement('div');
  btDiv.innerHTML = '<button class="back-top" id="backTop" title="Back to top">⬆</button>';
  document.body.appendChild(btDiv);

  initNavToggle();
  initBackToTop();
  highlightCurrentNav(_currentPage.currentNav);

  // Signal that nav is ready (for i18n toggle injection)
  document.dispatchEvent(new CustomEvent('guideNavReady'));

  // Listen for language changes to rebuild dynamic components
  document.addEventListener('langChanged', () => {
    rebuildNav();
    rebuildBreadcrumb();
    rebuildFooter();
    rebuildTOC();
    // Re-highlight after rebuild
    if (_currentPage.currentNav) {
      highlightCurrentNav(_currentPage.currentNav);
    }
  });
}

function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const panel = document.getElementById('navPanel');
  if (!toggle || !panel) return;
  // Remove old listener by cloning
  const newToggle = toggle.cloneNode(true);
  toggle.parentNode.replaceChild(newToggle, toggle);
  newToggle.addEventListener('click', () => {
    const p = document.getElementById('navPanel');
    const open = p.classList.toggle('open');
    newToggle.setAttribute('aria-expanded', open);
  });
  // Close on link click
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      panel.classList.remove('open');
      newToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function highlightCurrentNav(currentNav) {
  if (!currentNav) return;
  // Clear all active states first
  document.querySelectorAll('.nav-links a, .nav-panel a').forEach(a => a.classList.remove('active'));
  // Set active on matching href
  document.querySelectorAll('.nav-links a, .nav-panel a').forEach(a => {
    if (a.getAttribute('href') === currentNav) a.classList.add('active');
  });
}

function buildTOC(containerSelector, tocSelector) {
  const container = document.querySelector(containerSelector);
  const tocEl = document.querySelector(tocSelector);
  if (!container || !tocEl) return;
  const tocNav = tocEl.querySelector('nav');
  if (!tocNav) return;

  // Save selectors for rebuild on language change
  _tocSelectors = { containerSelector, tocSelector };

  // Clear existing TOC
  tocNav.innerHTML = '';

  const headings = container.querySelectorAll('h2, h3');
  const tocItems = [];

  headings.forEach((h, i) => {
    if (!h.id) h.id = 'section-' + i;
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.trim();
    a.className = h.tagName === 'H3' ? 'toc-h3' : '';
    tocNav.appendChild(a);
    tocItems.push({ el: a, heading: h });
  });

  // Update TOC title
  const tocTitle = tocEl.querySelector('.toc-title');
  if (tocTitle && typeof I18N !== 'undefined') {
    tocTitle.textContent = I18N.t('toc.title');
  }

  // Scroll spy
  if (tocItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const item = tocItems.find(t => t.heading === entry.target);
        if (item && entry.isIntersecting) {
          tocItems.forEach(t => t.el.classList.remove('active'));
          item.el.classList.add('active');
        }
      });
    }, { rootMargin: '-80px 0px -60% 0px' });
    tocItems.forEach(item => observer.observe(item.heading));
  }
}

function buildMobileTOC(containerSelector, targetSelector) {
  const container = document.querySelector(containerSelector);
  const target = document.querySelector(targetSelector);
  if (!container || !target) return;

  const headings = container.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  const select = document.createElement('select');
  select.style.cssText = 'width:100%;padding:10px 14px;border-radius:100px;border:1.5px solid rgba(74,55,40,0.12);font-family:var(--font-main);font-size:0.9rem;background:var(--warm-white);color:var(--brown);';
  const placeholder = (typeof I18N !== 'undefined') ? I18N.t('toc.mobile') : 'Navigate...';
  select.innerHTML = `<option value="">${placeholder}</option>`;

  headings.forEach((h, i) => {
    if (!h.id) h.id = 'section-' + i;
    const prefix = h.tagName === 'H3' ? '  └ ' : '';
    select.innerHTML += `<option value="#${h.id}">${prefix}${h.textContent.trim()}</option>`;
  });

  select.addEventListener('change', () => {
    if (select.value) {
      document.querySelector(select.value).scrollIntoView({ behavior: 'smooth' });
    }
  });

  target.appendChild(select);
}
