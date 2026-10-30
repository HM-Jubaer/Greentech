/* GreenTech icon sprite — 24×24, 1.75 stroke, currentColor.
   Injected at load so <use href="#i-name"> works on file:// and on Vercel alike. */
(function () {
  var s = function (id, body) { return '<symbol id="i-' + id + '" viewBox="0 0 24 24">' + body + '</symbol>'; };
  var icons = [
    /* --- UI --- */
    s('search', '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    s('cart', '<path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.76L20.5 8H6.2"/><circle cx="9.5" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/>'),
    s('user', '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>'),
    s('heart', '<path d="M12 20s-7.5-4.6-9-9.4C2 7.3 4.3 4.5 7.3 4.5c2 0 3.6 1.1 4.7 2.8 1.1-1.7 2.7-2.8 4.7-2.8 3 0 5.3 2.8 4.3 6.1C19.5 15.4 12 20 12 20Z"/>'),
    s('compare', '<path d="M7 4 3 8l4 4"/><path d="M3 8h13"/><path d="m17 12 4 4-4 4"/><path d="M21 16H8"/>'),
    s('phone', '<path d="M5 3h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 7.1 7.1l1.4-2.3L21 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/>'),
    s('pin', '<path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    s('truck', '<path d="M2 6h11v10H2z"/><path d="M13 9h4.5L21 12.5V16h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>'),
    s('shield', '<path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>'),
    s('card', '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19"/><path d="M6 15h4"/>'),
    s('store', '<path d="M3 9.5 4.5 4h15L21 9.5"/><path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v8h14v-8"/><path d="M10 20v-5h4v5"/>'),
    s('chev-r', '<path d="m9 5 7 7-7 7"/>'),
    s('chev-d', '<path d="m5 9 7 7 7-7"/>'),
    s('chev-l', '<path d="m15 5-7 7 7 7"/>'),
    s('menu', '<path d="M3 6h18M3 12h18M3 18h18"/>'),
    s('x', '<path d="M6 6l12 12M18 6 6 18"/>'),
    s('star', '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z"/>'),
    s('check', '<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
    s('minus', '<path d="M5 12h14"/>'),
    s('plus', '<path d="M12 5v14M5 12h14"/>'),
    s('clock', '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    s('wrench', '<path d="M14.5 5.5a4 4 0 0 0 5 5L12 18l-3 3-3-3 3-3 7.5-7.5a4 4 0 0 1-2-2Z"/>'),
    s('chat', '<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 10h8M8 13h5"/>'),
    s('return', '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>'),
    s('bolt', '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>'),
    s('grid', '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>'),
    s('home', '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>'),
    s('box', '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"/><path d="m3 7.5 9 4.5 9-4.5M12 12v9"/>'),
    s('bell', '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
    s('info', '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'),
    s('globe', '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.5 5.8 3.5 9s-1 6.2-3.5 9c-2.5-2.8-3.5-5.8-3.5-9s1-6.2 3.5-9Z"/>'),
    s('share', '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/>'),
    s('leaf', '<path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15"/><path d="M5 19 13 11"/>'),

    /* --- Categories --- */
    s('cpu', '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3M2.5 9h3M2.5 15h3M18.5 9h3M18.5 15h3"/>'),
    s('gpu', '<rect x="2" y="6" width="20" height="11" rx="2"/><circle cx="8" cy="11.5" r="3"/><circle cx="16" cy="11.5" r="3"/><path d="M4 17v3h7v-3"/>'),
    s('ssd', '<rect x="2" y="8.5" width="20" height="7" rx="1.5"/><path d="M5.5 12h5"/><rect x="13" y="10.5" width="3" height="3" rx=".5"/><path d="M19 11v2"/>'),
    s('ram', '<rect x="2" y="7" width="20" height="8" rx="1"/><path d="M5.5 10v2M9 10v2M12.5 10v2M16 10v2M19 10v2"/><path d="M4 15v2.5M20 15v2.5M11 15v2.5"/>'),
    s('board', '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="6" height="6" rx="1"/><path d="M16.5 7v5M7 16.5h7M16.5 15.5v2"/>'),
    s('fan', '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1.6"/><path d="M12 10.4c-.8-3 .6-5 3-5.6M13.6 12c3-.8 5 .6 5.6 3M12 13.6c.8 3-.6 5-3 5.6M10.4 12c-3 .8-5-.6-5.6-3"/>'),
    s('case', '<rect x="6" y="2.5" width="12" height="19" rx="2"/><circle cx="12" cy="15" r="3"/><path d="M9 6.5h6"/>'),
    s('monitor', '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'),
    s('laptop', '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19.5h20"/>'),
    s('mouse', '<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v3"/>'),
    s('keyboard', '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>'),
    s('headphone', '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6.5" rx="1.5"/><rect x="17" y="14" width="4" height="6.5" rx="1.5"/>'),
    s('router', '<rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 16.5h.01M10.5 16.5h.01M15 16.5h3M8 13 6 6.5M16 13l2-6.5"/>'),
    s('psu', '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="15" cy="12" r="4"/><path d="M15 9.5v5M12.5 12h5M5 9h3M5 12h3M5 15h3"/>'),
    s('chair', '<rect x="7" y="2.5" width="10" height="10" rx="3"/><path d="M5 13h14M12 13v4.5M7 21l5-3.5 5 3.5"/>'),
    s('printer', '<path d="M6 9V3h12v6"/><rect x="2" y="9" width="20" height="8" rx="2"/><path d="M6 14h12v7H6z"/>'),
    s('cctv', '<path d="M3 7.5 16 4l2 6.5L5 14 3 7.5Z"/><path d="m18 9 3-1v4"/><path d="M8 13.5V18H4"/>'),
    s('hdd', '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="11" r="4.5"/><path d="m12 11 3.5 5"/><path d="M7 18h.01"/>'),
    s('speaker', '<rect x="5" y="2.5" width="14" height="19" rx="2"/><circle cx="12" cy="14.5" r="3.5"/><circle cx="12" cy="7" r="1.5"/>'),
    s('server', '<rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"/>'),
    s('camera', '<path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/>'),
    s('plug', '<path d="M9 2v4M15 2v4M6 6h12v4a6 6 0 0 1-12 0V6Z"/><path d="M12 16v6"/>')
  ];

  var svg = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">' + icons.join('') + '</svg>';
  var mount = function () { document.body.insertAdjacentHTML('afterbegin', svg); };
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
