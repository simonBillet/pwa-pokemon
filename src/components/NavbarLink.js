import React, { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, Avatar } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,0.1
      ),
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background, 0.15
      ),
    },
  },
}));

function NavbarLink({ icon: Icon, label, path, active, onClick }) {
  const { classes, cx } = useStyles(undefined, undefined);
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <a href={path}>
        <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
          <Icon stroke={1.5} />
        </UnstyledButton>
      </a>
    </Tooltip>
  );
}

export function NavbarMinimalColored({links}) {
  const [active, setActive] = useState();

  React.useEffect(() => (
    links.map(function(data, index) {
      if (data.path === window.location.pathname) {
        setActive(index);
      }
    })
  ),[links]);

  const navbarLinks = links.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      path={link.path}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar
      className="navbarLink"
      height="100%"
      width={{ base: 80 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
      })}
    >
      <Center>
        <Avatar src="/logo-pokemobile.png" alt="Logo pokemobile" size={50}/>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {navbarLinks}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
