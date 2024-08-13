import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

const AppShellProvider = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 80, background: "transparent", offset: true }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Helmet>
          <title>
            Deepwell Drillers – a leading borewell drilling company in
            Hyderabad, was started with the main goal of providing solutions to
            water scarcity to the people in and around Hyderabad.
          </title>
          <meta
            name="description"
            content="Deep Well Drillers provides reliable well drilling services. We specialize in deep well drilling for residential, commercial, and agricultural applications. Contact us for expert well drilling solutions."
          />
          <meta
            name="keywords"
            content="deep well drillers, well drilling services, deep well drilling, well drilling company, residential well drilling, commercial well drilling, agricultural well drilling, deepwell , deepwell drillers, borewell services, borewell services hyderabad, borewell services, 4 1/2 bore, 6 1/2 bore, robo bore, services"
          />
          <meta name="author" content="Deepwell Drillers" />
          <link rel="canonical" href="https://www.deepwelldrillers.com" />
        </Helmet>

        {children}
        <Footer/>
      </AppShell.Main>
    </AppShell>
  );
};

export default AppShellProvider;
