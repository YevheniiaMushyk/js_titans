import axios from 'axios';
import { openFavExerciseModal } from '../js/modal_video.js';

const API_URL = 'https://energyflow.b.goit.study/api/exercises/';
const list = document.querySelector('.workouts-list');

async function fetchWorkoutById() {
  const response = await fetch(API_URL);
  const data = await response.json();

  // console.log(data);

  const workoutData = data.results.filter(workoutId =>
    storedWorkoutIds.includes(workoutId._id)
  );
  console.log(workoutData);
}
let isFirstLoad = true;

const storedWorkoutIds =
  JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];

if (storedWorkoutIds.length > 0) {
  storedWorkoutIds.forEach(workoutData => {
    fetchWorkoutById(workoutData);

    addWorkoutCardToDOM(workoutData);
  });
} else {
  isFirstLoad = false;
  showEmptyMessage();
}
// console.log(storedWorkoutIds);

// Функція для додавання нової карточки вправи до списку
function addNewWorkoutById(workoutData) {
  const storedWorkoutIds =
    JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];
  if (!storedWorkoutIds.includes(workoutId.id)) {
    fetchWorkoutById(workoutData);

    addWorkoutCardToDOM(workoutData);

    storedWorkoutIds.push(workoutData);
    localStorage.setItem(
      'ENERGY_FLOW_FAVORITES_KEY',
      JSON.stringify(storedWorkoutIds)
    );

    isFirstLoad = false;
  }
}
// console.log(localStorage);

// Функція для додавання нової карточки вправи до списку
function addWorkoutCardToDOM(workoutData) {
  const workoutCardMarkup = createWorkoutCardMarkup(workoutData);
  list.insertAdjacentHTML('beforeend', workoutCardMarkup);
  addRemoveButtonEventListener(workoutData);
  document
    .querySelectorAll('.exercises_start')
    .forEach(el => el.addEventListener('click', openFavExerciseModal));
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

function removeWorkoutCardFromDOM(removeButton, workoutData) {
  removeButton.closest('.exercises_item').remove();

  const storedWorkoutIds =
    JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];
  const updatedStoredWorkoutIds = storedWorkoutIds.filter(
    workout => workout._id !== workoutData._id
  );

  // Оновлення storedWorkoutIds після видалення
  localStorage.setItem(
    'ENERGY_FLOW_FAVORITES_KEY',
    JSON.stringify(updatedStoredWorkoutIds)
  );

  // Видалення іншого значення з localStorage, якщо це необхідно
  // localStorage.removeItem('workoutId');

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
    <li class="exercises_item" data-gifUrl=${
      workoutData.gifUrl
    } data-description="${workoutData.description}" data-equipment=${
    workoutData.equipment
  } data-popularity=${workoutData.popularity} data-id=${workoutData._id}>
      <div class="exercises_sub_title">
        <div class="exercises__workout_rating">
          <p class="exercises_workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${
            workoutData._id
          }">
            <svg class="workout-card__icon" width="16" height="16">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>

  <div class="exercises_start">
  <button class="exercises-start-button" data-workout-data="${JSON.stringify(
    workoutData
  )}">
    <span class="exercises_start__text">Start</span>
    <svg
      class="exercises_start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    >
      <use href="./img/icons.svg#icon-arrow"></use>
    </svg></button>
  </div>

      </div>
      <div class="exercises_title">
        <svg class="exercises_title__svg" width="24" height="24">
          <use href="./img/icons.svg#icon-fav_run_man"></use>
        </svg>
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

// import axios from 'axios';
// import { openFavExerciseModal } from '../js/modal_video.js';

// const API_URL = 'https://energyflow.b.goit.study/api/exercises/';
// const list = document.querySelector('.workouts-list');
// console.log(API_URL);
// // Функція для додавання нової карточки вправи за ідентифікатором
// // function fetchWorkoutById(workoutId) {
// //   return axios.get(`${API_URL}/${workoutId}`);
// // }

// // function fetchWorkoutById(workoutId, API_URL) {
// //   return axios
// //     .get('https://energyflow.b.goit.study/api/exercises/')
// //     .then(response => {
// //       const workoutData = response.data;
// //       //   .find(
// //       //   workout => workout._id === workoutId
// //       // );
// //       const workoutData1 = data.results;
// //       console.log(workoutData1);
// //       if (!workoutData) {
// //         throw new Error('Workout not found');
// //       }
// //       return workoutData;
// //     })
// //     .catch(error => {
// //       console.error(error);
// //       throw new Error('Failed to fetch workout data');
// //     });
// // }

// let isFirstLoad = true;

// const storedWorkoutIds =
//   JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];

// if (storedWorkoutIds.length > 0) {
//   storedWorkoutIds.forEach(workoutId => {
//     fetchWorkoutById(workoutId)
//       .then(response => {
//         const workoutData = response.data;
//         addWorkoutCardToDOM(workoutData);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   });
// } else {
//   isFirstLoad = false;
//   showEmptyMessage();
// }

// // Функція для додавання нової карточки вправи до списку за _id
// function addNewWorkoutById(workoutId) {
//   const storedWorkoutIds =
//     JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];
//   if (!storedWorkoutIds.includes(workoutId)) {
//     fetchWorkoutById(workoutId)
//       .then(response => {
//         const workoutData = response.data;
//         addWorkoutCardToDOM(workoutData);

