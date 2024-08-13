import { Button, Group, Stack, Text, Title } from "@mantine/core";

const Caption = () => {
  return (
    <Stack
      justify="cente"
      align="center"
      p="lg"
      data-aos="flip-up"
      ta={"center"}
    >
      <Title order={2} fw={500}>
        Let's Discuss Your Needs
      </Title>
      <Text fz={"sm"} c={"dimmed"}>
        We're here to help you find the best solution. Reach out to us to start
        the conversation.
      </Text>
      <Group>
        <Button size="lg" component="a" c="white" href="/contact">
          Get in Touch
        </Button>
      </Group>
    </Stack>
  );
};

export default Caption;
