import React from "react";
import { Container, Header, MyButton } from "./AppStyled";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

//tema personalizado
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themaConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
