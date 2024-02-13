import axios from 'axios';
import { openExerciseModal } from '../js/modal_video.js';

const API_URL = 'https://energyflow.b.goit.study/api/exercises/';
const list = document.querySelector('.workouts-list');

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

const startButtons = document.querySelectorAll('.exercises-item__button');
startButtons.forEach(startButton => {
  startButton.addEventListener('click', event => {
    openExerciseModal(event);
  });
});
// const startButtons = document.querySelectorAll('.exercises-item__button');
// startButtons.forEach(startButton => {
//   startButton.addEventListener('click', () => {
//     openExerciseModal();
//   });
// });

// const startButtons = document.querySelectorAll('.exercises-item__button');
// startButtons.forEach(startButton => {
//   startButton.addEventListener('click', () => {
//     const workoutId = startButton.dataset.workoutId;
//     console.log('Clicked on Start button with workoutId:', workoutId);
//     openExerciseModal(workoutId);
//   });
// });

function addWorkoutCardToDOM(workoutData) {
  const workoutCardMarkup = createWorkoutCardMarkup(workoutData);
  list.insertAdjacentHTML('beforeend', workoutCardMarkup);
  addRemoveButtonEventListener(workoutData);
}

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

function removeWorkoutCardFromDOM(removeButton, workoutId) {
  removeButton.closest('.exercises-item').remove();

  const storedWorkoutIds =
    JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];
  const updatedStoredWorkoutIds = storedWorkoutIds.filter(
    id => id !== workoutId
  );

  localStorage.setItem(
    'ENERGY_FLOW_FAVORITES_KEY',
    JSON.stringify(updatedStoredWorkoutIds)
  );

  localStorage.removeItem('workoutId');

  if (updatedStoredWorkoutIds.length === 0) {
    isFirstLoad = false;
  }

  if (updatedStoredWorkoutIds.length === 0) {
    showEmptyMessage();
  }
}

function createWorkoutCardMarkup(workoutData) {
  return `
    <li class="exercises-item">
      <div class="exercises-sub-title">
        <div class="exercises__workout-rating">
          <p class="exercises-workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${workoutData._id}">
            <svg class="workout-card__icon" width="16" height="16">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
     <button class="exercises-item__button" data-workout-id="${workoutData._id}">
  <div class="exercises-start">
    <span class="exercises-start__text">Start</span>
    <svg
      class="exercises-start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    >
      <use href="./img/icons.svg#icon-arrow"></use>
    </svg>
  </div>
</button>
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
          <span class="exercises-text__dynamic">${workoutData.burnedCalories} / 3 min</span>
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
