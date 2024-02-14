import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

///////////////////////////////////////////////////////////////////////////////////////////
import { loader, activeLoader, disactiveLoader } from './loader';
/////////////////////////////////////////////////////////////////////////////////////////////

// import { loader, activeLoader, disactiveLoader } from '../js/loader';
const searchFormEl = document.querySelector('.exercises-search');
// const exercisesName = document.querySelector(".exercises-name");
const exercisesName = document.querySelector('.exercises-name');
const refs = {
  buttons: document.querySelector('.exercises-buttons'),
  musclesButton: document.querySelector('[data-filter="muscles"]'),
  bodypartButton: document.querySelector('[data-filter="bodypart"]'),
  equipmentButton: document.querySelector('[data-filter="equipment"]'),
  cardContainer: document.querySelector('.exercises-card-container'),
  pagination: document.querySelector('#pagination'),
  excerciceContainer: document.querySelector('.container-ex'),
};
const form = document.querySelector('.exercises-search-form');
let btnPrev = null;
axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

const params = {
  filter: 'Muscles',
  page: 1,
  perPage: 12,
  totalPages: 1,
  totalItems: 0,
};

async function getData() {
  makeHeightSec('.exercises-card-container', 'add');

  const data = await axios.get('/filters', {
    params: {
      filter: params.filter,
      page: params.page,
      limit: params.perPage,
    },
  });
  return data.data;
}
function createMarkup(results) {
  refs.cardContainer.innerHTML = '';
  const promises = results.map(({ name, filter, imgUrl }) => {
    return new Promise(resolve => {
      const img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        resolve(
          `<li class="card-item">
          <a href="">
            <img class="card-image" src="${imgUrl}" alt="Card Image">
            <ul class="card-item-desc"="${name}">
              <li class="name" data-source="${name}">${name}</li>
              <li class="filter" data-source="${filter}">${filter}</li>
            </ul>
          </a>
        </li>`
        );
      };
    });
  });

  Promise.all(promises).then(markupArray => {
    const markup = markupArray.join('');
    refs.cardContainer.innerHTML = markup;
    makeHeightSec('.exercises-card-container', 'add');
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    disactiveLoader(loader);
    //////////////////////////////////////////////////////////////////////////////////////////////////////
  });
}

function onSearch() {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  activeLoader(loader);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getData()
    .then(data => {
      const { results, page, totalPages } = data;
      params.totalPages = totalPages;
      makeHeightSec('.exercises-card-container', 'del');
      createMarkup(results);
      if (totalPages > 1) {
        const pages = pagesPagin(page, totalPages);
        refs.pagination.innerHTML = pages;
        const firstPageButton = document.querySelector('.pag-btn');
        firstPageButton.classList.add('active');
        if (params.filter !== 'Body parts') {
          refs.pagination.style.display = 'block';
        } else {
          refs.pagination.style.display = 'none';
        }
      } else {
        refs.pagination.style.display = 'none';
      }
    })
    .catch(error => {
      showAlert(error.message, 'ERROR');
    })
    .finally(() => {
      // disactiveLoader(loader);
    });
}
onSearch();
refs.musclesButton.classList.add('active');

refs.buttons.addEventListener('click', e => {
  selected(e);
  const cardTarget = e.target;
  refs.pagination.classList.remove('hidden');
  searchFormEl.classList.add('hidden');

  exercisesName.innerHTML = `Exercises`;
  const paginationContainer = document.querySelector('.pagination-container');
  paginationContainer.innerHTML = '';
  paginationContainer.classList.add('hidden');

  if (cardTarget === e.currentTarget) {
    return;
  } else if (cardTarget === refs.musclesButton) {
    params.filter = 'Muscles';
  } else if (cardTarget === refs.bodypartButton) {
    params.filter = 'Body parts';
  } else if (cardTarget === refs.equipmentButton) {
    params.filter = 'Equipment';
  }
  params.page = 1;
  onSearch();
});

function selected(e) {
  const isButton = e.target.nodeName === 'BUTTON';
  refs.musclesButton.classList.remove('active');
  if (!isButton) {
    return;
  }
  e.target.classList.add('active');
  if (btnPrev !== null) {
    btnPrev.classList.remove('active');
  }
  btnPrev = e.target;
  if (btnPrev !== null) {
    btnPrev.classList.add('active');
  }
}
refs.pagination.addEventListener('click', onPagination);

function pagesPagin(page, totalPages) {
  let pagSite = '';
  for (; page <= totalPages; page++) {
    pagSite += `<button class="pag-btn" type="button">${page}</button>`;
  }
  return pagSite;
}
async function onPagination(e) {
  const buttons = document.querySelectorAll('.pag-btn');

  buttons.forEach(button => {
    button.classList.remove('active');
  });
  e.target.classList.add('active');
  params.page = e.target.textContent;
  refs.cardContainer.innerHTML = '';
  try {
    /////////////////////////////////////////////////////////////////////////////////////
    activeLoader(loader);
    ///////////////////////////////////////////////////////////////////////////////////////////
    const { results } = await getData();
    createMarkup(results);
    if (refs.excerciceContainer) {
      refs.excerciceContainer.scrollIntoView({ behavior: 'smooth' });
    }
  } catch (error) {
    console.log(error);
  }
}

function makeHeightSec(selector, act) {
  const block = document.querySelector(selector);
  const rect = block.getBoundingClientRect();
  if (rect.height > 100 && act === 'add') {
    block.setAttribute('style', 'height:' + rect.height + 'px');
    block.style.height = rect.height + 'px';
  }
  if (act === 'del') {
    block.removeAttribute('style');
    block.style.height = 'auto';
  }
}

function showAlert(msg, type = 'info') {
  if (type === 'OK') {
    iziToast.success({
      position: 'topCenter',
      message: msg,
    });
  } else if (type === 'ERROR') {
    iziToast.error({
      position: 'topCenter',
      message: msg,
    });
  } else {
    iziToast.info({
      position: 'topCenter',
      message: msg,
    });
  }
}
