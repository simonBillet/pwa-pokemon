import React, {useState} from 'react';
import Header from "../components/Header";
import styled from "styled-components";
import SectionType from "../components/section/type/SectionType";
import { Loader } from '@mantine/core';

function Types() {
  const [loader, setLoader] = useState(true);
  const [response, setResponse] = useState({});

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResponse(data);
        setLoader(false);
      });
  }, []);

  const { count, results } = response;

  if (loader) return <Loader />;

  return (
    <>
      <Header />
      <h2>Liste des types de pokémon</h2>
      <div>
        <p>Il y a actuellement {count} types différents dans Pokémon toutes générations confondues.</p>
        <ListContainer>
          {
            results.map((element, i) => {
              if(i !== 18) {
                return <SectionType key={i} type={element}/>
              }
            })
          }
        </ListContainer>
      </div>
    </>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 5%;
  `;

export default Types;
