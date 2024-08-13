import { Box, Button, Container, Group, Overlay, Stack, Text, Title } from "@mantine/core";
import { HeroSection } from "../../ContentProvider/ContentProvider";
import classes from "./Hero.module.css";

const Hero = ({ title, description }) => {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="lg" mih={750}>
        <Stack gap={"xl"}>
          <Box>
            <Title className={classes.title}>
              {" "}
              Unlock Sustainable{" "}
              <span className={classes.highlight}>Water Solutions</span> - with
              Expert{" "}
              <span className={classes.highlight}> Deepwell Drillers</span>{" "}
              Borewell Services
            </Title>
            <Text className={classes.description} size="xl" mt="xl">
              {HeroSection.description}
            </Text>
          </Box>

          <Group>
            <Button
              variant="gradient"
              size="lg"
              radius="md"
              className={classes.control}
            >
              Let's get started
            </Button>{" "}
            <Button
              variant="outline"
              color="white"
              size="lg"
              radius="md"
              component="a"
              href="/contact"
              className={classes.control}
            >
              Contact us
            </Button>
          </Group>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
