import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: write;
`;

export const Header = styled.header`
  display: flex;
  background-color: #136713;
  width: 100%;
  height: 14vh;
`;

export const MyButton = styled(Button)`
  width: 200px;
`;
