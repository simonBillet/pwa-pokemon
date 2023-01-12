
const FAVORITES_KEY = "myFavorites";
let myFavorites = [];

let dataFavorites = window.localStorage.getItem(FAVORITES_KEY);
if (dataFavorites) {
  myFavorites = JSON.parse(dataFavorites);
}

// ----------------- FUNCTION ----------------- //
/**
 * Sauvegarde les favoris dans le localStorage
 */
function saveFavorites() {
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(myFavorites));
}

/**
 * Supprime toutes les données du localStorage
 */
function clearFavorites() {
  window.localStorage.clear();
  myFavorites = [];
}

/**
 * Retourne la liste des ID des pokémons favoris
 * @returns {[]}
 */
function fetchFavorites() {
  return myFavorites;
}

/**
 * Vérifie si le pokémon est bien un favoris
 * @param pokemonId Id du pokémon à vérifier
 * @returns {boolean}
 */
function isFavorite(pokemonId) {
  return myFavorites.includes(pokemonId);
}

/**
 * Ajout d'un pokémon dans les favoris
 * @param pokemonId Id du pokémon à ajouter
 */
function addFavorite(pokemonId) {
  myFavorites.push(pokemonId);
  saveFavorites();
}

/**
 * Suppression d'un pokémon dans les favoris
 * @param pokemonId Id du pokémon à supprimer
 */
function removeFavorite(pokemonId) {
  myFavorites = myFavorites.filter(id => {
    return (id !== pokemonId);
  });
  saveFavorites();
}

export {
  saveFavorites,
  clearFavorites,
  fetchFavorites,
  isFavorite,
  addFavorite,
  removeFavorite,
};
