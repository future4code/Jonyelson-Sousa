import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#18ffff",
    },
  },
});

export default theme;
