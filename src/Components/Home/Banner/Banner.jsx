import {
  Badge,
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { DescriptionSection } from "../../ContentProvider/ContentProvider";

const Banner = () => {
  const PRIMARY_COL_HEIGHT = rem(500);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
    <Container my="xl" py="xl" mih={700} size={"xl"}>
      <SimpleGrid my={"auto"}>
        <Stack my="auto" data-aos="fade-up">
          <Badge size="lg">Featured</Badge>
          <Title fw={500}>{DescriptionSection.title}</Title>
          <Text c="dimmed">{DescriptionSection.description}</Text>
        </Stack>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Paper>
            <Image src={"/assets/banner.jpeg"} data-aos="zoom-in" h={PRIMARY_COL_HEIGHT} />
          </Paper>
          <Grid gutter={"md"}>
            <Grid.Col span={12}>
              <Paper>
                <Image src={"/assets/banner3.jpeg"} data-aos="zoom-in" h={SECONDARY_COL_HEIGHT} />
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper>
                <Image src={"/assets/banner4.jpeg"} data-aos="zoom-in" h={SECONDARY_COL_HEIGHT} />
              </Paper>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
};

export default Banner;
