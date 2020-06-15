import React, { Component } from "react";
import axios from "axios";

class ViewPlaylist extends Component {
  olaTeco = () => {
    console.log("teco!!");
  };

  viewPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "jonyelson-lopes-sousa",
          },
        }
      )
      .then((response) => {
        console.log(response.data.result.list);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  render() {
    return <div>{this.viewPlaylist()}</div>;
  }
}

export default ViewPlaylist;
