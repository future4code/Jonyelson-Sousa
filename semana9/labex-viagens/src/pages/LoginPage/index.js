import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HttpsIcon from "@material-ui/icons/Https";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FormControl } from "@material-ui/core";
import axios from "axios";
import Header from "../../components/Header";
import {
  MyButton,
  MyTextField,
  ContainerForm,
  ContainerMain,
} from "../../AppStyled";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonyelson-mello";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/segredo");
    }
  }, [history]);

  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, loginBody);

      window.localStorage.setItem("token", response.data.token);

      // Caso queiram guardar outros dados, como o e-mail:
      // window.localStorage.setItem("email", response.data.user.email);

      alert("Eba! Agora você está logado(a)");
      history.push("/segredo");
    } catch (error) {
      console.log(error);
      alert("Epa! Infelizmente, algo deu errado, tente novamente.");
    }
  };
  return (
    <>
      <Header />
      <ContainerMain>
        <ContainerForm color="secondary">
          <FormControl margin="dense">
            <MyTextField
              required="true"
              variant="standard"
              label="Usuário"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <MyTextField
              variant="standard"
              label="Senha"
              required="true"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsIcon />
                  </InputAdornment>
                ),
              }}
            />
            <MyButton
              variant="contained"
              color="primary"
              size="medium"
              onClick={login}
              endIcon={<CheckCircleIcon> Quero Entrar</CheckCircleIcon>}
            >
              Quero Entrar
            </MyButton>
          </FormControl>
        </ContainerForm>
      </ContainerMain>
    </>
  );
};

export default Page;
