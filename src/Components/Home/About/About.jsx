import {
  Container,
  Flex,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import { DescriptionSection } from "../../ContentProvider/ContentProvider";
import classes from "./About.module.css";

const AboutHome = () => {
  const items = DescriptionSection.Data.map((feature) => (
    <div key={feature.title} data-aos="fade-up">
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm" lineClamp={3}>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container h={"auto"}>
        <SimpleGrid spacing={"xl"}>
          <Group gap={0} my="auto" py="xl" data-aos="fade-down">
            <Title className={classes.title} order={2}>
              {DescriptionSection.title}
            </Title>
            <Text c="dimmed">{DescriptionSection.description}</Text>
          </Group>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </SimpleGrid>
    </Container>
  );
};

export default AboutHome;
