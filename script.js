const FONE = '5519993546462';

// Links do WhatsApp: se o botão tem um serviço, a mensagem já vai pronta.
document.querySelectorAll('[data-wpp]').forEach(a => {
  const servico = a.dataset.wpp;
  const texto = servico
    ? `Olá! Quero marcar um horário na Rodrigues Barber: ${servico}.`
    : 'Olá! Quero marcar um horário na Rodrigues Barber.';
  a.href = `https://wa.me/${FONE}?text=${encodeURIComponent(texto)}`;
  a.target = '_blank';
  a.rel = 'noopener';
});

// Menu no celular
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  const aberto = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', aberto);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', false);
  }
});

document.getElementById('ano').textContent = new Date().getFullYear();
