import axios from 'axios';

const API_URL = 'https://energyflow.b.goit.study/api/exercises/';

const list = document.querySelector('.workouts-list');

// Функція для отримання списку улюблених вправ з сервера
async function fetchFavourites() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// // Функція для відображення повідомлення про відсутність улюблених вправ
// function showEmptyMessage() {
//   list.innerHTML = `<div class="empty-list">
//        <img class = "empty-item"
//             srcset="  ./img/dumbbell@1x-min.png 1x,
//                       ./img/dumbbell@1x-min.png 2x "
//                     src="./img/dumbbell@1x-min.png"
//                     alt="dumbbell"
//                     width="85"
//                     height="52" /><p class="empty-message">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
//                     </div>`;
// }

async function initPage() {
  try {
    // Отримуємо дані з localStorage
    const storedData = localStorage.getItem('favourites');

    // Перевіряємо, чи є дані в localStorage
    if (storedData) {
      // Додаємо збережені дані на сторінку
      list.insertAdjacentHTML('beforeend', storedData);
    } else {
      // Якщо немає даних в localStorage, ініціалізуємо сторінку
      await renderFavourites();
    }
  } catch (error) {
    console.error(error);
  }
}

function createWorkoutCards(workouts) {
  const markup = workouts
    .map(
      ({ name, burnedCalories, bodyPart, target, _id }) => `
         <li class="workout-card">
        <div class="workout-card__header">
          <p>WORKOUT</p>
          <button class="workout-card__remove-btn" data-workout-id="${_id}">
            <svg
              width="16"
              height="16">
             <use href="../img/icons.svg#icon-trash"></use>
            </svg>
          </button>
          <button class="workout-card__start-btn" data-workout-id="${_id}">
            Start
          </button>
        </div>
        <div class="workout-card__info">
          <svg
            width="24"
            height="24" >
           <use href="../img/icons.svg#icon-fav_run_man"></use>
          </svg>
          <h3 class="workout-card__title">${name}</h3>
          <p class="workout-card__calories">
            ${burnedCalories} ккал за 3 хв.
          </p>
          <p class="workout-card__body-part">${bodyPart}</p>
          <p class="workout-card__target">${target}</p>
        </div>
      </li>
    `
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

// Функція для відображення списку улюблених вправ на сторінці
async function renderFavourites() {
  const favourites = await fetchFavourites();
  if (!favourites.length) {
    showEmptyMessage();
    return;
  }

  createWorkoutCards(favourites);
}

// Функція для видалення вправи зі списку улюблених
async function removeFavourite(workoutId) {
  try {
    await axios.delete(`${API_URL}/${workoutId}`);
    await renderFavourites(); // Після видалення оновлюємо список улюблених вправ
  } catch (error) {
    console.error(error);
  }
}

// Додавання обробників подій для кнопок видалення вправ
list.addEventListener('click', async event => {
  if (event.target.classList.contains('workout-card__remove-btn')) {
    const workoutId = event.target.dataset.workoutId;
    await removeFavourite(workoutId);
  }
});
// Ініціалізація сторінки після завантаження
initPage();
