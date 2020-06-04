import React from "react";
import axios from "axios";

export default class UserRegistration extends React.Component {
  //initializing state
  state = {
    name: "",
    email: "",
  };

  //input methods
  handleNameChange = (event) => {
    const newNameValue = event.target.value;
    this.setState({ name: newNameValue });
  };

  handleEmailChange = (event) => {
    const newEmailValue = event.target.value;
    this.setState({ email: newEmailValue });
  };

  handleCreateUser = () => {
    const axiosConfig = {
      headers: {
        Authorization: "jonyelson-lopes-mello",
      },
    };

    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
      .catch((error) => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <h1>Cadastro Usuario</h1>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="nome"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <button onClick={this.handleCreateUser}>Criar Usuário</button>
      </>
    );
  }
}
