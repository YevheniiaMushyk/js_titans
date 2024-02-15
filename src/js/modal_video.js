import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import {
  favoritesCardsList,
  updateFavoritesList,
} from '../js/favorites_list.js';
const URL = 'https://energyflow.b.goit.study/api/exercises/';

// Отримуємо необхідні елементи модального вікна
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const closeBtn = modal.querySelector('.close');
const gifElement = modal.querySelector('.exercise-gif');
const exerciseTitle = modal.querySelector('.exercise-title');
const ratingStars = modal.querySelectorAll('.exercise-star');
const targetElement = modal.querySelector('.exercise-target');
const bodypartsElement = modal.querySelector('.exercise-bodyparts');
const equipmentElement = modal.querySelector('.exercise-equipment');
const popularElement = modal.querySelector('.exercise-popular');
const caloriesElement = modal.querySelector('.exercise-calories');
const descriptionElement = modal.querySelector('.exercise-description');
const favoriteButton = modal.querySelector('.favorite-button');
const ratingButton = document.querySelector('.rating-button');
const ratingNumberElement = document.querySelector('.rating-number');

// Отримуємо доступ до модалки з рейтингом
const modalRating = document.querySelector('.modal_rating');

const FAVORITES_KEY_LOCAL_STORAGE = 'ENERGY_FLOW_FAVORITES_KEY';

// Відкриття модального вікна по кнопці "start"
export function openExerciseModal(event) {
  const exerciseItem = event.target.closest('.exercises-item');
  if (!exerciseItem) {
    return;
  }
  const exerciseData = getExerciseData(exerciseItem);
  fillModalWithData(exerciseData);
  modal.style.display = 'block';
}

// Відкриття модального вікна по кнопці "start" з вікна обраних карток
export function openFavExerciseModal(event) {
  const exerciseItem = event.target.closest('.exercises_item');
  if (!exerciseItem) {
    return;
  }
  const exerciseFavData = getFavExerciseData(exerciseItem);
  fillModalWithData(exerciseFavData);
  modal.style.display = 'block';
}

// Закриття модального вікна при кліку на хрестик
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закриття модального вікна при кліку за межами вікна
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Закриття модального вікна при натисканні клавіші Esc
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});

// Відкриття модального вікна з рейтингом
window.addEventListener('click', event => {
  if (!ratingButton) {
    return;
  }
  if (!modalRating) {
    return;
  }
  modalRating.dataset.id = modal.dataset.id;
});

// Кнопка "Add to favorites"
export function getFavorites() {
  const favorites = window.localStorage.getItem(FAVORITES_KEY_LOCAL_STORAGE);
  return favorites && favorites !== 'undefined' ? JSON.parse(favorites) : [];
}

function setFavorites(id) {
  const favorites = getFavorites();
  const updFavorites = favorites.length ? [...favorites, id] : [id];
  window.localStorage.setItem(
    FAVORITES_KEY_LOCAL_STORAGE,
    JSON.stringify(updFavorites)
  );
}

function checkFavorites(id) {
  const favorites = getFavorites();
  return !!favorites.find(el => el === id);
}

function drawFavoritesBtnText(id) {
  const favorite = checkFavorites(id);
  const favoriteBtnText = favorite ? 'Remove from' : 'Add to favorites';
  favoriteButton.innerHTML = `${favoriteBtnText}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`;
}

export function deleteFavorites(id) {
  const favorites = getFavorites();
  const updFavorites = favorites.filter(el => el !== id);
  window.localStorage.setItem(
    FAVORITES_KEY_LOCAL_STORAGE,
    JSON.stringify(updFavorites)
  );
}

favoriteButton.addEventListener('click', event => {
  if (!modal) {
    console.log(modal);
    return;
  }
  const id = modal.dataset.id;
  const favorite = checkFavorites(id);
  if (favorite) {
    deleteFavorites(id);
    if (favoritesCardsList) {
      updateFavoritesList();
    }
  } else {
    setFavorites(id);
    if (favoritesCardsList) {
      updateFavoritesList();
    }
  }
  drawFavoritesBtnText(id);
});

// Функція для отримання даних вправи з HTML-структури
function getExerciseData(exerciseItem) {
  const titleElement = exerciseItem.querySelector('.exercises-title-text');
  const burnedCaloriesElement = exerciseItem.querySelector(
    '.exercises-text__dynamic'
  );
  const bodyPartElement = exerciseItem.querySelectorAll(
    '.exercises-text__dynamic'
  )[1];
  const targetElement = exerciseItem.querySelectorAll(
    '.exercises-text__dynamic'
  )[2];
  const ratingElement = exerciseItem.querySelector('.exercises-rating__text');

  const { gifurl, description, equipment, popularity, id } =
    exerciseItem.dataset;

  return {
    title: capitalizeFirstLetter(titleElement.textContent),
    burnedCalories: burnedCaloriesElement.textContent,
    bodyPart: bodyPartElement.textContent,
    target: targetElement.textContent,
    rating: ratingElement.textContent,
    gifUrl: gifurl,
    description,
    equipment,
    popularity,
    _id: id,
  };
}

// Функція для отримання даних вправи з HTML-структури на вкладці обраних
function getFavExerciseData(exerciseItem) {
  const titleElement = exerciseItem.querySelector('.exercises_title_text');
  const burnedCaloriesElement = exerciseItem.querySelector(
    '.exercises_text__dynamic'
  );
  const bodyPartElement = exerciseItem.querySelectorAll(
    '.exercises_text__dynamic'
  )[1];
  const targetElement = exerciseItem.querySelectorAll(
    '.exercises_text__dynamic'
  )[2];
  const ratingElement = exerciseItem.querySelector('.exercises_rating__text');

  const { gifurl, description, equipment, popularity, id } =
    exerciseItem.dataset;

  return {
    title: capitalizeFirstLetter(titleElement.textContent),
    burnedCalories: burnedCaloriesElement.textContent,
    bodyPart: bodyPartElement.textContent,
    target: targetElement.textContent,
    rating: ratingElement.textContent,
    gifUrl: gifurl,
    description,
    equipment,
    popularity,
    _id: id,
  };
}

// Функція для заповнення модального вікна даними про вправу
function fillModalWithData(exerciseData) {
  gifElement.src = exerciseData.gifUrl;
  gifElement.alt = exerciseData.title;

  ratingNumberElement.textContent = exerciseData.rating;

  // Заповнюємо зірочки рейтингу
  const rating = parseFloat(exerciseData.rating);

  document.querySelectorAll('.yellow-star').forEach((element, index) => {
    const truncRating = Math.trunc(rating);
    const currentStarRating =
      index + 1 <= truncRating
        ? 100
        : index + 1 > Math.ceil(rating)
        ? 0
        : (rating - truncRating) * 100;
    element.style.width = `${currentStarRating}%`;
  });

  exerciseTitle.textContent = exerciseData.title;
  targetElement.textContent = exerciseData.target;
  bodypartsElement.textContent = exerciseData.bodyPart;
  equipmentElement.textContent = exerciseData.equipment;
  popularElement.textContent = exerciseData.popularity;
  caloriesElement.textContent = exerciseData.burnedCalories;
  descriptionElement.textContent = exerciseData.description;
  modal.dataset.id = exerciseData._id;

  drawFavoritesBtnText(exerciseData._id);
}

// Функція великої першої букви
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { modal };