//         storedWorkoutIds.push(workoutId);
//         localStorage.setItem(
//           'ENERGY_FLOW_FAVORITES_KEY',
//           JSON.stringify(storedWorkoutIds)
//         );

//         isFirstLoad = false;
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
// }

// // Функція для додавання нової карточки вправи до списку
// function addWorkoutCardToDOM(workoutData) {
//   const workoutCardMarkup = createWorkoutCardMarkup(workoutData);
//   list.insertAdjacentHTML('beforeend', workoutCardMarkup);
//   addRemoveButtonEventListener(workoutData);
//   document
//     .querySelectorAll('.exercises_start')
//     .forEach(el => el.addEventListener('click', openFavExerciseModal));
// }

// // Функція для додавання обробника події для кнопки видалення

// function addRemoveButtonEventListener(workoutData) {
//   const removeButtons = document.querySelectorAll(`.workout-card__remove-btn`);
//   removeButtons.forEach(removeButton => {
//     if (removeButton.getAttribute('data-workout-id') === workoutData._id) {
//       removeButton.addEventListener('click', () => {
//         removeWorkoutCardFromDOM(removeButton, workoutData._id);
//       });
//     }
//   });
// }

// // Функція для видалення карточки вправи зі сторінки та з локального сховища
// function removeWorkoutCardFromDOM(removeButton, workoutId) {
//   removeButton.closest('.exercises_item').remove();

//   const storedWorkoutIds =
//     JSON.parse(localStorage.getItem('ENERGY_FLOW_FAVORITES_KEY')) || [];
//   const updatedStoredWorkoutIds = storedWorkoutIds.filter(
//     id => id !== workoutId
//   );

//   // Оновлення storedWorkoutIds після видалення
//   localStorage.setItem(
//     'ENERGY_FLOW_FAVORITES_KEY',
//     JSON.stringify(updatedStoredWorkoutIds)
//   );

//   // Видалення іншого значення з localStorage, якщо це необхідно
//   localStorage.removeItem('workoutId');

//   // Встановлення isFirstLoad на false, якщо немає збережених вправ
//   if (updatedStoredWorkoutIds.length === 0) {
//     isFirstLoad = false;
//   }

//   // Виклик функції showEmptyMessage, якщо немає збережених вправ
//   if (updatedStoredWorkoutIds.length === 0) {
//     showEmptyMessage();
//   }
// }

// // const closeModalButton = document.querySelector('.close-modal-button');
// // closeModalButton.addEventListener('click', () => {
// //     addRemoveButtonEventListener();
// // });

// function createWorkoutCardMarkup(workoutData) {
//   const workoutCardMarkup = `
//     <li class="exercises_item" data-gifUrl=${
//       workoutData.gifUrl
//     } data-description="${workoutData.description}" data-equipment=${
//     workoutData.equipment
//   } data-popularity=${workoutData.popularity} data-id=${workoutData._id}>
//       <div class="exercises_sub_title">
//         <div class="exercises__workout_rating">
//           <p class="exercises_workout">workout</p>
//           <button class="workout-card__remove-btn" data-workout-id="${
//             workoutData._id
//           }">
//             <svg class="workout-card__icon" width="16" height="16">
//               <use href="./img/icons.svg#icon-trash"></use>
//             </svg>
//           </button>
//         </div>

//   <div class="exercises_start">
//   <button class="exercises-start-button" data-workout-data="${JSON.stringify(
//     workoutData
//   )}">
//     <span class="exercises_start__text">Start</span>
//     <svg
//       class="exercises_start__svg"
//       width="13"
//       height="13"
//       stroke="rgb(27, 27, 27)"
//     >
//       <use href="./img/icons.svg#icon-arrow"></use>
//     </svg></button>
//   </div>

//       </div>
//       <div class="exercises_title">
//         <svg class="exercises_title__svg" width="24" height="24">
//           <use href="./img/icons.svg#icon-fav_run_man"></use>
//         </svg>
//         <span class="exercises_title_text">${workoutData.name}</span>
//       </div>
//       <div class="exercises_text">
//         <p class="exercises_text__content">
//           <span class="exercises_text__static">Burned calories:</span>
//           <span class="exercises_text__dynamic">${
//             workoutData.burnedCalories
//           } / 3 min</span>
//         </p>
//         <p class="exercises_text__content">
//           <span class="exercises_text__static">Body part:</span>
//           <span class="exercises_text__dynamic">${workoutData.bodyPart}</span>
//         </p>
//         <p class="exercises_text__content">
//           <span class="exercises_text__static">Target:</span>
//           <span class="exercises_text__dynamic">${workoutData.target}</span>
//         </p>
//       </div>
//       <span class="exercises_rating__text disactive_video_window">${String(
//         workoutData.rating
//       ).padEnd(3, '.0')}</span>
//     </li>
//   `;

//   return workoutCardMarkup;
// }

// function showEmptyMessage() {
//   if (!isFirstLoad) {
//     list.innerHTML = `
//     <div class="empty-list">
//       <img class="empty-item"
//         srcset="./img/dumbbell@1x-min.png 1x, ./img/dumbbell@1x-min.png 2x"
//         src="./img/dumbbell@1x-min.png"
//         alt="dumbbell"
//         width="85"
//         height="52"
//       />
//       <p class="empty-message">
//         It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
//       </p>
//     </div>`;
//   }
// }
