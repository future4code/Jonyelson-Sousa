import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

// estilização dos componentes

const CriarPost = styled.div`
background-color: #BDBDBD;
margin: 10px;
height: 30vh;
display: flex;
flex-direction: column;
`

class App extends React.Component {

  // Inicializando o estado
  state = {
    //lista de posts
    posts: [
      //os objetos abaixos representram uma post
      // três propriedades nomeUsuario, fotoUsuario e fotoPost
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "Thomas Muller",
        fotoUsuario: "https://www.deutschland.de/sites/default/files/styles/crop_page/public/media/image/2018-fif-world-cup-thomas-mueller.jpg?itok=a4PpEkuu",
        fotoPost: "https://jornaldebrasilia.com.br/wp-content/uploads/2020/04/Sem-T%C3%ADtulo-1-3.png"
      },

      {
        nomeUsuario: "L10",
        fotoUsuario: "https://pbs.twimg.com/profile_images/1217276432734457856/jYnrBNFb_400x400.jpg",
        fotoPost: "https://abrilveja.files.wordpress.com/2019/01/esporte-futebol-cristiano-ronaldo-20190116-001.jpg"
      }
    ]
  };

  render() {

    const listaComponentesPosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <div>
        <CriarPost>
          <input placeholder="Nome do Usuario"></input>
          <input placeholder="Foto do Usuario"></input>
          <input placeholder="Foto do Post"></input>
          <button>Postar</button>
        </CriarPost>
        <div className={'post-container'}>
          {listaComponentesPosts}
        </div>
      </div>
    );
  }
}

export default App;
