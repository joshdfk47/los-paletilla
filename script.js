// ===== Los Paletilla · Reformas Plasencia =====

// Año del footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.textContent = open ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.classList.remove('open');
  menuToggle.textContent = '☰';
}));

// Contadores animados de la franja de estadísticas
const counters = document.querySelectorAll('.stat strong[data-count]');
const animateCounter = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (p === 1 && target >= 100 ? '' : '');
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.6 });
counters.forEach(c => statsObserver.observe(c));

// Comparador antes/después
const baRange = document.getElementById('baRange');
const baBefore = document.getElementById('baBefore');
const baHandle = document.getElementById('baHandle');
if (baRange) {
  const setBA = (v) => {
    baBefore.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
    baHandle.style.left = v + '%';
  };
  baRange.addEventListener('input', () => setBA(baRange.value));
  setBA(50);
}

// Formulario → abre WhatsApp con el mensaje ya redactado
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const nombre = data.get('nombre').trim();
  const telefono = data.get('telefono').trim();
  const servicio = data.get('servicio');
  const mensaje = data.get('mensaje').trim();

  let texto = `Hola, soy ${nombre}. Quiero pedir presupuesto para: ${servicio}.`;
  if (mensaje) texto += `\n\nDetalles: ${mensaje}`;
  texto += `\n\nMi teléfono: ${telefono}`;

  window.open(`https://wa.me/34639417692?text=${encodeURIComponent(texto)}`, '_blank');
});

// Aparición suave de tarjetas al hacer scroll
const revealTargets = document.querySelectorAll('.service-card, .step, .work-card, .why-card, .review, .faq-item');
revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
});
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => revealObserver.observe(el));
