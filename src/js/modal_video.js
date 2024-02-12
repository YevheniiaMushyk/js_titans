import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { containerCardsEl } from '../js/exercises_sub.js';
const URL = 'https://energyflow.b.goit.study/api/exercises/';
// const form = document.querySelector('.exercises-search-form');
// const containerCardsEl = document.querySelector('.exercises-card-container');
// const loadMoreBtn = document.querySelector('.label');
// const preloader = document.getElementById('preloader');
// const queryParams = {
//   name: '',
//   page: 1,
//   maxPage: 0,
//   perpage: 9,
// };
// let currentSearchQuery = '';
// // funcions for btn loadmore
// const hiddenClass = 'is-hidden';
// function hide(button) {
//   button.classList.add(hiddenClass);
// }

// function show(button) {
//   button.classList.remove(hiddenClass);
// }

// function enable(button, preloader) {
//   preloader.classList.add(hiddenClass);
//   button.disabled = false;
// }

// function disable(button, preloader) {
//   preloader.classList.remove(hiddenClass);
//   button.disabled = true;
// }
// //=========================
// function showLoadingIndicator() {
//   containerCardsEl.innerHTML = '<div class="loader"></div>';
// }
// function noResults() {
//   containerCardsEl.innerHTML =
//     '<div class="no-results-text">Unfortunately, no results were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>';
// }
// function hideLoadingIndicator() {
//   const loadingElement = containerCardsEl.querySelector('.loader');
//   if (loadingElement) {
//     loadingElement.remove();
//   }
// }
// form.addEventListener('submit', handleSearch);
// async function handleSearch(event) {
//   event.preventDefault();
//   containerCardsEl.innerHTML = '';
//   const form = event.currentTarget;
//   const exercisesCard = form.elements.exercises.value.trim();
//   currentSearchQuery = exercisesCard;
//   queryParams.page = 1;
//   if (exercisesCard === '' || exercisesCard == null) {
//     noResults();
//     hide(loadMoreBtn);
//     return;
//   }
//   showLoadingIndicator();
//   try {
//     const { results, totalPages } = await serchPicture(exercisesCard);
//     if (results && results.length > 0) {
//       console.log(results);
//       queryParams.maxPage = Math.ceil(totalPages / queryParams.perpage);
//       createexercisesCard(results, containerCardsEl);
//       if (results && results.length > 0 && results.length !== totalPages) {
//         show(loadMoreBtn);
//         loadMoreBtn.removeEventListener('click', handleLoadMore);
//         loadMoreBtn.addEventListener('click', handleLoadMore);
//       } else {
//         hide(loadMoreBtn);
//       }
//     } else {
//       containerCardsEl.innerHTML = '';
//       noResults();
//       hide(loadMoreBtn);
//     }
//   } catch (err) {
//     console.log(err);
//   } finally {
//     hideLoadingIndicator();
//     form.reset();
//   }
// }
// function serchPicture(exercisesCard, page = 1) {
//   return axios
//     .get(URL, {
//       params: {
//         muscles: 'delts',
//         keyword: exercisesCard,
//         perpage: 9,
//         page,
//       },
//     })
//     .then(res => {
//       return res.data;
//     });
// }
// //pagination
// async function handleLoadMore() {
//   queryParams.page += 1;
//   disable(loadMoreBtn, preloader);
//   try {
//     const { results } = await serchPicture(
//       currentSearchQuery,
//       queryParams.page
//     );
//     createexercisesCard(results, containerCardsEl);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     enable(loadMoreBtn, preloader);
//     if (queryParams.page >= queryParams.maxPage) {
//       hide(loadMoreBtn);
//       iziToast.error({
//         title: 'Error',
//         message: "We're sorry, but you've reached the end of search results.",
//       });
//       loadMoreBtn.removeEventListener('click', handleLoadMore);
//     } else {
//       show(loadMoreBtn);
//       loadMoreBtn.removeEventListener('click', handleLoadMore);
//       loadMoreBtn.addEventListener('click', handleLoadMore);
//     }
//   }
// }

