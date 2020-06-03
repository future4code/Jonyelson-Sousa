import React from "react";
import UserRegistration from "./components/UserRegistration";
import UserList from "./components/UserList";

class App extends React.Component {
  state = {
    rendersScren: true,
  };

  changeScreen = () => {
    this.setState({ rendersScren: !this.state.rendersScren });
  };

  render() {
    if (this.state.rendersScren === true) {
      return (
        <div>
          <button onClick={this.changeScreen}>Mostra Usuarios</button>
          <UserRegistration />
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.changeScreen}>
            volta para tela de cadastro
          </button>
          <UserList />
        </div>
      );
    }
  }
}

export default App;
