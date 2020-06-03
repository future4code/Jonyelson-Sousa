import React from "react";
import axios from "axios";
import styled from "styled-components";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "jonyelson-lopes-mello",
  },
};

export default class UserList extends React.Component {
  //initializing state
  state = {
    usersList: [],
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  fetchUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      });
  };

  handleUserDeletion = (userId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axiosConfig
      )
      .then(() => {
        alert("Usuário apagado com sucesso!");
        this.fetchUsersList();
      })
      .catch((e) => {
        alert("ERRO AO APAGAR USUARIO");
      });
  };
  render() {
    return (
      <>
        <h1>Lista de Usuarios</h1>
        <ul>
          {this.state.usersList.length === 0 && <div>Carregando...</div>}
          {this.state.usersList.map((user) => {
            return (
              <li>
                {user.name}
                <DeleteButton onClick={() => this.handleUserDeletion(user.id)}>
                  X
                </DeleteButton>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
