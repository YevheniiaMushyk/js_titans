// отримуємо доступ до елементу
const loader = document.getElementById('loader');

//функія для активації loader
function activeLoader(loader) {
  loader.style.display = 'block';
}

//функція для деактивації loader
function disactiveLoader(loader) {
  loader.style.display = 'none';
}

// список експортованих змінних
export { loader, activeLoader, disactiveLoader };
