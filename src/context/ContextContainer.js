import React from 'react';
import {FavoritePokemonProvider} from "./ContextFavoritePokemon";

function ContextContainer({ children }) {
  return(
    <FavoritePokemonProvider>
      { children }
    </FavoritePokemonProvider>
  )
}

export default ContextContainer;
