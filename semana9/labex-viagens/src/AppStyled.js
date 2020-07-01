import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: write;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #18ffff;
  width: 350px;
  height: 50vh;
  border-radius: 5px;
  border: solid 1px #161f27;
  margin-top: 20px;
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: write;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161f27;
  width: 100%;
  height: 14vh;
`;

export const MyButton = styled(Button)`
  width: 200px;
`;

export const MyTextField = styled(TextField)`
  width: 300px;
`;
