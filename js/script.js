// Lógica para o Menu Hambúrguer
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  // Previne o comportamento padrão em eventos de toque (em celulares)
  if (event.type === 'touchstart') event.preventDefault();
  
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  
  // Acessibilidade: Informa aos leitores de tela se o menu está expandido ou não
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);