// function createexercisesCard(results, containerCardsEl) {
//   const markup = results
//     .map(
//       ({
//         rating,
//         name,
//         burnedCalories,
//         bodyPart,
//         target,
//         gifUrl,
//         description,
//         equipment,
//         popularity,
//         _id,
//       }) => `
//     <li class="exercises-item" data-gifUrl=${gifUrl} data-description="${description}" data-equipment=${equipment} data-popularity=${popularity} data-id=${_id}>
//             <div class="exercises-sub-title">
//                 <div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
//                     <span class="exercises-rating"><span class="exercises-rating__text">${String(
//                       rating
//                     ).padEnd(
//                       3,
//                       '.0'
//                     )}</span><svg class="exercises-rating__svg" width="18" height="18">
//                             <use href="../img/icons.svg#icon-star_yellow"></use>
//                         </svg></span>
//                 </div>
//                 <a href="#" class="exercises-start"><span class="exercises-start__text">Start</span><svg
//                         class="exercises-start__svg" width="13" height="13">
//                         <use href="../img/icons.svg#icon-arrow"></use>
//                     </svg></a>
//             </div>
//             <div class="exercises-title">
//                 <svg class="exercises-title__svg" width="24" height="24">
//                     <use href="../img/icons.svg#icon-fav_run_man"></use>
//                 </svg>
//                 <span class="exercises-title-text">${name}</span>
//             </div>
//             <div class="exercises-text">
//                 <p class="exercises-text__content"><span class="exercises-text__static">Burned calories:</span>
//                     <span class="exercises-text__dynamic">${burnedCalories} / 3 min</span></p>
//                 <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
//                     <span class="exercises-text__dynamic">${bodyPart}</span></p>
//                 <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
//                     <span class="exercises-text__dynamic">${target}</span></p>
//             </div>
//     </li>`
//     )
//     .join('');
//   containerCardsEl.innerHTML = markup;
// }

// округлити рейтинг зірочок

// прив"зати ID і
// передати через евентлістенер його в localStorage
// додать скрол в дескіпшн

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
const tttt = document.querySelector('.workouts-list');

// орієнтовно отримуємо доступ до модалки з оцінкою :
const modalRating = document.querySelector('.modal_rating');

const FAVORITES_KEY_LOCAL_STORAGE = 'asdasdasdasdqweqweqwewerterterter123';

// Додаємо обробник кліків на картки вправ для відкриття модального вікна
containerCardsEl.addEventListener('click', event => {
  const exerciseItem = event.target.closest('.exercises-item');
  if (!exerciseItem) {
    return;
  }
  const exerciseData = getExerciseData(exerciseItem);
  fillModalWithData(exerciseData);
  modal.style.display = 'block';
});

tttt.addEventListener('click', event => {
  const exerciseItem = event.target.closest('.exercises-item');
  if (!exerciseItem) {
    return;
  }
  const exerciseData = getExerciseData(exerciseItem);
  fillModalWithData(exerciseData);
  modal.style.display = 'block';
});

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

// варіант відкриття модального вікна з рейтингом
window.addEventListener('click', event => {
  if (!ratingButton) {
    return;
  }
  if (!modalRating) {
    return;
  }
  modalRating.dataset.id = modal.dataset.id;
});

// Кнопка add to favorites
function getFavorites() {
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
  console.log(favorites);
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

function deleteFavorites(id) {
  const favorites = getFavorites();
  const updFavorites = favorites.filter(el => el !== id);
  window.localStorage.setItem(
    FAVORITES_KEY_LOCAL_STORAGE,
    JSON.stringify(updFavorites)
  );
}

favoriteButton.addEventListener('click', event => {
  if (!modal) {
    return;
  }
  const id = modal.dataset.id;
  const favorite = checkFavorites(id);
  if (favorite) {
    deleteFavorites(id);
  } else {
    setFavorites(id);
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
    title: titleElement.textContent,
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
  // Заповнюємо зірочки рейтингу
  const rating = parseFloat(exerciseData.rating);
  ratingStars.forEach((star, index) => {
    if (index < rating) {
      star.style.fill = 'rgb(255, 195, 0)'; // Зафарбовуємо зірочки золотим кольором
    } else {
      star.style.fill = 'none'; // Залишаємо пустими незірочені кольори
    }
  });
  exerciseTitle.textContent = exerciseData.title;
  targetElement.textContent = exerciseData.target;
  bodypartsElement.textContent = exerciseData.bodyPart;
  equipmentElement.textContent = exerciseData.equipment;
  popularElement.textContent = exerciseData.popularity;
  caloriesElement.textContent = exerciseData.burnedCalories;
  descriptionElement.textContent = exerciseData.description;
  modal.dataset.id = exerciseData.id;

  drawFavoritesBtnText(exerciseData.id);
}
export { modal };
