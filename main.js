// Shared behavior across all pages

function toggleNav() {
  const el = document.getElementById('navLinks');
  if (el) el.classList.toggle('open');
}

function toggleDark() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
  const btn = document.getElementById('darkBtn');
  if (btn) btn.textContent = isDark ? '◐ Dark' : '◑ Light';
  try { localStorage.setItem('theme', isDark ? 'light' : 'dark'); } catch (e) {}
}

(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && systemDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('darkBtn');
  if (btn) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '◑ Light' : '◐ Dark';
  }
});

// Article overlay (writing.html)
function openArticle(id) {
  const o = document.getElementById('overlay-' + id);
  if (!o) return;
  o.classList.add('open');
  o.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function closeArticle(id) {
  const o = document.getElementById('overlay-' + id);
  if (!o) return;
  o.classList.remove('open');
  document.body.style.overflow = '';
}
