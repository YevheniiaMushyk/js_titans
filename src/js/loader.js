// отримуємо доступ до елементу
const loader = document.getElementById('loader');

//функія для активації loader
function activeLoader(loader) {
  loader.classList.remove('loader_hidden');
}

//функція для деактивації loader
function disactiveLoader(loader) {
  loader.classList.add('loader_hidden');
}

// список експортованих змінних
export { loader, activeLoader, disactiveLoader };
