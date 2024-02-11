import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
const id = '64f389465ae26083f39b19d8';

// правила відкриття та закриття вікна
modalRatingButton.addEventListener('click', () => {
  digit.textContent = `${initDigit}.0`;
  modalRating.showModal();
});

modalRatingClose.addEventListener('click', () => {
  digit.textContent = `0.0`;
  modalRating.close();
});

modalRating.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    digit.textContent = `0.0`;
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
    const starRating = star.dataset.rating;
    initDigit = starRating;
    digit.textContent = `${starRating}.0`;
  });
}

// відправляємо запит

const postToUpdate = {
  rate: initDigit,
  email: formEmail,
  review: formComent,
};

const options = {
  method: 'PATCH',
  body: JSON.stringify(postToUpdate),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

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
      .then(data => {
        //;
      })
      .catch(() => {
        iziToast.error({
          message: 'Something wrong. Please try again later!',
          position: 'topRight',
        });
      })
      .finally(() => {
        ratingForm.reset();
      });
  }
}

function patchRating() {
  return fetch(
    `https://energyflow.b.goit.study/api/exercises/${id}/rating`,
    options
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
