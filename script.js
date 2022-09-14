const inputEmail = document.querySelector('#input-email')
const inputPassword = document.querySelector('#input-password');
const inputButton = document.querySelector('#button-login');

Element.prototype.on = Element.prototype.addEventListener;

inputButton.on('click', function (event) {
  event.preventDefault();
  let email = inputEmail.value;
  let pwd = inputPassword.value;
  if (email === 'tryber@teste.com' && pwd === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
