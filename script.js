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

function getLessons() {
  const subject = document.querySelectorAll('.subject');
  const aux = [];
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      aux.push(subject[i].value);
    }
  }
  return aux.join(', ');
}

function getInfoForm() {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const nameComplete = `Nome: ${name} ${lastname}\n`;
  const email = `Email: ${document.getElementById('input-email').value}\n`;
  const house = `Casa: ${document.getElementById('house').value}\n`;
  const familly = `Família: ${document.querySelector('input[name="family"]:checked').value}\n`;
  const lessons = `Matérias: ${getLessons()}\n`;
  const evaluation = `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}\n`;
  const comments = `Observações: ${document.getElementById('textarea').value}`;
  return [nameComplete, email, house, familly, lessons, evaluation, comments];
}

function printInfo(info) {
  const main = document.querySelector('main');
  const newForm = document.createElement('form');
  newForm.id = 'form-data';
  newForm.innerText = info;
  main.appendChild(newForm);
}

submitBtn.on('click', (event) => {
  event.preventDefault();
  const eforms = document.getElementById('evaluation-form');
  eforms.style.display = 'none';
  const infoForm = getInfoForm().join(' ');
  printInfo(infoForm);
});
