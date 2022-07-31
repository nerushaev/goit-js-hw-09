const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let idTimer = null;

btnStopRef.setAttribute('disabled', '');

btnStartRef.addEventListener('click', onClickStart);
btnStopRef.addEventListener('click', onClickStop);

function onClickStart() {
  changeBackgroundColor();
  idTimer = setInterval(changeBackgroundColor, 1000);
  toggleDisabledOnButtons();
};

function onClickStop() {
  clearInterval(idTimer);
  toggleDisabledOnButtons();
};

function changeBackgroundColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function toggleDisabledOnButtons() {
  if (btnStartRef.hasAttribute('disabled')) {
    btnStartRef.removeAttribute('disabled');
    btnStopRef.setAttribute('disabled', '');
    return;
  }
  btnStartRef.setAttribute('disabled', '');
  btnStopRef.removeAttribute('disabled');
}



