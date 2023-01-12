import React from 'react';
import {Image, Progress, Card, Text, Badge, Group, Space} from "@mantine/core";
import SectionPokemonLoader from "./SectionPokemonLoader";
import { IconHeart, IconHeartPlus } from "@tabler/icons";
import { addFavorite, removeFavorite, isFavorite} from "../../../services/Favorites";

function SectionPokemon({url}) {
  const [loader, setLoader] = React.useState(true);
  const [favorite, setFavorite] = React.useState(false);
  const [pokemon, setPokemon] = React.useState({});

  const addFav = () => {
    addFavorite(id);
    setFavorite(isFavorite(id));
  }

  const removeFav = () => {
    removeFavorite(id);
    setFavorite(isFavorite(id));
  }

  React.useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setPokemon(response);
        setFavorite(isFavorite(response.id));
        setLoader(false);
      });
  }, [url]);

  if (loader) return <SectionPokemonLoader />;

  const Heart = () => {
    return favorite
      ? <IconHeart color={"red"} onClick={removeFav}/>
      : <IconHeartPlus onClick={addFav}/>
  }

  const {name, id, height, weight, types, stats, sprites} = pokemon;

  return (
    <Card key={name} shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Group position="center">
          <Image
            src={ sprites.front_default }
            height={160}
            width={160}
            alt="Norway"
          />
        </Group>
      </Card.Section>
      <Space h="xs" />
      <Text fz="xl" fw={700} ta="center">{ name } <Heart/></Text>
      <Space h="xs" />
      <Group position="center">
        {
          types.map((element, i) => {
            return <Badge key={i} variant="light">{element.type.name}</Badge>
          })
        }
      </Group>
      <Space h="xs" />
      <Text ta="center">Taille : { height }</Text>
      <Text ta="center">Poids : { weight }</Text>
      {
        stats.map((element, i) => {
          let min = 1;
          let max = 200;
          let color = "red";

          if (element.stat.name === 'hp') {
            min = 1;
            max = 255;
            color = "green";
          } else if (element.stat.name === 'attack') {
            min = 5;
            max = 190;
            color = "red";
          } else if (element.stat.name === 'defense') {
            min = 5;
            max = 250;
            color = "indigo";
          } else if (element.stat.name === 'special-attack') {
            min = 10;
            max = 194;
            color = "pink";
          } else if (element.stat.name === 'special-defense') {
            min = 20;
            max = 250;
            color = "violet";
          } else if (element.stat.name === 'speed') {
            min = 5;
            max = 200;
            color = "yellow";
          }

          return <>
            <Space h="xs" />
            <Text>{ element.stat.name } : { element.base_stat }</Text>
            <Progress
              key={i}
              value={(element.base_stat - min) / (max - min) * 100}
              color={color}
            />
          </>
        })
      }
    </Card>
  );
}

export default SectionPokemon;
