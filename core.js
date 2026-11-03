/* Define139 — page builder core (loaded by loader.js)
   Each GHL page holds only one custom-code embed:
     <div id="d139-root" data-page="home"></div>
     <script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
   This script fetches pages/<page>.html from the repo, drops it into the
   mount, then runs that page's scripts. Edit the page files in GitHub — the
   live site picks up changes within ~10 min.

   In page files:
     {{ASSETS}}            → this repo's assets/ folder (images, logo)
     <!--d139:header-->    → partials/header.html  (only fetched if used)
     <!--d139:footer-->    → partials/footer.html  (only fetched if used) */
(function () {
  var mount = document.getElementById('d139-root');
  if (!mount || mount.getAttribute('data-d139-loaded')) return;
  mount.setAttribute('data-d139-loaded', '1');

  var self = document.currentScript;
  var BASE = self.src.replace(/[?#].*$/, '').replace(/[^\/]*$/, '');
  var BUST = 'v=' + Math.floor(Date.now() / 60000); // new cache key every minute
  var page = (mount.getAttribute('data-page') || 'home').replace(/[^a-z0-9\/-]/gi, '').replace(/\.\.+/g, '');

  mount.style.minHeight = '100vh';

  // GHL wraps custom-code blocks in padded, width-capped containers.
  // Flatten every wrapper between the mount and <body> so pages run edge to edge.
  (function flattenWrappers() {
    var css = document.createElement('style');
    css.textContent =
      '.d139-flat{padding:0!important;margin:0!important;max-width:none!important;width:100%!important;border:0!important;background:transparent!important;box-shadow:none!important}' +
      'body{margin:0}' +
      // GHL paints a fixed white page-background layer (.bgCover) behind everything.
      // Pages set their own background, the way they did in Webflow, so clear it.
      '.bgCover{background:transparent!important;background-image:none!important}';
    document.head.appendChild(css);
    var el = mount.parentElement;
    while (el && el !== document.body && el !== document.documentElement) {
      el.classList.add('d139-flat');
      el = el.parentElement;
    }
  })();

  function runScripts(root) {
    var list = Array.prototype.slice.call(root.querySelectorAll('script'));
    // Page scripts were written for a fresh page load. Here the page has
    // already loaded, so run any 'load' / 'DOMContentLoaded' callbacks now.
    var orig = window.addEventListener;
    var origDoc = document.addEventListener;
    window.addEventListener = function (t, f, o) {
      if ((t === 'load' || t === 'DOMContentLoaded') && document.readyState === 'complete') { setTimeout(f, 0); return; }
      return orig.call(this, t, f, o);
    };
    document.addEventListener = function (t, f, o) {
      if (t === 'DOMContentLoaded' && document.readyState !== 'loading') { setTimeout(f, 0); return; }
      return origDoc.call(this, t, f, o);
    };
    function restore() { window.addEventListener = orig; document.addEventListener = origDoc; }

    return list.reduce(function (chain, old) {
      return chain.then(function () {
        return new Promise(function (done) {
          var s = document.createElement('script');
          for (var i = 0; i < old.attributes.length; i++) s.setAttribute(old.attributes[i].name, old.attributes[i].value);
          if (old.src) { s.onload = s.onerror = done; }
          else { s.textContent = old.textContent; }
          old.parentNode.replaceChild(s, old);
          if (!old.src) done();
        });
      });
    }, Promise.resolve()).then(function () { setTimeout(restore, 50); }, restore);
  }

  function get(p) {
    return fetch(BASE + p + '?' + BUST).then(function (r) {
      if (!r.ok) throw new Error(p + ' → ' + r.status);
      return r.text();
    });
  }

  get('pages/' + page + '.html')
    .then(function (html) {
      var parts = [];
      if (html.indexOf('<!--d139:header-->') > -1) parts.push(get('partials/header.html').then(function (h) { html = html.replace('<!--d139:header-->', h); }));
      if (html.indexOf('<!--d139:footer-->') > -1) parts.push(get('partials/footer.html').then(function (f) { html = html.replace('<!--d139:footer-->', f); }));
      return Promise.all(parts).then(function () { return html; });
    })
    .then(function (html) {
      mount.innerHTML = html.split('{{ASSETS}}').join(BASE + 'assets/');
      mount.style.minHeight = '';
      return runScripts(mount);
    })
    .then(function () {
      // Honour links like /metabolic-mapping-online-programs#mm-faq from other pages
      if (location.hash) {
        var t = document.getElementById(location.hash.slice(1));
        if (t) setTimeout(function () { t.scrollIntoView(); }, 120);
      }
    })
    .catch(function (err) {
      if (window.console) console.error('[D139 loader]', err);
      mount.style.minHeight = '';
      mount.innerHTML = '<p style="padding:80px 24px;text-align:center;font:16px/1.6 Arial,sans-serif;color:#0a0a0a">' +
        'Sorry, this page didn’t load. Please refresh, or email <a href="mailto:define139@gmail.com">define139@gmail.com</a>.</p>';
    });
})();
