import { Anchor, Group, HoverCard, Stack } from "@mantine/core";

const Navbar = () => {
  return (
    <Stack gap={"md"} p="xl">
      <Anchor href={"/"}>Home</Anchor>
      <Anchor href={"/about"}>About</Anchor>
      <HoverCard width={180} shadow="md">
        <HoverCard.Target>
          <Anchor>Services</Anchor>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Anchor href={"/services/4_drilling"}>4(1/2) drilling</Anchor>
            <Anchor href={"/services/6_drilling"}>6(1/2) drilling</Anchor>
            <Anchor href={"/services/robo_drilling"}>Robo drilling</Anchor>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>

      <Anchor href="/contact">Contact</Anchor>
    </Stack>
  );
};

export default Navbar;
