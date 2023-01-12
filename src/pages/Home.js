import React from 'react';
import Header from "../components/Header";
import {Group, Loader, Pagination} from "@mantine/core";
import ListPokemon from "../components/list/ListPokemon";

function Home() {
  let count = 1154;
  const [loader, setLoader] = React.useState(true);
  const [pagination, setPagination] = React.useState(1);
  const [listUrlPokemon, setListUrlPokemon] = React.useState([]);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=" + (pagination - 1) * 20)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let newListUrlPokemon = [];
        data.results.forEach(pokemon => {
          newListUrlPokemon.push(pokemon.url);
        });
        setListUrlPokemon(newListUrlPokemon);
        setLoader(false);
      });
  }, [pagination]);

  if (loader) return <Loader />;

  return (
    <>
      <Header />

      <Group position="center">
        <Pagination page={pagination} onChange={setPagination} siblings={1} total={count / 20} />
      </Group>

      <ListPokemon pokemonsUrl={listUrlPokemon} />

      <Group position="center">
        <Pagination page={pagination} onChange={setPagination} siblings={1} total={count / 20} />
      </Group>
    </>
  );
}

export default Home;
