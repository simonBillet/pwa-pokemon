import React from 'react';
import {Card, Space, Skeleton, Group} from "@mantine/core";

function SectionPokemonLoader() {

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Group position="center">
          <Skeleton height={180} circle="xl" />
        </Group>
      </Card.Section>
      <Space h="xs" />
      <Group position="center">
        <Skeleton height={14} radius="xl" width="25%" />
        <Space w="xs" />
        <Skeleton height={14} radius="xl" width="25%" />
      </Group>
      <Space h="xs" />
      <Group position="center">
        <Skeleton height={14} radius="xl" width="50%" />
      </Group>
      <Space h="xs" />
      <Group position="center">
        <Skeleton height={8} radius="xl" width="80%" />
      </Group>
      <Space h="xs" />
      <Group position="center">
        <Skeleton height={8} radius="xl" width="80%" />
      </Group>

      <Space h="xs" />
      <Skeleton height={8} radius="xl" width="30%" />
      <Space h="xs" />
      <Skeleton height={8} radius="xl" />

      <Space h="xs" />
      <Skeleton height={8} radius="xl" width="30%" />
      <Space h="xs" />
      <Skeleton height={8} radius="xl" />

      <Space h="xs" />
      <Skeleton height={8} radius="xl" width="30%" />
      <Space h="xs" />
      <Skeleton height={8} radius="xl" />

      <Space h="xs" />
      <Skeleton height={8} radius="xl" width="30%" />
      <Space h="xs" />
      <Skeleton height={8} radius="xl" />

      <Space h="xs" />
      <Skeleton height={8} radius="xl" width="30%" />
      <Space h="xs" />
      <Skeleton height={8} radius="xl" />

      <Space h="xs" />
      <Skeleton height={8} radius="xl" width="30%" />
      <Space h="xs" />
      <Skeleton height={8} radius="xl" />

    </Card>
  );
}

export default SectionPokemonLoader;
