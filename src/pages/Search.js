import React, {useRef, useState} from 'react';
import SectionPokemon from "./../components/section/pokemon/SectionPokemon";
import Header from "../components/Header";
import {Group, Input, Loader, Space, Button} from "@mantine/core";
import {IconSearch} from "@tabler/icons";

function Search() {
  const inputSearch = useRef(null);
  const [loader, setLoader] = useState(true);
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState(getRandomInt(904));
  const [idPokemonSelected, setIdPokemonSelected] = useState(searchPokemon);

  function getRandomInt(max) {
    return Math.floor((Math.random() * max + 1));
  }

  React.useEffect(() => {
    if (searchPokemon == null || searchPokemon === '') {
      setInvalidSearch(true);
      return;
    }
    fetch("https://pokeapi.co/api/v2/pokemon/" + searchPokemon)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        setInvalidSearch(true);
        return null;
      })
      .then((data) => {
        if (data != null) {
          setInvalidSearch(false);
          setIdPokemonSelected(data.id);
          setLoader(false);
        }
      });
  }, [searchPokemon]);

  const handleClick = () => {
    setSearchPokemon(inputSearch.current.value);
  };

  if (loader) return <Loader />;

  return (
    <>
      <Header />

      <Group position="center">
        <Input
          icon={<IconSearch />}
          ref={inputSearch}
          id="input-search"
          placeholder="Pikachu"
          radius="lg"
          size="md"
          invalid={invalidSearch}
        />
        <Button
          radius="lg"
          onClick={handleClick}
        >
          Rechercher
        </Button>
      </Group>

      <Space h="lg" />

      <SectionPokemon url={"https://pokeapi.co/api/v2/pokemon/" + idPokemonSelected}/>
    </>
  );
}

export default Search;
