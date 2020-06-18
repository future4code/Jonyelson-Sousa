import React from "react";

import { Grid, Header, Footer, Main } from "./styles";

function Layout() {
  return (
    <Grid>
      <Header>
        <p>Sou o cabeçalho</p>
      </Header>
      <Main>
        <p>teco</p>
      </Main>
      <Footer>
        <p>Sou o rodapé</p>
      </Footer>
    </Grid>
  );
}

export default Layout;
