import { Burger, Center, Container, Group, Menu, Title } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: "Home" },
  {
    link: "#1",
    label: "Services",
    links: [
      { link: "/services/4_drilling", label: "4(1/2) drilling" },
      { link: "/services/6_drilling", label: "6(1/2) drilling" },
      { link: "/services/robo_drilling", label: "Robo drilling" },
    ],
  },
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact" },
];
const Header = ({ opened, toggle }) => {
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component="a" href={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <Container h={"100%"}>
      <div className={classes.inner}>
        <Title order={3}> DeepWellDrillers</Title>
        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
      </div>
    </Container>
  );
};

export default Header;
