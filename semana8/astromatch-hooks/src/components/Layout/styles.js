import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  width: 400px;
  height: 96%;
  border: 2px solid #010400;
  border-radius: 15px;
  margin: 2px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #f0d3f7;
`;

export const Header = styled.header`
  height: 50px;
  width: 100%;
`;

export const Main = styled.main`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
`;
