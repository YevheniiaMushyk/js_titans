import axios from 'axios';
import { openExerciseModal } from '../js/modal_video.js';

const API_URL = 'https://energyflow.b.goit.study/api/exercises/';
const list = document.querySelector('.workouts-list');

// Функція для додавання нової карточки вправи за ідентифікатором
function fetchWorkoutById(workoutId) {
  return axios.get(`${API_URL}/${workoutId}`);
}

let isFirstLoad = true;

const storedWorkoutIds =
  JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];

if (storedWorkoutIds.length > 0) {
  storedWorkoutIds.forEach(workoutId => {
    fetchWorkoutById(workoutId)
      .then(response => {
        const workoutData = response.data;
        addWorkoutCardToDOM(workoutData);
      })
      .catch(error => {
        console.error(error);
      });
  });
} else {
  isFirstLoad = false;
  showEmptyMessage();
}

// Функція для додавання нової карточки вправи до списку за _id
function addNewWorkoutById(workoutId) {
  const storedWorkoutIds =
    JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];
  if (!storedWorkoutIds.includes(workoutId)) {
    fetchWorkoutById(workoutId)
      .then(response => {
        const workoutData = response.data;
        addWorkoutCardToDOM(workoutData);

        storedWorkoutIds.push(workoutId);
        localStorage.setItem(
          'ENERGY_FLOW_FAVORITES_KEY',
          JSON.stringify(storedWorkoutIds)
        );

        isFirstLoad = false;
      })
      .catch(error => {
        console.error(error);
      });
  }
}

// Функція для додавання нової карточки вправи до списку
function addWorkoutCardToDOM(workoutData) {
  console.log(workoutData._id); // Виведе значення workoutData._id у консоль

  const workoutCardMarkup = createWorkoutCardMarkup(workoutData);
  list.insertAdjacentHTML('beforeend', workoutCardMarkup);
  addRemoveButtonEventListener(workoutData);

  // // Вибрати всі кнопки з класом .exercises-start-button
  // const buttons = document.querySelectorAll('.exercises-start-button');

  // buttons.forEach(button => {
  //   // Отримати дані з атрибуту data-workout-data
  //   const workoutDataString = button.dataset.workoutData;

  //   // Обробити рядок JSON для отримання об'єкта JavaScript
  //   const workoutDataObject = JSON.parse(workoutDataString);

  //   console.log(workoutDataObject); // Вивести об'єкт в консоль

  //   // Додати обробник події для кнопки
  //   button.addEventListener('click', event => {
  //     openExerciseModal(event, workoutDataObject);
  //   });
  // });
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
  removeButton.closest('.exercises-item').remove();

  const storedWorkoutIds =
    JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];
  const updatedStoredWorkoutIds = storedWorkoutIds.filter(
    id => id !== workoutId
  );

  // Оновлення storedWorkoutIds після видалення
  localStorage.setItem(
    'ENERGY_FLOW_FAVORITES_KEY',
    JSON.stringify(updatedStoredWorkoutIds)
  );

  // Видалення іншого значення з localStorage, якщо це необхідно
  localStorage.removeItem('workoutId');

  // Встановлення isFirstLoad на false, якщо немає збережених вправ
  if (updatedStoredWorkoutIds.length === 0) {
    isFirstLoad = false;
  }

  // Виклик функції showEmptyMessage, якщо немає збережених вправ
  if (updatedStoredWorkoutIds.length === 0) {
    showEmptyMessage();
  }
}

function createWorkoutCardMarkup(workoutData) {
  const workoutCardMarkup = `
    <li class="exercises-item">
      <div class="exercises-sub-title">
        <div class="exercises__workout-rating">
          <p class="exercises-workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${
            workoutData._id
          }">
            <svg class="workout-card__icon" width="16" height="16">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
       
    
  <div class="exercises-start">
  <button class="exercises-start-button" data-workout-data="${JSON.stringify(
    workoutData
  )}">
    <span class="exercises-start__text">Start</span>
    <svg
      class="exercises-start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    >
      <use href="./img/icons.svg#icon-arrow"></use>
    </svg></button>
  </div>

      </div>
      <div class="exercises-title">
        <svg class="exercises-title__svg" width="24" height="24">
          <use href="./img/icons.svg#icon-fav_run_man"></use>
        </svg>
        <span class="exercises-title-text">${workoutData.name}</span>
      </div>
      <div class="exercises-text">
        <p class="exercises-text__content">
          <span class="exercises-text__static">Burned calories:</span>
          <span class="exercises-text__dynamic">${
            workoutData.burnedCalories
          } / 3 min</span>
        </p>
        <p class="exercises-text__content">
          <span class="exercises-text__static">Body part:</span>
          <span class="exercises-text__dynamic">${workoutData.bodyPart}</span>
        </p>
        <p class="exercises-text__content">
          <span class="exercises-text__static">Target:</span>
          <span class="exercises-text__dynamic">${workoutData.target}</span>
        </p>
      </div>
    </li>
  `;
  // document.querySelectorAll('.exercises-start-button').forEach(button => {
  //   if (button.dataset.workoutData === JSON.stringify(workoutData)) {
  //     button.addEventListener('click', openExerciseModal);
  //   }
  // });

  return workoutCardMarkup;
}

function showEmptyMessage() {
  if (!isFirstLoad) {
    list.innerHTML = `
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
}
