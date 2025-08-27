script.js

// Simple horizontal scroll controls using Flex rows
document.querySelectorAll('.row').forEach((row, idx) => {
  const scroller = row.querySelector('.scroller');
  const controls = row.querySelectorAll('.ctrl');
  controls.forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = Number(btn.dataset.scroll);
      const step = Math.min(scroller.clientWidth * 0.85, 600);
      scroller.scrollBy({ left: step * dir, behavior: 'smooth' });
    });
  });
});

// Keyboard access for scrollers
document.querySelectorAll('.scroller').forEach(s => {
  s.setAttribute('tabindex', '0');
  s.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') s.scrollBy({ left: 200, behavior: 'smooth' });
    if (e.key === 'ArrowLeft') s.scrollBy({ left: -200, behavior: 'smooth' });
  });
});