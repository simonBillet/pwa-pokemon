import React from 'react';
import { Image, Text } from '@mantine/core';

function SectionType({type}) {
  const {name} = type;

  return (
    <section>
      <Image height={100} width={100} src={"/types/" + name + ".png"} alt="Icone type"/>
      <Text ta="center">{name}</Text>
    </section>
  );
}

/**
 * <Button leftIcon={"/types/" + name + ".png"} variant="light">
 {name}
 </Button>
 */
export default SectionType;
