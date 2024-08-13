import emailjs from "@emailjs/browser";
import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  rem,
} from "@mantine/core";
import {
  IconAt,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { useState } from "react";
import classes from "./Contact.module.css";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

function ContactIcon({ icon: Icon, title, description, link, ...others }) {
  return (
    <div className={classes.wrapper_icons} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title_icons} href={link}>
          {title}
        </Text>
        <Anchor href={link} className={classes.description_icons}>
          {description}
        </Anchor>
      </div>
    </div>
  );
}
const MOCKDATA = [
  {
    title: "Email",
    description: "support@deepwelldrillers.com",
    link: "mailto:support@deepwelldrillers.com",
    icon: IconAt,
  },
  {
    title: "Phone",
    description: "+91 9346405405",
    link: "tel:+919346405405",
    icon: IconPhone,
  },
  {
    title: "Address",
    description: "Vanasthalipuram, Hayathnagar, Hyderabad 500070 Telangana",
    icon: IconMapPin,
  },
];
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({
    success: false,
    message: "",
    color: "",
  });
  // const icons = social.map((Icon, index) => (
  //   <ActionIcon
  //     key={index}
  //     size={28}
  //     className={classes.social}
  //     variant="transparent"
  //   >
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));

  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  const handleContactus = async (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_71700lh",
        "template_yq4w62t",
        {
          from_name: name,
          from_mobile: subject,
          from_email: email,
          message: message,
        },
        "2JJ_1EMG95tNtGVF2"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess({
            success: true,
            message:
              "Successfully received your mail, We will reach you out ! ASAP",
            color: "green",
          });
        },
        (error) => {
          setSuccess({
            success: false,
            message:
              "Having internal issues. Please be Patience" || error.message,
            color: "red",
          });
          setLoading(false);
        }
      );
  };

  return (
    <Container mih={700} py="xl">
      <Stack my={"auto"} gap={"xl"}>
        <Stack ta={"center"}>
          <Title fw={500}>Let's Discuss Your Needs</Title>
          <Text fz={"sm"} c={"dimmed"}>
            We're here to help you find the best solution. Reach out to us to
            start the conversation.
          </Text>
        </Stack>
        <Paper withBorder radius={"lg"}>
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <Paper radius={"lg"} className={classes.wrapper}>
              <Title className={classes.title}>Contact us</Title>
              <Text className={classes.description} mt="sm" mb={30}>
                Leave your email and we will get back to you within 24 hours
              </Text>

              <Stack>{items}</Stack>

              {/* <Group mt="xl">{icons}</Group> */}
            </Paper>
            <Stack my={"auto"} p="lg">
              <form onSubmit={handleContactus}>
                <Stack justify="center" p="lg">
                  <TextInput
                    label="Name"
                    placeholder="..."
                    required
                    onChange={(e) => setName(e.target.value)}
                  />{" "}
                  <TextInput
                    label="Email"
                    type="email"
                    placeholder="..."
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextInput
                    label="Subject"
                    placeholder="..."
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <Textarea
                    required
                    label="Your message"
                    placeholder="..."
                    rows={4}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                    {success.success && (
                      <Text ta={"center"} c={success.color}> {success.message}</Text>
                    )}
                  <Group justify="center">
                    <Button type="submit" loading={loading}>
                      Send message
                    </Button>
                  </Group>
                </Stack>
              </form>
            </Stack>
          </SimpleGrid>
        </Paper>
      </Stack>
    </Container>
  );
}
