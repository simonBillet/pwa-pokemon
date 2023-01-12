import React from 'react';
import { Anchor, Group } from '@mantine/core';

export function NavbarBottom({links}) {
  const navbarBottoms = links.map((link) => (
    <Anchor
      className="anchor"
      color="dimmed"
      key={link.label}
      href={link.path}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
      <Group className="navbarBottom" position="center" grow>{navbarBottoms}</Group>
  );
}
