import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  width: 500px;
  height: 100%;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 50px;
  width: 100%;
  background-color: red;
`;

export const Main = styled.main`
  height: 50px;
  width: 100%;
  background-color: green;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: blue;
`;
