/* Proposal page: reading progress, active section, pinned problem stack, reveal. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var ready = function (fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); };

  ready(function () {
    var bar = document.querySelector('.pbar__progress');
    var now = document.querySelector('.pbar__now');
    var links = Array.prototype.slice.call(document.querySelectorAll('.pbar__nav a'));
    var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
    var cards = Array.prototype.slice.call(document.querySelectorAll('.scard'));
    var steps = Array.prototype.slice.call(document.querySelectorAll('.steps li'));

    var setActive = function (i) {
      links.forEach(function (a, j) {
        a.classList.toggle('is-active', j === i);
        a.classList.toggle('is-done', i > -1 && j < i);
        if (j === i) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
      if (now) now.textContent = i > -1 ? (i + 1) + '/' + links.length + ' · ' + links[i].getAttribute('data-short') : 'Overview';
    };

    /* Which stacked card is on top: the last one that reached its sticky offset */
    var updateStack = function () {
      if (!cards.length) return;
      var top = -1;
      cards.forEach(function (c, i) {
        var stick = parseFloat(getComputedStyle(c).top) || 0;
        if (c.getBoundingClientRect().top <= stick + 80) top = i; /* switch as the card is almost in place */
      });
      var first = cards[0].getBoundingClientRect().top < innerHeight * 0.85;
      var current = top === -1 ? (first ? 0 : -1) : top;
      cards.forEach(function (c, i) {
        var under = i < top;
        c.classList.toggle('is-under', under);
        c.style.setProperty('--d', under ? String(top - i) : '0');
      });
      steps.forEach(function (s, i) {
        s.classList.toggle('is-on', i === current);
        s.classList.toggle('is-done', current > -1 && i < current);
      });
    };

    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var max = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, scrollY / max) : 0) + ')';
        var mid = innerHeight * 0.45, active = -1;
        sections.forEach(function (s, i) { if (s.getBoundingClientRect().top <= mid) active = i; });
        setActive(active);
        updateStack();
        ticking = false;
      });
    };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    onScroll();

    /* Reveal */
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('is-in'); }); return; }
    var rv = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); rv.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { rv.observe(el); });
    addEventListener('beforeprint', function () { items.forEach(function (el) { el.classList.add('is-in'); }); });
  });
})();
