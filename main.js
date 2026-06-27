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
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

(function initTheme() {
  if (localStorage.getItem('theme') === 'dark') {
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
