import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutPage from "./Components/About/About";
import AppShellProvider from "./Components/Appshell/Appshell";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import ServiceDetails from "./Components/Services/Details";
import { theme } from "./default.styles";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/services/:type",
      element: <ServiceDetails />,
    },
  ]);
  return (
    <>
      <MantineProvider theme={theme}>
        <AppShellProvider>
          <RouterProvider router={router}></RouterProvider>
        </AppShellProvider>
      </MantineProvider>
    </>
  );
}

export default App;
