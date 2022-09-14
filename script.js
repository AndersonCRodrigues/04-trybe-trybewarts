const chkBox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const inputEmail = document.querySelector('#input-email2');
const inputPassword = document.querySelector('#input-password');
const inputButton = document.querySelector('#button-login');
const textArea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

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

textArea.on('keyup', () => {
  contador.innerText = 500;
  const caracter = textArea.value.length;
  contador.innerText -= caracter;
});
