import axios from 'axios';
import iziToast from 'izitoast';
import { loader, activeLoader, disactiveLoader } from './loader';



const refs = {
  quoteText: document.querySelector('.quote-card-text'),
  quoteAuthor: document.querySelector('.quote-card-author'),
};

const BASE_URL = 'https://energyflow.b.goit.study/api/quote';

async function fetchQuoteData(url) {
  try {
    activeLoader(loader);

    const savedLocalData = localStorage.getItem('quoteLocalData');
    if (savedLocalData) {
      const parsedLocalData = JSON.parse(savedLocalData);
      const currentDate = getCurrentDate();
      if (parsedLocalData.date === currentDate) {
        renderQuoteCard(parsedLocalData.author, parsedLocalData.quote);
        return;
      }
    }
    const response = await axios.get(url);
    const data = response.data;

    if (data) {
      const quoteData = {
        quote: data.quote,
        author: data.author,
        date: getCurrentDate(),
      };
      localStorage.setItem('quoteLocalData', JSON.stringify(quoteData));
      renderQuoteCard(quoteData.author, quoteData.quote);
    }
    
  } catch (error) {
  refs.quoteAuthor.textContent = 'Angry Developer';
  refs.quoteText.textContent =
    'Internet access is required to receive a quote.';
iziToast.error({
  title: 'Error',
  message: 'No internet connection',
})  } 
}

function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
function renderQuoteCard(author, quote) {
  disactiveLoader(loader);

  refs.quoteAuthor.textContent = author;
  refs.quoteText.textContent = quote;
}

fetchQuoteData(BASE_URL);
