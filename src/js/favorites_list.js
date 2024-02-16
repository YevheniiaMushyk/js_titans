import axios from 'axios';
import { openFavExerciseModal } from '../js/modal_video.js';
import { getFavorites, deleteFavorites } from './favorites_helpers.js';
import { trash } from './img/icons.svg#icon-trash';
import { favarrow } from './img/icons.svg#icon-arrow';
import { fav_run_man } from './img/icons.svg#icon-fav_run_man';
const API_URL = 'https://energyflow.b.goit.study/api/exercises/';
export const favoritesCardsList = document.querySelector('.workouts-list');
let storedWorkouts = [];

//Нова версія
// if (favoritesCardsList) {
//   const storedWorkoutIds =
//     JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];

//   if (storedWorkoutIds.length > 0) {
//     storedWorkoutIds.forEach(workoutData => {
//       fetchWorkoutById(workoutData);
//       addWorkoutCardToDOM(workoutData);
//     });
//   } else {
//    //     showEmptyMessage();
//   }
// }

//Попередня версія
if (favoritesCardsList) {
  updateFavoritesList();
}

// Функція отримання даних для аналізу localStorage та визначення подальшої логіки
export function updateFavoritesList() {
  storedWorkouts = getFavorites();

  if (storedWorkouts.length > 0) {
    favoritesCardsList.innerHTML = '';
    storedWorkouts.forEach(workout => {
      fetchWorkoutById(workout._id)
        .then(response => {
          const workoutData = response.data;
          addWorkoutCardToDOM(workoutData);
        })
        .catch(error => {
          console.log(error);
        });
    });
  } else {
    showEmptyMessage();
  }
}

// Функція отримання карточки вправи за ідентифікатором
// //Нова версія
// async function fetchWorkoutById() {
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   const workoutData = data.results.filter(workoutId =>
//     storedWorkoutIds.includes(workoutId._id)
//   );
// }

// Функція отримання карточки вправи за ідентифікатором
//Попередня версія
export function fetchWorkoutById(workoutId) {
  return axios.get(`${API_URL}/${workoutId}`);
}

// Функція для додавання нової карточки вправи до списку
function addWorkoutCardToDOM(workoutData) {
  const workoutCardMarkup = createWorkoutCardMarkup(workoutData);
  favoritesCardsList.insertAdjacentHTML('beforeend', workoutCardMarkup);
  //Додаємо обробник події кліку на смітник
  addRemoveButtonEventListener(workoutData);
  //Додаємо обробник події кліку на кнопку Start->
  document
    .querySelectorAll('.exercises_start')
    .forEach(el => el.addEventListener('click', openFavExerciseModal));
}

// Функція для розмітки однієї картки
function createWorkoutCardMarkup(workoutData) {
  const workoutCardMarkup = `
    <li class="exercises_item" data-gifUrl=${
      workoutData.gifUrl
    } data-description="${workoutData.description}" data-equipment=${
    workoutData.equipment
  } data-popularity=${workoutData.popularity} data-id=${
    workoutData._id
  } data-time=${workoutData.time}>
      <div class="exercises_sub_title">
        <div class="exercises__workout_rating">
          <p class="exercises_workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${
            workoutData._id
          }">
            <svg class="workout-card__icon" width="16" height="16">${trash}</svg>
          </button>
        </div>

  <div class="exercises_start">  
    <span class="exercises_start__text">Start</span>
    <svg
      class="exercises_start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    >${favarrow}</svg>    
  </div>

      </div>
      <div class="exercises_title">
        <svg class="exercises_title__svg" width="24" height="24">${fav_run_man}</svg>
        <span class="exercises_title_text">${workoutData.name}</span>
      </div>
      <div class="exercises_text">
        <p class="exercises_text__content">
          <span class="exercises_text__static">Burned calories:</span>
          <span class="exercises_text__dynamic">${
            workoutData.burnedCalories
          } / 3 min</span>
        </p>
        <p class="exercises_text__content">
          <span class="exercises_text__static">Body part:</span>
          <span class="exercises_text__dynamic">${workoutData.bodyPart}</span>
        </p>
        <p class="exercises_text__content">
          <span class="exercises_text__static">Target:</span>
          <span class="exercises_text__dynamic">${workoutData.target}</span>
        </p>
      </div>
      <span class="exercises_rating__text disactive_video_window">${String(
        workoutData.rating
      ).padEnd(3, '.0')}</span>
    </li>
  `;

  return workoutCardMarkup;
}

// Функція для додавання обробника події для кнопки видалення
function addRemoveButtonEventListener(workoutData) {
  const removeButtons = document.querySelectorAll(`.workout-card__remove-btn`);
  removeButtons.forEach(removeButton => {
    if (removeButton.getAttribute('data-workout-id') === workoutData._id) {
      removeButton.addEventListener('click', () => {
        removeWorkoutCardFromDOM(removeButton, workoutData._id);
      });
    }
  });
}

// Функція для видалення карточки вправи зі сторінки та з локального сховища
function removeWorkoutCardFromDOM(removeButton, workoutId) {
  removeButton.closest('.exercises_item').remove();

  deleteFavorites(workoutId);

  // Виклик функції showEmptyMessage, якщо немає збережених вправ
  if (updatedStoredWorkouts.length === 0) {
    showEmptyMessage();
  }
}

// Функція виводу повідомлення про пустий список обраних
export function showEmptyMessage() {
  favoritesCardsList.innerHTML = `
    <div class="empty-list">
      <img class="empty-item"
        srcset="./img/dumbbell@1x-min.png 1x, ./img/dumbbell@1x-min.png 2x"
        src="./img/dumbbell@1x-min.png"
        alt="dumbbell"
        width="85"
        height="52"
      />
      <p class="empty-message">
        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
      </p>
    </div>`;
}
