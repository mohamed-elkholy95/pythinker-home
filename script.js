// Pythinker landing — vanilla JS only.
// Scope: copy-to-clipboard, install-tab switching.
// No analytics, no third-party, no service worker.
(() => {
  'use strict';

  // 1) Copy-to-clipboard ----------------------------------------------------
  const toast = document.getElementById('toast');
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('is-visible'), 1500);
  };

  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-copy-target');
      const target = document.getElementById(targetId);
      if (!target) return;
      // Strip leading prompt characters; copy clean command text.
      const text = target.innerText.replace(/^\s*\$\s?/gm, '').trim();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const ta = document.createElement('textarea');
          ta.value = text; ta.setAttribute('readonly', '');
          ta.style.position = 'fixed'; ta.style.opacity = '0';
          document.body.appendChild(ta); ta.select();
          document.execCommand('copy'); ta.remove();
        }
        btn.classList.add('is-copied');
        const label = btn.querySelector('span'); if (label) label.textContent = 'Copied';
        showToast('Copied to clipboard');
        setTimeout(() => {
          btn.classList.remove('is-copied');
          if (label) label.textContent = 'Copy';
        }, 1500);
      } catch (_) { /* clipboard unavailable — silently no-op per spec */ }
    });
  });

  // 2) Install-block tabs ---------------------------------------------------
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const list = Array.from(tabs);
      const i = list.indexOf(tab);
      const next = list[(i + (e.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length];
      next.focus(); activate(next);
    });
  });
  function activate(tab) {
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) {
        panel.classList.toggle('is-active', on);
        if (on) panel.removeAttribute('hidden'); else panel.setAttribute('hidden', '');
      }
    });
  }

})();
