/* GreenTech prototype interactions — vanilla JS, no dependencies. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* Bangladesh-style money: ৳1,25,000 (lakh grouping) */
  var taka = function (n) { return '৳' + Number(n).toLocaleString('en-IN'); };

  /* ---------- Mobile drawer ---------- */
  var drawer = $('#drawer');
  if (drawer) {
    var setDrawer = function (open) {
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) { var f = $('.drawer__panel button, .drawer__panel a', drawer); if (f) f.focus(); }
    };
    $$('[data-drawer-open]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); setDrawer(true); }); });
    $$('[data-drawer-close]').forEach(function (b) { b.addEventListener('click', function () { setDrawer(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });
  }

  /* ---------- Cart counter + toast ---------- */
  var toast = $('#toast');
  var toastTimer;
  var showToast = function (msg) {
    if (!toast) return;
    $('[data-toast-msg]', toast).textContent = msg;
    toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-on'); }, 2800);
  };
  var bumpCart = function (qty) {
    $$('[data-cart-count]').forEach(function (el) {
      el.textContent = String((parseInt(el.textContent, 10) || 0) + qty);
      el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
    });
  };
  document.addEventListener('click', function (e) {
    var add = e.target.closest('[data-add-to-cart]');
    if (add) {
      e.preventDefault();
      var qtyInput = $('#qty');
      var qty = add.hasAttribute('data-use-qty') && qtyInput ? Math.max(1, parseInt(qtyInput.value, 10) || 1) : 1;
      bumpCart(qty);
      showToast((qty > 1 ? qty + ' × ' : '') + (add.getAttribute('data-name') || 'Item') + ' added to cart');
      return;
    }
    var wish = e.target.closest('[data-wish]');
    if (wish) {
      var on = wish.getAttribute('aria-pressed') !== 'true';
      wish.setAttribute('aria-pressed', String(on));
      wish.setAttribute('aria-label', on ? 'Remove from wishlist' : 'Add to wishlist');
      showToast(on ? 'Saved to wishlist' : 'Removed from wishlist');
      return;
    }
    var cmp = e.target.closest('[data-compare]');
    if (cmp) { showToast('Added to compare'); return; }
    var notify = e.target.closest('[data-notify]');
    if (notify) { showToast("We'll SMS you when it's back in stock"); }
  });

  /* ---------- Countdown (ends at midnight) ---------- */
  var cd = $('[data-countdown]');
  if (cd) {
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var tick = function () {
      var now = new Date(), end = new Date(now); end.setHours(24, 0, 0, 0);
      var s = Math.max(0, Math.floor((end - now) / 1000));
      $('[data-h]', cd).textContent = pad(Math.floor(s / 3600));
      $('[data-m]', cd).textContent = pad(Math.floor(s % 3600 / 60));
      $('[data-s]', cd).textContent = pad(s % 60);
    };
    tick(); setInterval(tick, 1000);
  }

  /* ---------- Inline filter tabs (home) ---------- */
  $$('[data-filter-tabs]').forEach(function (group) {
    var grid = document.getElementById(group.getAttribute('data-filter-tabs'));
    $$('button', group).forEach(function (btn) {
      btn.addEventListener('click', function () {
        $$('button', group).forEach(function (b) { b.setAttribute('aria-selected', String(b === btn)); });
        var f = btn.getAttribute('data-filter');
        $$('[data-tags]', grid).forEach(function (card) {
          card.hidden = f !== 'all' && card.getAttribute('data-tags').split(' ').indexOf(f) === -1;
        });
      });
    });
  });

  /* ---------- Accessible tabs (product details) ---------- */
  $$('[role="tablist"]').forEach(function (list) {
    var tabs = $$('[role="tab"]', list);
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, n = null;
        if (k === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (k === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (k === 'Home') n = tabs[0];
        if (k === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  });
  $$('[data-goto-tab]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var tab = document.getElementById(a.getAttribute('data-goto-tab'));
      if (!tab) return;
      e.preventDefault();
      tab.click();
      tab.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Gallery ---------- */
  var gMain = $('[data-gallery-main]');
  if (gMain) {
    var gIcon = $('use', gMain), gLabel = $('[data-gallery-label]', gMain);
    $$('[data-thumb]').forEach(function (th) {
      th.addEventListener('click', function () {
        $$('[data-thumb]').forEach(function (t) { t.setAttribute('aria-current', String(t === th)); });
        gIcon.setAttribute('href', '#i-' + th.getAttribute('data-thumb'));
        gLabel.textContent = th.getAttribute('aria-label');
        gMain.className = gMain.className.replace(/tint-\w+/, th.getAttribute('data-tint'));
      });
    });
  }

  /* ---------- Quantity stepper + live total ---------- */
  var qty = $('#qty');
  if (qty) {
    var unit = Number(qty.getAttribute('data-unit'));
    var totalEl = $('[data-qty-total]');
    var sync = function () {
      var v = Math.min(5, Math.max(1, parseInt(qty.value, 10) || 1));
      qty.value = v;
      if (totalEl) totalEl.textContent = v > 1 ? v + ' × ' + taka(unit) + ' = ' + taka(unit * v) : '';
    };
    $$('[data-qty]').forEach(function (b) {
      b.addEventListener('click', function () { qty.value = (parseInt(qty.value, 10) || 1) + Number(b.getAttribute('data-qty')); sync(); });
    });
    qty.addEventListener('change', sync);
  }

  /* ---------- Delivery estimator ---------- */
  var area = $('#area');
  if (area) {
    var rules = {
      ctg:   [['Same-day delivery', 'Order before 3 PM', '৳80'], ['Click & Collect', 'Ready in 1 hour · Agrabad', 'Free']],
      dhaka: [['Courier delivery', '1–2 working days', '৳120'], ['Express', 'Next day, before 6 PM', '৳250']],
      other: [['Courier delivery', '2–4 working days', '৳150'], ['Cash on delivery', 'Available up to ৳50,000', '+1%']]
    };
    var out = $('[data-deliver-out]');
    var render = function () {
      out.innerHTML = rules[area.value].map(function (r) {
        return '<div class="deliver__opt"><svg class="ico"><use href="#i-truck"/></svg><div><strong>' + r[0] + '</strong><span>' + r[1] + '</span></div><b>' + r[2] + '</b></div>';
      }).join('');
    };
    area.addEventListener('change', render); render();
  }

  /* ---------- Sticky buy bar ---------- */
  var buybar = $('#buybar'), anchor = $('[data-buybar-anchor]');
  if (buybar && anchor && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var past = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
      buybar.classList.toggle('is-on', past);
      document.body.classList.toggle('has-buybar', past);
    }).observe(anchor);
  }

  /* ---------- Search (prototype: prevent navigation) ---------- */
  $$('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); showToast(f.getAttribute('data-demo')); });
  });
})();
