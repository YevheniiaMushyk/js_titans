import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  buttons: document.querySelector('.exercises-buttons'),
  musclesButton: document.querySelector('[data-filter="muscles"]'),
  bodypartButton: document.querySelector('[data-filter="bodypart"]'),
  equipmentButton: document.querySelector('[data-filter="equipment"]'),
  cardContainer: document.querySelector('.card-container'),
  pagination: document.querySelector('#pagination'),
};
const form = document.querySelector('.exercises-search-form');
const loader = document.querySelector('.loader');
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
  showLoader(true);
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
  const markup = results
    .map(
      ({ name, filter, imgUrl }) => `<li class="card-item">
        <a href="">
        <img class="card-image" src="${imgUrl}" alt="Card Image">
            <ul class="card-item-desc"="${name}">
                <li class="name">${name}</li>
                <li class="filter">${filter}</li>
            </ul>
        </a>
    </li>`
    )
    .join('');

  refs.cardContainer.innerHTML = markup;
  showLoader(false);
}

function onSearch() {
  params.page = 1;
  getData()
    .then(data => {
      const { results, page, totalPages } = data;
      createMarkup(results);
      if (totalPages > 1) {
        const pages = pagesPagin(page, totalPages);
        refs.pagination.innerHTML = pages;
      }
    })
    .catch(error => {
      showAlert(error.message, 'ERROR');
    })
    .finally(() => {
      showLoader(false);
    });
}

onSearch();
refs.musclesButton.classList.add('active');
refs.musclesButton.disabled = true;

refs.buttons.addEventListener('click', e => {
  selected(e);
  const cardTarget = e.target;

  if (cardTarget === e.currentTarget) {
    return;
  } else if (cardTarget === refs.musclesButton) {
    refs.musclesButton.disabled = true;
    refs.bodypartButton.disabled = false;
    refs.equipmentButton.disabled = false;
    params.filter = 'Muscles';
  } else if (cardTarget === refs.bodypartButton) {
    refs.musclesButton.disabled = false;
    refs.bodypartButton.disabled = true;
    refs.equipmentButton.disabled = false;
    params.filter = 'Body parts';
  } else if (cardTarget === refs.equipmentButton) {
    refs.musclesButton.disabled = false;
    refs.bodypartButton.disabled = false;
    refs.equipmentButton.disabled = true;
    params.filter = 'Equipment';
  }
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
  params.page = e.target.textContent;
  refs.cardContainer.innerHTML = '';
  try {
    const { results } = await getData();

    createMarkup(results);
  } catch (error) {
    console.log(error);
  }
}

function showLoader(state = true) {
  loader.style.display = state ? 'inline-block' : 'none';
  form.disabled = state;
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
