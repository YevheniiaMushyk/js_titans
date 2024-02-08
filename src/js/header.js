const burger = document.querySelector('.header__button');
const modal__button_close = document.querySelector('.modal__button_close');
const modal = document.querySelector('.modal');

burger.addEventListener('click', () => {
  modal.showModal();
});

modal__button_close.addEventListener('click', () => {
  modal.close();
});
