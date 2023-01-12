/*mport React from 'react';

const FavoritePokemonContext = React.createContext();

const FavoritePokemonProvider = ({ children }) => {
  const [listPokemon, setListPokemon] = React.useState([]);

  const addFavorite = (pokemonId) => {
    setListPokemon(listPokemon => [...listPokemon, pokemonId]);
  }

  const removeFavorite = (pokemonId) => {
    let newList = listPokemon.filter(id => {
      return (id !== pokemonId);
    });
    setListPokemon(newList);
  }

  const isFavorite = (pokemonId) => {
    listPokemon.map(id => {
      if (id === pokemonId) {
        return true;
      }
    });
    return false;
  }

  const getFavoriteNumber = () => {
    return listPokemon.length;
  }

  return (
    <FavoritePokemonContext.Provider value={{ ...listPokemon, addFavorite, removeFavorite, isFavorite, getFavoriteNumber }}>
      { children }
    </FavoritePokemonContext.Provider>
  )
}

export { FavoritePokemonProvider, FavoritePokemonContext as default };
*/
