import axios from 'axios';
import iziToast from 'izitoast';

const refs = {
  quoteText: document.querySelector('.quote-card-text'),
  quoteAuthor: document.querySelector('.quote-card-author'),
};

const BASE_URL = 'https://energyflow.b.goit.study/api/quote';

async function fetchQuoteData(url) {
  try {
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
    iziToast.error(error);
  }
}

function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
function renderQuoteCard(author, quote) {
  refs.quoteAuthor.textContent = author;
  refs.quoteText.textContent = quote;
}

fetchQuoteData(BASE_URL);

// async function fetchQuoteOfTheDay() {
//   try {
//     const savedData = localStorage.getItem('quoteData');
//     if (savedData) {
//       const parsedData = JSON.parse(savedData);
//       const currentDate = getCurrentDate();
//       if (parsedData.date === currentDate) {
//         renderQuote(parsedData.quote, parsedData.author);
//         return;
//       }
//     }
//     const response = await axios.get(BASE_URL);
//     const data = response.data;
//     if (data) {
//       const quoteData = {
//         quote: data.quote,
//         author: data.author,
//         date: getCurrentDate(),
//       };
//       localStorage.setItem('quoteData', JSON.stringify(quoteData));
//       renderQuote(quoteData.quote, quoteData.author);
//     }
//   } catch (error) {
//     console.error('Произошла ошибка при получении цитаты:', error);
//   }
// }

// function renderQuote(quote, author) {
//   refs.quoteText.textContent = quote;
//   refs.quoteAuthor.textContent = author;
// }

// function getCurrentDate() {
//   const date = new Date();
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// }

// fetchQuoteOfTheDay();

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const refs = {
//   quoteText: document.querySelector('.quote-card-text'),
//   quoteAuthor: document.querySelector('.quote-card-author'),
// };

// const BASE_URL = 'https://energyflow.b.goit.study/api/quote';

// async function getQuoteOfTheDay(url) {
//   try {
//     const saveQuoteData = localStorage.getItem('quoteData');
//     const parseQuoteData = saveQuoteData ? JSON.parse(saveQuoteData) : null;

//     const currentDate = getActualDate();

//     if (!parseQuoteData || parseQuoteData.date !== currentDate) {
//       const response = await axios.get(url);
//       const data = response.data;
//       if (data) {
//         const newQuoteData = {
//           quote: data.quote,
//           author: data.author,
//           date: currentDate,
//         };
//         localStorage.setItem('quoteData', JSON.stringify(newQuoteData));
//         console.log(
//           'Цитата дня успешно сохранена в локальное хранилище:',
//           data
//         );
//         return newQuoteData;
//       } else {
//         console.error('Ошибка при получении данных цитаты:', error);
//       }
//     } else {
//       console.log(
//         'Цитата дня еще актуальна, используем сохраненную:',
//         parseQuoteData
//       );
//       return parseQuoteData;
//     }
//   } catch (error) {
//     console.error('Произошла ошибка:', error);
//     return null;
//   }
// }

// function getActualDate() {
//   const date = new Date();
//   const getYear = date.getFullYear();
//   const getMonth = date.getMonth() + 1;
//   const getDate = date.getDate();
//   return `${getDate}-${getMonth}-${getYear}`;
// }

// // Пример использования функции
// getQuoteOfTheDay(BASE_URL).then(quoteData => {
//   if (quoteData) {
//     console.log('Цитата дня:', quoteData.quote);
//     console.log('Автор цитаты:', quoteData.author);
//   } else {
//     console.log('Не удалось получить цитату дня.');
//   }
// });
