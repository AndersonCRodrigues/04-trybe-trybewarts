const chkBox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

chkBox.addEventListener('change', () => {
  submitBtn.disabled = !chkBox.checked;
});
