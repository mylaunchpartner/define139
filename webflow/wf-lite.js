/* Define139 — wf-lite.js
   Replaces the parts of Webflow's runtime the designer-built pages relied on,
   so they work without Webflow: mobile nav, dropdowns (incl. FAQ), tabs,
   sliders and video lightboxes. Scroll/hover animations are intentionally
   dropped — content simply shows. Runs once per page load. */
(function () {
  var root = document.querySelector('.d139-wf');
  if (!root || root.getAttribute('data-wf-lite')) return;
  root.setAttribute('data-wf-lite', '1');

  function $all(sel, el) { return Array.prototype.slice.call((el || root).querySelectorAll(sel)); }
  function closest(el, sel) { while (el && el !== root) { if (el.matches && el.matches(sel)) return el; el = el.parentNode; } return null; }

  /* ── Navbar: mobile menu button ── */
  $all('.w-nav').forEach(function (nav) {
    var btn = nav.querySelector('.w-nav-button');
    var menu = nav.querySelector('.w-nav-menu');
    if (!btn || !menu) return;
    function close() {
      btn.classList.remove('w--open');
      menu.removeAttribute('data-nav-menu-open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (menu.hasAttribute('data-nav-menu-open')) return close();
      btn.classList.add('w--open');
      menu.setAttribute('data-nav-menu-open', '');
      btn.setAttribute('aria-expanded', 'true');
    });
    $all('a', menu).forEach(function (a) { a.addEventListener('click', close); });
    window.addEventListener('resize', function () { if (getComputedStyle(btn).display === 'none') close(); });
  });

  /* ── Dropdowns (nav menus and the FAQ accordions) ── */
  function setDd(dd, open) {
    var t = dd.querySelector('.w-dropdown-toggle');
    var l = dd.querySelector('.w-dropdown-list');
    [dd, t, l].forEach(function (el) { if (el) el.classList.toggle('w--open', open); });
    if (t) t.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (l) { l.style.height = ''; l.style.display = open ? 'block' : ''; }
    // Webflow pinned FAQ accordions at their closed height inline; release it while open
    if (dd.hasAttribute('data-closed-h')) dd.style.height = open ? 'auto' : dd.getAttribute('data-closed-h');
  }
  $all('.w-dropdown').forEach(function (dd) {
    var t = dd.querySelector('.w-dropdown-toggle');
    if (!t) return;
    if (dd.style.height) dd.setAttribute('data-closed-h', dd.style.height);
    t.setAttribute('role', 'button');
    t.setAttribute('aria-expanded', 'false');
    t.addEventListener('click', function (e) {
      e.preventDefault();
      setDd(dd, !dd.classList.contains('w--open'));
    });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t.click(); }
    });
    if (dd.getAttribute('data-hover') === 'true') {
      dd.addEventListener('mouseenter', function () { if (matchMedia('(hover:hover)').matches) setDd(dd, true); });
      dd.addEventListener('mouseleave', function () { if (matchMedia('(hover:hover)').matches) setDd(dd, false); });
    }
  });
  document.addEventListener('click', function (e) {
    $all('.w-dropdown.w--open').forEach(function (dd) {
      // FAQ items stay open until clicked again; only nav-style menus close on outside click
      if (dd.getAttribute('data-hover') === 'true' && !dd.contains(e.target)) setDd(dd, false);
    });
  });

  /* ── Tabs ── */
  $all('.w-tabs').forEach(function (tabs) {
    var links = $all('.w-tab-link', tabs);
    var panes = $all('.w-tab-pane', tabs);
    function show(name) {
      links.forEach(function (l) { var on = l.getAttribute('data-w-tab') === name; l.classList.toggle('w--current', on); l.setAttribute('aria-selected', on ? 'true' : 'false'); });
      panes.forEach(function (p) { var on = p.getAttribute('data-w-tab') === name; p.classList.toggle('w--tab-active', on); p.style.opacity = ''; p.style.transition = ''; });
    }
    links.forEach(function (l) {
      l.setAttribute('role', 'tab');
      l.addEventListener('click', function (e) { e.preventDefault(); show(l.getAttribute('data-w-tab')); });
    });
  });

  /* ── Sliders ── */
  $all('.w-slider').forEach(function (slider) {
    var mask = slider.querySelector('.w-slider-mask');
    var slides = $all('.w-slide', slider);
    if (!mask || !slides.length) return;
    var navEl = slider.querySelector('.w-slider-nav');
    var i = 0, timer = null;
    var auto = slider.getAttribute('data-autoplay') === 'true';
    var delay = parseInt(slider.getAttribute('data-delay'), 10) || 4000;
    var speed = parseInt(slider.getAttribute('data-duration'), 10) || 500;
    var infinite = slider.getAttribute('data-infinite') !== 'false';
    var dots = [];
    if (navEl) {
      navEl.innerHTML = '';
      slides.forEach(function (_, n) {
        var d = document.createElement('div');
        d.className = 'w-slider-dot';
        if (navEl.classList.contains('w-num')) d.textContent = String(n + 1);
        d.setAttribute('role', 'button');
        d.setAttribute('aria-label', 'Show slide ' + (n + 1) + ' of ' + slides.length);
        d.addEventListener('click', function () { go(n); restart(); });
        navEl.appendChild(d);
        dots.push(d);
      });
    }
    function perView() {
      var w = mask.getBoundingClientRect().width, sw = slides[0].getBoundingClientRect().width;
      return sw > 0 ? Math.max(1, Math.round(w / sw)) : 1;
    }
    function go(n) {
      var max = Math.max(0, slides.length - perView());
      if (n > max) n = infinite ? 0 : max;
      if (n < 0) n = infinite ? max : 0;
      i = n;
      var off = slides[0].getBoundingClientRect().width * i;
      slides.forEach(function (s) {
        s.style.transition = 'transform ' + speed + 'ms ease';
        s.style.transform = 'translateX(' + (-off) + 'px)';
      });
      dots.forEach(function (d, k) { d.classList.toggle('w-active', k === i); });
    }
    function restart() {
      if (!auto) return;
      clearInterval(timer);
      timer = setInterval(function () { go(i + 1); }, delay);
    }
    var left = slider.querySelector('.w-slider-arrow-left');
    var right = slider.querySelector('.w-slider-arrow-right');
    if (left) left.addEventListener('click', function () { go(i - 1); restart(); });
    if (right) right.addEventListener('click', function () { go(i + 1); restart(); });
    // touch swipe
    var x0 = null;
    mask.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    mask.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); restart(); }
    });
    window.addEventListener('resize', function () { go(i); });
    go(0);
    restart();
  });

  /* ── Lightbox (YouTube/Vimeo/images from Webflow's JSON) ── */
  function videoSrc(url) {
    var m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
    if (m) return 'https://www.youtube.com/embed/' + m[1] + '?autoplay=1&rel=0';
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (m) return 'https://player.vimeo.com/video/' + m[1] + '?autoplay=1';
    return null;
  }
  function openBox(item) {
    var ov = document.createElement('div');
    ov.className = 'd139-lb';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    var inner;
    var vs = item.url && videoSrc(item.url);
    if (vs) inner = '<div class="d139-lb-frame"><iframe src="' + vs + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Video"></iframe></div>';
    else inner = '<img class="d139-lb-img" src="' + (item.url || '') + '" alt="">';
    ov.innerHTML = '<button class="d139-lb-close" aria-label="Close">&times;</button>' + inner;
    function close() { ov.remove(); document.removeEventListener('keydown', onKey); }
    function onKey(e) { if (e.key === 'Escape') close(); }
    ov.addEventListener('click', function (e) { if (e.target === ov || closest(e.target, '.d139-lb-close') || e.target.classList.contains('d139-lb-close')) close(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(ov);
  }
  $all('.w-lightbox').forEach(function (a) {
    var js = a.querySelector('script.w-json, script[type="application/json"]');
    var data = null;
    try { data = js ? JSON.parse(js.textContent) : null; } catch (e) {}
    var item = data && data.items && data.items[0];
    if (!item) return;
    a.addEventListener('click', function (e) { e.preventDefault(); openBox(item); });
  });
  if (!document.getElementById('d139-lb-css')) {
    var st = document.createElement('style');
    st.id = 'd139-lb-css';
    st.textContent =
      '.d139-lb{position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;padding:24px}' +
      '.d139-lb-frame{width:min(1100px,100%);aspect-ratio:16/9}' +
      '.d139-lb-frame iframe{width:100%;height:100%;border:0}' +
      '.d139-lb-img{max-width:100%;max-height:90vh}' +
      '.d139-lb-close{position:absolute;top:12px;right:18px;background:none;border:0;color:#fff;font-size:40px;line-height:1;cursor:pointer}';
    document.head.appendChild(st);
  }
})();
