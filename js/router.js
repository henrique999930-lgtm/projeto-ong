import { inicioTemplate, projetosTemplate, cadastroTemplate } from './templates.js';
import { initFormValidation } from './validation.js';

const appRoot = document.getElementById('app-root');
const routes = { '#inicio': inicioTemplate, '#projetos': projetosTemplate, '#cadastro': cadastroTemplate };

const handleRouteChange = () => {
  const route = window.location.hash || '#inicio';
  const template = routes[route] || routes['#inicio'];
  appRoot.innerHTML = template;
  if (route === '#cadastro') {
    initFormValidation();
  }
};

export const initRouter = () => {
  window.addEventListener('hashchange', handleRouteChange);
  window.addEventListener('DOMContentLoaded', handleRouteChange);
};