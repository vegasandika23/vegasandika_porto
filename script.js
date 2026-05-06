// ── Generate random particle dots ──
const container = document.getElementById('particles');
for (let i = 0; i < 60; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.cssText = `
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    --t: ${2 + Math.random() * 5}s;
    animation-delay: ${Math.random() * 5}s;
    opacity: ${0.1 + Math.random() * 0.4};
    width: ${1 + Math.random() * 2}px;
    height: ${1 + Math.random() * 2}px;
  `;
  container.appendChild(dot);
}

// ── Inject ripple keyframes ──
const style = document.createElement('style');
style.textContent = `@keyframes rippleAnim { to { transform:scale(3); opacity:0; } }`;
document.head.appendChild(style);

// ── Hover ripple on buttons ──
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute; border-radius:50%;
      width:120px; height:120px;
      left:${e.clientX - rect.left - 60}px;
      top:${e.clientY - rect.top - 60}px;
      background: rgba(255,255,255,0.12);
      transform:scale(0); pointer-events:none;
      animation: rippleAnim 0.5s ease-out forwards;
    `;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});