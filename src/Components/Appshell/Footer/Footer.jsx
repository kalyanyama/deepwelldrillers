import { Container, Text } from "@mantine/core";
import classes from "./Footer.module.css";

const data = [
  {
    title: "Actions",
    links: [
      { link: "mailto:support@deepwelldrillers.com", label: "Email us" },
      { link: "tel:+919346405405", label: "Call now" },
    ],
  },
  {
    title: "External services",
    links: [
      { label: "Want website ?", link: "https://www.grwo.in/" },
      { label: "Search jobs.", link: "https://www.jobskadda.com/" },
      { label: "Book a party.", link: "https://www.magicblooms.in/" },
    ],
  },
];

export function Footer() {
  const date = new Date();
  const currentyear = date.getFullYear();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
 
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          DeepWellDrillers
          <Text size="xs" c="dimmed" className={classes.description}>
            Borewell services
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} ta={"center"}>
        <Text c="dimmed" size="sm">
          © {currentyear} deepwelldrillers.com
        </Text>
      </Container>
    </footer>
  );
}
