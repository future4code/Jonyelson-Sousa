import React from 'react';
import FormPart1 from './components/FormPart1';
import FormPart2 from './components/FormPart2';
import FormPart3 from './components/FormPart3';
import FormConclusion from './components/FormConclusion';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
/*text-align:center;*/
padding: 10px;
flex-direction: column;
`


class App extends React.Component {

  state = {
    form: 1
  }

  proximoForm = () => {
    this.setState({ form: this.state.form + 1 })
  }

  botaoForm = () => {
    return (this.state.form <= 3 ? <button onClick={this.proximoForm}>Próxima etapa</button> : <p></p>)

  }

  render() {

    const renderizaForms = () => {
      switch (this.state.form) {
        case 1:
          return <FormPart1 />;
        case 2:
          return <FormPart2 />;
        case 3:
          return <FormPart3 />;
        default:
          return;
      }
    }

    return (
      <Container>
        {renderizaForms()}
        {this.botaoForm()}
      </Container>
    );
  };

};

export default App;
