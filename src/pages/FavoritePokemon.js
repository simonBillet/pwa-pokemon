import React from 'react';
import Header from "../components/Header";
import { fetchFavorites } from "../services/Favorites";
import ListPokemon from "../components/list/ListPokemon";

function FavoritePokemon() {
  const listIdFavoris = fetchFavorites();
  return (
    <>
      <Header />

      <ListPokemon pokemonsId={listIdFavoris} />
    </>
  );
}

export default FavoritePokemon;
