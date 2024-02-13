//import iziToast from "izitoast";
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
let URL = `https://energyflow.b.goit.study/api/exercises/`;
const form = document.querySelector('.exercises-search-form');
const containerCardsEl = document.querySelector('.exercises-card-container');
const searchFormEl = document.querySelector('.exercises-search');
const exercisesName = document.querySelector(".exercises-name");
const queryParams = {
    name: '',
    page: 1,
    maxPage: 0,
    limit: 9,
};
let currentSearchQuery = '';
function noResults() {
    containerCardsEl.innerHTML =
        '<div class="no-results-text">Unfortunately, <span>no results</span> were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>';
}
containerCardsEl.addEventListener('click', dataSet);
async function dataSet(event) {
    event.preventDefault();
    const cardElement = event.target.closest('.card-item');
    if (cardElement) {
        const nameElement = cardElement.querySelector('.name');
        const filterElement = cardElement.querySelector('.filter');
        if (nameElement && filterElement) {
            const name = nameElement.textContent.trim().replace(/\s/g, '%20');
            let filter = filterElement.textContent
                .trim()
                .toLowerCase()
                .replace(/\s/g, '');
            if (filter === 'bodyparts') {
                filter = filter.replace(/s$/, '');
            }
            exercisesName.innerHTML = (`Exercises /<span> ${name.replace(/%20/g, ' ')}</span>`);
            try {
                const newURL = `${URL}?${filter}=${name}`;
                const { results, totalPages } = await serchPicture('', 1, newURL);
                searchFormEl.classList.toggle('hidden');
                // пошук за ключовим словом -------------------
                form.addEventListener('submit', handleSearch);
                // функція для пошуку за ключовим словом -------------------
                async function handleSearch(event) {
                    event.preventDefault();
                    containerCardsEl.innerHTML = '';
                    const form = event.currentTarget;
                    const exercisesCard = form.elements.exercises.value.trim();
                    currentSearchQuery = exercisesCard;
                    queryParams.page = 1;
                    if (exercisesCard === '' || exercisesCard == null) {
                        noResults();
                        return;
                    }
                    try {
                        const { results, totalPages } = await serchPicture(
                            exercisesCard,
                            1,
                            newURL
                        );
                        if (results && results.length > 0) {
                            queryParams.maxPage = Math.ceil(totalPages / queryParams.perpage);
                            createexercisesCard(results, containerCardsEl);
                            const titles =
                                containerCardsEl.querySelectorAll('.exercises-title');
                            titles.forEach(function (title) {
                                if (title.scrollWidth > title.clientWidth) {
                                    title.classList.add('with-ellipsis');
                                }
                            });
                        } else {
                            containerCardsEl.innerHTML = '';
                            noResults();
                        }
                    } catch (err) {
                        console.log(err);
                    } finally {
                        form.reset();
                    }
                }
                queryParams.maxPage = Math.ceil(totalPages / queryParams.perpage);
                createexercisesCard(results, containerCardsEl);
            } catch (err) {
                console.log(err);
            } finally {
                form.reset();
            }
        }
    }
}
// запит-------------------
function serchPicture(exercisesCard, page = 1, URL) {
    return axios
        .get(URL, {
            params: {
                keyword: exercisesCard,
                limit: 9,
                page,
            },
        })
        .then(res => {
            return res.data;
        });
}
// формування розмітки -------------------
function createexercisesCard(results, containerCardsEl) {
    const markup = results
        .map(
            ({ rating, name, burnedCalories, bodyPart, target }) => `
    <li class="exercises-item">
            <div class="exercises-sub-title">
                <div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
                    <span class="exercises-rating"><span class="exercises-rating__text">${String(
                rating
            ).padEnd(
                3,
                '.0'
            )}</span><svg class="exercises-rating__svg" width="18" height="18">
                            <use href="../img/icons.svg#icon-star_yellow"></use>
                        </svg></span>
                </div>
                <a href="#" class="exercises-start"><span class="exercises-start__text">Start</span><svg
                        class="exercises-start__svg" width="13" height="13">
                        <use href="../img/icons.svg#icon-arrow"></use>
                    </svg></a>
            </div>
            <div class="exercises-title">
                <svg class="exercises-title__svg" width="24" height="24">
                    <use href="../img/icons.svg#icon-fav_run_man"></use>
                </svg>
                <span class="exercises-title-text">${name}</span>
            </div>
            <div class="exercises-text">
                <p class="exercises-text__content"><span class="exercises-text__static">Burned calories:</span>
                    <span class="exercises-text__dynamic">${burnedCalories} / 3 min</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
                    <span class="exercises-text__dynamic">${bodyPart}</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
                    <span class="exercises-text__dynamic">${target}</span></p>
            </div>
    </li>`
        )
        .join('');
    containerCardsEl.innerHTML = markup;
}
