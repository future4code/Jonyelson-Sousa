import React, { Component } from "react";
import addPlaylist from "./assets/add_playlist.svg";
import axios from "axios";

class AddPlaylist extends Component {
  state = {
    newPlaylistValue: "",
  };

  createPlaylist = () => {
    const body = {
      name: this.state.newPlaylistValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "jonyelson-lopes-sousa",
          },
        }
      )
      .then((response) => {
        alert("Playlist adicionada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ newPlaylistValue: "" });
  };

  handleNameChange = (event) => {
    this.setState({ newPlaylistValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="nome da playlist"
          onChange={this.handleNameChange}
          value={this.state.newPlaylistValue}
        ></input>
        <button onClick={this.createPlaylist}>
          Adicionar playlist
          <img src={addPlaylist} alt="icone mais"></img>
        </button>
      </div>
    );
  }
}

export default AddPlaylist;
