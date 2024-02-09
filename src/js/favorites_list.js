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

fetchFavourites().then(data => {
  localStorage.setItem('favouritesData', JSON.stringify(data));
});
const favouritesDataString = localStorage.getItem('favouritesData');
const favouritesData = JSON.parse(favouritesDataString);
console.log(favouritesData);

async function fetchDataAndSaveToLocal() {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    localStorage.setItem('favouritesData', JSON.stringify(data));
    console.log('Data saved to localStorage:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchDataAndSaveToLocal();

// async function initPage() {
//   try {
//     const storedData = localStorage.getItem('favouritesData');

//     if (storedData) {
//       const favouritesData = JSON.parse(storedData);
//       createWorkoutCards(favouritesData); // Відобразити картки на сторінці
//     } else {
//       // Якщо немає даних в localStorage, ініціалізуємо сторінку
//       await renderFavourites();
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
function checkLocalStorageAndRender() {
  const storedData = localStorage.getItem('favouritesData');

  if (storedData) {
    const favouritesData = JSON.parse(storedData);
    createWorkoutCards(favouritesData); // Відобразити картки на сторінці
  } else {
    showEmptyMessage();
  }
}
checkLocalStorageAndRender();

// Функція для відображення повідомлення про відсутність вправ
function showEmptyMessage() {
  list.innerHTML = `<div class="empty-list">
       <img class = "empty-item"
            srcset="  ./img/dumbbell@1x-min.png 1x,
                      ./img/dumbbell@1x-min.png 2x "
                    src="./img/dumbbell@1x-min.png"
                    alt="dumbbell"
                    width="85"
                    height="52" /><p class="empty-message">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
                    </div>`;
}

// function createWorkoutCards(workoutsObj) {
//   const list = document.querySelector('.workouts-list');

//   for (const key in workoutsObj) {
//     if (workoutsObj.hasOwnProperty(key)) {
//       console.log(key, workoutsObj[key]);
//     }
//   }
// }

function createWorkoutCards(workoutsObj) {
  // const list = document.querySelector('.workouts-list');

  const workouts = workoutsObj.results; // Отримуємо масив вправ з об'єкта

  const markup = workouts
    .map(
      workout => `
    <li class="workout-card">
      <div class="workout-card__header">
        <p>WORKOUT</p>
        <button class="workout-card__remove-btn" data-workout-id="${workout._id}">
          <svg width="16" height="16">
            <use href="../img/icons.svg#icon-trash"></use>
          </svg>
        </button>
        <button class="workout-card__start-btn" data-workout-id="${workout._id}">
          Start
        </button>
      </div>
      <div class="workout-card__info">
        <svg width="24" height="24">
          <use href="../img/icons.svg#icon-fav_run_man"></use>
        </svg>
        <h3 class="workout-card__title">${workout.name}</h3>
        <p class="workout-card__calories">
          ${workout.burnedCalories} ккал за 3 хв.
        </p>
        <p class="workout-card__body-part">${workout.bodyPart}</p>
        <p class="workout-card__target">${workout.target}</p>
      </div>
    </li>
  `
    )
    .join('');

  list.innerHTML = markup;
}

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
    await renderFavourites(); // Після видалення оновлюємо список
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
// initPage();
