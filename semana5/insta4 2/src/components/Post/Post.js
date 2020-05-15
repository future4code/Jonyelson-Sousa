import React from 'react';//Biblioteca React
import './Post.css';//código css

//<import de componentes>
import { SecaoComentario } from '../SecaoComentario/SecaoComentario';
import { IconeComContador } from '../IconeComContador/IconeComContador';
import { IconeMarcaPaginas } from '../IconeMarcaPaginas/IconeMarcaPaginas';
//<Fim dos import de componentes>

//<import de icones>
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcaPaginasBranco from '../../img/bookmark_border-24px.svg'
import iconeMarcaPaginasPreto from '../../img/bookmark-24px.svg'
//< Fim import de icones>

class Post extends React.Component {//Classe Post herda de React.Component
  state = {//estado que inicia o metodo construtor
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcaPaginas: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if (this.state.curtido) {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  };

  onClickMarcaPaginas = () => {
    this.setState({
      marcaPaginas: !this.state.marcaPaginas
    })

  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida;//guarda as curtidas

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {// vai iniciar a aplicação com o icone na cor branca
      iconeCurtida = iconeCoracaoBranco
    };

    let iconePaginas;

    if (this.state.marcaPaginas) {
      iconePaginas = iconeMarcaPaginasPreto;
    } else {// vai iniciar a aplicação com o icone na cor branca
      iconePaginas = iconeMarcaPaginasBranco;
    };

    let componenteComentario;

    if (this.state.comentando) {// Se comentando =true input de comentarios ativados
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return (<div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeMarcaPaginas
          icone={iconePaginas}
          onClickMarcaPaginas={this.onClickMarcaPaginas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
    )
  }
}

export default Post;