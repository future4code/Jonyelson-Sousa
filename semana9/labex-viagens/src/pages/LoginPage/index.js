import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
      <label>
        Email:
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
      </label>
      <label>
        Senha:
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
      </label>
      <button onClick={login}>Fazer Login!</button>
    </>
  );
};

export default Page;
