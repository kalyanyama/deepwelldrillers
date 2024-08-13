import { Carousel } from "@mantine/carousel";
import {
  Container,
  Group,
  Paper,
  rem,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { CarouselSection } from "../../ContentProvider/ContentProvider";
import classes from "./List.module.css";

function Card({ image, title, category }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      data-aos="zoom-in"
    >
      <div>
        {/* <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title> */}
      </div>
      {/* <Button variant="white" color="dark">
        Read article
      </Button> */}
    </Paper>
  );
}
const Featured = () => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = CarouselSection.Data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  return (
    <Container my="xl" py="xl" mih={700}>
      <Group py="xl" my="xl" justify="center" align="center" ta={"center"}>
        <Title lts={1} fw={400}>
          {CarouselSection.title}
        </Title>
        <Text lts={1}>{CarouselSection.description}</Text>
      </Group>
      <Carousel
        slideSize={{ base: "100%", sm: "33.3%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        dragFree
      >
        {slides}
      </Carousel>
    </Container>
  );
};

export default Featured;
