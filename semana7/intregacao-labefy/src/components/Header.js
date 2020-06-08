import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: blue;
  height: 10vh;
  ul {
    li {
      :hover {
        cursor: pointer;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <ul>
        <li
          onClick={(props) => {
            return props.olaTeco;
          }}
        >
          Minhas playlists
        </li>
        <li></li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
