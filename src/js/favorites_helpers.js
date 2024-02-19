const FAVORITES_KEY_LOCAL_STORAGE = 'ENERGY_FLOW_FAVORITES_KEY';

// Кнопка "Add to favorites"
export function getFavorites() {
  const favorites = window.localStorage.getItem(FAVORITES_KEY_LOCAL_STORAGE);
  return favorites && favorites !== 'undefined' ? JSON.parse(favorites) : [];
}

export function setFavorites(exercise) {
  const favorites = getFavorites();
  const updFavorites = favorites.length ? [...favorites, exercise] : [exercise];
  window.localStorage.setItem(
    FAVORITES_KEY_LOCAL_STORAGE,
    JSON.stringify(updFavorites)
  );
}

export function checkFavorites(id) {
  const favorites = getFavorites();
  return !!favorites.find(el => el._id === id);
}

export function deleteFavorites(id) {
  const favorites = getFavorites();
  const updFavorites = favorites.filter(el => el._id !== id);
  window.localStorage.setItem(
    FAVORITES_KEY_LOCAL_STORAGE,
    JSON.stringify(updFavorites)
  );
}
