import React from 'react';
import styled from "styled-components";
import SectionPokemon from "../section/pokemon/SectionPokemon";

function ListPokemon({pokemonsId, pokemonsUrl}) {
  if (pokemonsId) {
    return (
      <ListContainer>
        {
          pokemonsId.map(id => (
            <SectionPokemon url={"https://pokeapi.co/api/v2/pokemon/" + id} key={id}/>
          ))
        }
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      {
        pokemonsUrl.map(url => (
          <SectionPokemon url={url} key={url}/>
        ))
      }
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
  gap: 2rem;
  padding: 1rem 4rem;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 1em 0;
  }
  `;

export default ListPokemon;
