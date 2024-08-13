import {
  Anchor,
  Center,
  Container,
  Grid,
  Image,
  SimpleGrid,
  Stack,
  createTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "dark",
  shadows: "md",
  components: {
    Container: Container.extend({
      defaultProps: {
        size: "lg",
        display: "flex",
        componant: Center,
      },
    }),
    Center: Center.extend({
      defaultProps: {
        h: "100%",
        w: "100%",
      },
    }),
    Grid: Grid.extend({
      defaultProps: {
        h: "100%",
        w: "100%",
      },
    }),
    SimpleGrid: SimpleGrid.extend({
      defaultProps: {
        cols: { base: 1, sm: 2 },
        h: "100%",
        w: "100%",
      },
    }),
    Image: Image.extend({
      defaultProps: {
        fit: "cover",
        radius: "md",
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "never",
        componant: Link,
        c: "",
      },
    }),
    GridCol: Grid.Col.extend({
      defaultProps: {
        span: { base: 12, sm: 6 },
        h: "100%",
        w: "100%",
      },
    }),
  },
});
