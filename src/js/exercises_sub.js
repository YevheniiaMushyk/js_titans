import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
const URL = "https://energyflow.b.goit.study/api/exercises/";
const form = document.querySelector(".exercises-search-form");
const containerCardsEl = document.querySelector(".card-container")
const loadMoreBtn = document.querySelector(".label");
const preloader = document.getElementById("preloader");
const queryParams = {
    name: "",
    page: 1,
    maxPage: 0,
    perpage: 9,
};
let currentSearchQuery = "";
const hiddenClass = "is-hidden";
function hide(button) {
    button.classList.add(hiddenClass);
}

function show(button) {
    button.classList.remove(hiddenClass);
}

function enable(button, preloader) {
    preloader.classList.add(hiddenClass);
    button.disabled = false;
}

function disable(button, preloader) {
    preloader.classList.remove(hiddenClass);
    button.disabled = true;
}
function showLoadingIndicator() {
    containerCardsEl.innerHTML = '<div class="loader"></div>';
}
function noResults() {
    containerCardsEl.innerHTML = '<div class="no-results-text">Unfortunately, no results were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>';
}
function hideLoadingIndicator() {
    const loadingElement = containerCardsEl.querySelector('.loader');
    if (loadingElement) {
        loadingElement.remove();
    }
}
form.addEventListener("submit", handleSearch);
async function handleSearch(event) {
    event.preventDefault();
    containerCardsEl.innerHTML = "";
    const form = event.currentTarget;
    const exercisesCard = form.elements.exercises.value.trim();
    currentSearchQuery = exercisesCard;
    queryParams.page = 1;
    if (exercisesCard === "" || exercisesCard == null) {
        noResults()
        hide(loadMoreBtn);
        return;
    }
    showLoadingIndicator()
    try {
        const { results, totalPages } = await serchPicture(exercisesCard);
        if (results && results.length > 0) {
            queryParams.maxPage = Math.ceil(totalPages / queryParams.perpage);
            createexercisesCard(results, containerCardsEl)
            if (results && results.length > 0 && results.length !== totalPages) {
                show(loadMoreBtn);
                loadMoreBtn.removeEventListener("click", handleLoadMore);
                loadMoreBtn.addEventListener("click", handleLoadMore);
            } else {
                hide(loadMoreBtn);
            }
        } else {
            containerCardsEl.innerHTML = "";
            noResults()
            hide(loadMoreBtn);
        }
    }
    catch (err) {
        console.log(err);
    }
    finally {
        hideLoadingIndicator();
        form.reset()
    };
}
function serchPicture(exercisesCard, page = 1) {
    return axios.get(URL, {
        params: {
            muscles: "delts",
            keyword: exercisesCard,
            perpage: 9,
            page,
        }
    }).then((res) => {
        return res.data;
    });
}
async function handleLoadMore() {
    queryParams.page += 1;
    disable(loadMoreBtn, preloader);
    try {
        const { results } = await serchPicture(currentSearchQuery, queryParams.page)
        createexercisesCard(results, containerCardsEl)
    } catch (err) {
        console.log(err);
    } finally {
        enable(loadMoreBtn, preloader);
        if (queryParams.page >= queryParams.maxPage) {
            hide(loadMoreBtn);
            iziToast.error({
                title: "Error",
                message: `"We're sorry, but you've reached the end of search results."`,
            })
            loadMoreBtn.removeEventListener("click", handleLoadMore);
        } else {
            show(loadMoreBtn);
            loadMoreBtn.removeEventListener("click", handleLoadMore);
            loadMoreBtn.addEventListener("click", handleLoadMore);
        }
    }
}
function createexercisesCard(results, containerCardsEl) {
    const markup = results.map(({ rating, name, burnedCalories, bodyPart, target }) => `
    <li class="exercises-item">
            <div class="exercises-sub-title">
                <div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
                    <span class="exercises-rating"><span class="exercises-rating__text">${String(rating).padEnd(3, '.0')}</span><svg class="exercises-rating__svg" width="18" height="18">
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
    </li>`).join("");
    containerCardsEl.innerHTML = markup;
}