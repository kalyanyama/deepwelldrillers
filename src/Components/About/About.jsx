import {
  Anchor,
  Box,
  Container,
  Divider,
  List,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import Caption from "../Home/Caption/Caption";

const AboutPage = () => {
  const listData = [
    {
      points:
        "Government Approved professional borewell drilling contractors in Hyderabad with complete COVID safety measures and quick in action.",
    },
    {
      points: "Customer care service with consultation available.",
    },
    {
      points: "Affordable services if you are comparing to others.",
    },
    {
      points: "Best Borewell Quotation under your budget.",
    },

    {
      points:
        "All latest borewell drilling machine which capacity is much more for deep borewell digging.",
    },
    {
      points:
        "Experienced borewell drilling contractors team for all types of ground.",
    },
    {
      points:
        "Available machinery like Drilling & ROBO BORE for economical & closed area like busy street.",
    },
  ];

  const mappingListData = listData.map((list) => (
    <List.Item key={list.points} lh={1.4}>
      {list.points}
    </List.Item>
  ));
  return (
    <Container size={"md"} id="about" mih={600}>
      <TypographyStylesProvider px={"xs"}>
        <Box py="md">
          <Title lh={"sm"}>
            <Text
              // gradient={{ from: "red", to: "yellow", deg: 90 }}
              fw={500}
              inherit
              // variant="gradient"
            >
              DEEPWELL DRILLERS
            </Text>
          </Title>
          <Text> Borewell Services.</Text>
        </Box>
        <Text fw={500} size="xl">
          Deepwell Drillers – a leading borewell drilling company in Hyderabad,
          was started with the main goal of providing solutions to water
          scarcity to the people in and around Hyderabad.
        </Text>
        <Text fw={500} c={"gray.8"}>
          <q>
            Our Company, deepwell drillers, is a family run business that has
            been established for over 10 years and growing forever.Thus,
            Deepwell Drillers became the best borewell contractors for ground
            water borewell in Hyderabad, Telangana.
          </q>
        </Text>
        <Text fs={"italic"}>
          With the effectual guidance of Mr.Balu, our team of borewell experts
          and Professional Geologists have profound expertise in bore well
          drilling, borewell digging, advanced borehole technology. We have
          found best source of ground water with more than 4500+ borewell
          drilling points for customers in and around Hyderabad. We have gained
          complete customer satisfaction and appreciation from every customer as
          the best bore well company in Hyderabad for borewell digging.
        </Text>
        <Text>
          To Talk to the borewell expert and owner of the Deepwell Drillers
          company
          <br /> – Mr Balu, Call{" "}
          <Anchor href="tel:+919346405405" component="span" c={"blue"}>
            +91 9346405405
          </Anchor>
        </Text>
        <Text size="xl" fw={500}>
          Our Team of Borewell Experts at the best borewells drilling company –
          Deepwell Drillers
        </Text>
        <Text>
          The team of borewell experts in Deepwell Drillers can resolve every
          type of borewell drilling work. The borewell engineers who have
          profound knowledge in borewell drilling and borewell digging can drill
          borewell points in different soil, different seasons for bore well
          work and in every type of ground stratum successfully.
        </Text>
        <Text>
          The borewells drilling company has extensive experience and database
          covering this large land area in and around Hyderabad. Our team can
          provide well informed advice relating to any kind of borewell drilling
          services. All the team members working with Deepwell Drillers are
          well-driven, disciplined and motivated staffs working with excellent
          safety measures taking care of Client’s place.
        </Text>
        {/* <Stats /> */}

        <Text size="xl">Why you have to choose us ?</Text>

        <List
          spacing="sm"
          withPadding
          listStyleType="ordered"
          // center
          // icon={
          //   <ThemeIcon color="teal" size={24} radius="xl">
          //     <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
          //   </ThemeIcon>
          // }
        >
          {mappingListData}
        </List>
        <Caption/>
        {/* <Divider my="xl" />
        <Text size="xl">
          Deepwell Drillers uphold the highest standards of safety and
          preventative maintenance, which ensure that both our team and our
          drilling equipment operate at peak performance at all times.
        </Text> */}
      </TypographyStylesProvider>
    </Container>
  );
};

export default AboutPage;
