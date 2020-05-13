import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Thomas Muller'}
          fotoUsuario={'https://www.deutschland.de/sites/default/files/styles/crop_page/public/media/image/2018-fif-world-cup-thomas-mueller.jpg?itok=a4PpEkuu'}
          fotoPost={'https://jornaldebrasilia.com.br/wp-content/uploads/2020/04/Sem-T%C3%ADtulo-1-3.png'}
        />
        <Post
          nomeUsuario={'L10'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/1217276432734457856/jYnrBNFb_400x400.jpg'}
          fotoPost={'https://abrilveja.files.wordpress.com/2019/01/esporte-futebol-cristiano-ronaldo-20190116-001.jpg'}
        />
      </div>
    );
  }
}

export default App;
