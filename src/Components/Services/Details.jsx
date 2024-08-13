import { Container, Group, Stack, Table, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVICE_DESCRIPTION } from "../ContentProvider/ContentProvider";

const ServiceDetails = () => {
  const [currentDescription, setCurrentDescription] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    const checkWhichOne =
      type === "4_drilling" ? 0 : type === "6_drilling" ? 1 : 2;
    setCurrentDescription(checkWhichOne);
  }, [type]);

  const mappingDescripitonComeTitle = SERVICE_DESCRIPTION[
    currentDescription
  ]?.service.map((item, index) => (
    <Group key={index}>
      <Title fw={400}>{item.title}</Title>
      <Text>{item.description}</Text>
    </Group>
  ));
  return (
    <Container mih={700} py="xl" size={"md"}>
      <Stack gap={"lg"}p="md">
        {mappingDescripitonComeTitle}
        <Group my="xl" justify="center">
          <Table
            data={SERVICE_DESCRIPTION[currentDescription]?.table}
            horizontalSpacing="xl"
            verticalSpacing="sm"
            striped
          />
        </Group>
      </Stack>
    </Container>
  );
};

export default ServiceDetails;
