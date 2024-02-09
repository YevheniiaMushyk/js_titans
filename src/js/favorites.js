const favburger = document.querySelector('.favheader__button');
const favmodal__button_close = document.querySelector(
  '.favmodal__button_close'
);
const favmodal = document.querySelector('.favmodal');

favburger.addEventListener('click', () => {
  favmodal.showModal();
});

favmodal__button_close.addEventListener('click', () => {
  favmodal.close();
});
