const chkBox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const inputButton = document.querySelector('#button-login');

Element.prototype.on = Element.prototype.addEventListener;

chkBox.on('change', () => {
  submitBtn.disabled = !chkBox.checked;
});

inputButton.on('click', (event) => {
  event.preventDefault();
  const email = inputEmail.value;
  const pwd = inputPassword.value;
  if (email === 'tryber@teste.com' && pwd === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
