function showError(input, message) { const formControl = input.parentElement; formControl.classList.add('error'); const errorDiv = formControl.querySelector('.error-message'); errorDiv.innerText = message; }
function clearError(input) { const formControl = input.parentElement; formControl.classList.remove('error'); }
function checkRequired(input) { if (input.value.trim() === '') { showError(input, 'Este campo é obrigatório.'); return false; } clearError(input); return true; }
function checkEmail(input) { const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; if (!re.test(String(input.value).toLowerCase())) { showError(input, 'O e-mail informado não é válido.'); return false; } return true; }
export function initFormValidation() {
  const form = document.getElementById('cadastro-form');
  if (!form) return;
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isNomeValid = checkRequired(nome);
    let isEmailValid = checkRequired(email) && checkEmail(email);
    let isCpfValid = checkRequired(cpf);
    if (isNomeValid && isEmailValid && isCpfValid) {
      alert('Cadastro enviado com sucesso!');
      form.reset();
      [nome, email, cpf].forEach(clearError);
    }
  });
  [nome, email, cpf].forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') clearError(input);
    });
  });
}