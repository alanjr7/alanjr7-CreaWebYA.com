// Actualiza el año del footer automáticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Animación scroll suave para los enlaces del nav
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      window.scrollTo({
        top: target.offsetTop - 30,
        behavior: 'smooth'
      });
    }
  });
});

// Formulario de contacto (solo simulación)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
  setTimeout(() => { msg.textContent = ""; }, 6000);
  this.reset();
});

// Animación hero: partículas de fondo (simple, opcional extra)
const overlay = document.querySelector('.hero .overlay');
for(let i=0; i<24; i++) {
  let p = document.createElement('div');
  p.className = 'bg-particle';
  p.style.left = `${Math.random()*100}%`;
  p.style.top = `${Math.random()*100}%`;
  p.style.animationDelay = `${Math.random()*8}s`;
  overlay.appendChild(p);
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtén los valores del formulario
  const name = this.querySelector('input[placeholder="Nombre"]').value;
  const email = this.querySelector('input[placeholder="Email"]').value;
  const message = this.querySelector('textarea[placeholder="Cuéntanos tu idea o proyecto"]').value;

  // Construye el mensaje para WhatsApp
  const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. Quiero decir: ${message}`;

  // Número de WhatsApp (incluye el código de país, en este caso Bolivia: +591)
  const whatsappNumber = '59160975799';

  // Redirige a WhatsApp con el mensaje
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL, '_blank');

  // Opcional: Limpia el formulario después de enviar
  this.reset();
});

// Estilos de partículas (agregar por JS)
const style = document.createElement('style');
style.innerHTML = `
.bg-particle {
  position: absolute;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg,#0ff0b3,#ec38bc,#f9d423);
  opacity: 0.25;
  filter: blur(3px);
  animation: floatParticle 12s linear infinite alternate;
}
@keyframes floatParticle {
  0% { transform: translateY(0) scale(0.7);}
  50% { opacity: 0.45; }
  100% { transform: translateY(-60px) scale(1.1);}
}
`; document.head.appendChild(style);