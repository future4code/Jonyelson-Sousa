import React from "react";
import { Container, Header, MyButton } from "./AppStyled";
import DeleteIcon from "@material-ui/icons/Delete";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ButtonLogout from "./components/ButtonLogout";
import { Icon, IconButton } from "@material-ui/core";
//tema personalizado
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themaConfig";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <Header>
            <ButtonLogout />
          </Header>
          <MyButton
            color="secondary"
            variant="contained"
            disableElevation
            startIcon={<DeleteIcon color="primary" />}
          >
            este é um botão
          </MyButton>
          <IconButton aria-label="delete">
            <DeleteIcon color="primary" />
          </IconButton>
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
