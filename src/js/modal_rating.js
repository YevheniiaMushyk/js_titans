import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { modal } from '../js/modal_video.js';

// отримуємо доступ до елементів
const modalRatingButton = document.getElementById('modal_rating');
const modalRatingClose = document.querySelector('.modal_rating_close');
const modalRating = document.querySelector('.modal_rating');
const stars = document.querySelectorAll('.fa-solid');
const digit = document.querySelector('.modal_rating_digit');
const ratingForm = document.querySelector('.modal_rating_form');

// вхідні змінні
let initDigit = 0;
let formEmail = '';
let formComent = '';
let starRating = 0;
let idCardRating = '';

// const id = '64f389465ae26083f39b19d8';

// правила відкриття та закриття вікна
modalRatingButton.addEventListener('click', () => {
  initDigit = 0;
  digit.textContent = `${initDigit}.0`;
  modalRating.showModal();
});

modalRatingClose.addEventListener('click', () => {
  initDigit = 0;
  digit.textContent = `${initDigit}.0`;
  ratingForm.reset();
  modalRating.close();
});

modalRating.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    initDigit = 0;
    digit.textContent = `${initDigit}.0`;
    ratingForm.reset();
    modalRating.close();
  }
});

// логіка відображення значення рейтингу
const clearDigit = () => {
  digit.textContent = `${initDigit}.0`;
};

for (let index = 0; index < stars.length; index++) {
  const star = stars[index];

  star.addEventListener('mouseenter', () => {
    const starValue = star.dataset.rating;
    digit.textContent = `${starValue}.0`;
  });

  star.addEventListener('mouseleave', clearDigit);

  star.addEventListener('click', () => {
    starRating = star.dataset.rating;
    initDigit = starRating;
    digit.textContent = `${starRating}.0`;
  });
}

// відправляємо запит при сабміті форми
ratingForm.addEventListener('submit', ratingPatch);

function ratingPatch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  formEmail = form.elements.email.value;
  formComent = form.elements.coment.value;

  if (initDigit === 0) {
    iziToast.error({
      message: 'Please enter your raiting',
      position: 'topCenter',
      backgroundColor: '#FF6666',
    });
  } else {
    patchRating()
      .then(() => {
        modalRating.close();
        iziToast.info({
          message: 'Thank you for your feedback',
          position: 'topCenter',
        });
      })
      .catch(() => {
        iziToast.error({
          message: 'Something wrong. Please try again later!',
          position: 'topCenter',
        });
      })
      .finally(() => {
        initDigit = 0;
        digit.textContent = `${initDigit}.0`;
        ratingForm.reset();
      });
  }
}

function patchRating() {
  console.log(modal.dataset.id);
  let patchToUpdate = {};
  patchToUpdate.rate = parseInt(starRating);
  patchToUpdate.email = formEmail;
  patchToUpdate.review = formComent;
  idCardRating = modal.dataset.id;

  const options = {
    method: 'PATCH',
    body: JSON.stringify(patchToUpdate),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(
    `https://energyflow.b.goit.study/api/exercises/${idCardRating}/rating`,
    options
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
