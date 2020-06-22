import React from "react";
import ProfileChoose from "../ProfileChoose";
import ChoosePerson from "../ChoosePerson";

import { FlexContainer, Header, Footer, Main } from "./styles";

function Layout() {
  return (
    <FlexContainer>
      <Header>
        <h1>AstroMatch</h1>
      </Header>
      <Main>
        <ProfileChoose />
      </Main>
      <Footer>
        <ChoosePerson />
      </Footer>
    </FlexContainer>
  );
}

export default Layout;
