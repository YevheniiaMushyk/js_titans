import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import { showAlert, showLoader } from './......';
const form = document.querySelector('.footer-form');
const loader = document.querySelector('.loader');

async function addEmail(email) {
  return axios.post('https://energyflow.b.goit.study/api/subscription', email);
}
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const userEmail = e.currentTarget.email.value.trim().toLowerCase();

  if (userEmail === '') {
    showAlert('The email field is empty!', 'ERROR');
    return;
  }

  const userData = {
    email: userEmail,
  };
  showLoader('true');
  addEmail(userData)
    .then(({ data, status }) => {
      if (status === 201) {
        showAlert(data.message, 'OK');
      }
    })
    .catch(error => {
      if (error.response.status === 409) {
        showAlert('Subscription already exists!');
      } else {
        showAlert(error.message, 'ERROR');
      }
    })
    .finally(() => {
      form.reset();
      showLoader(false);
    });
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

function showLoader(state = true) {
  loader.style.display = !state ? 'none' : 'inline-block';
  form.disabled = state;
}
