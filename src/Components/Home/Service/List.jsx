import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconSparkles } from "@tabler/icons-react";
import { ServicesSection } from "../../ContentProvider/ContentProvider";
import classes from "./List.module.css";

const ServicesList = () => {
  const theme = useMantineTheme();

  const mappingCards = ServicesSection.Data.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      data-aos="zoom-in"
      radius="md"
      component="a"
      href={feature.link}
      className={classes.card}
      padding="xl"
    >
      <IconSparkles
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.yellow[6]}
      />
      <Text fz="xl" fw={600} className={classes.cardTitle} mt="md">
        {feature.label}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm" lineClamp={5}>
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl" my="xl" mih={500}>
      <Stack gap={"xl"}>
        <Stack align="center" w={"100%"} data-aos="zoom-up">
          <Badge variant="filled">What we do</Badge>
          <Title order={2} className={classes.title} ta="center">
            {ServicesSection.title}
          </Title>
        </Stack>

        <Group my="auto">
          <SimpleGrid cols={{ base: 1, sm: ServicesSection.col }}>
            {mappingCards}
          </SimpleGrid>
        </Group>
        <Text c="dimmed" className={classes.description} ta="center">
          {ServicesSection.description}
        </Text>
      </Stack>
    </Container>
  );
};

export default ServicesList;
