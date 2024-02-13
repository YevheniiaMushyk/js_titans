const burger = document.querySelector('.header__button');
const modal__button_close = document.querySelector('.modal__button_close');
const header_modal = document.getElementById('header_modal');

burger.addEventListener('click', () => {
  header_modal.showModal();
});

modal__button_close.addEventListener('click', () => {
  header_modal.close();
});
