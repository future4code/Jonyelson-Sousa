import React from 'react';
import './App.css';
import SessaoDadosPessoais from './components/CardGrande/SessaoDadosPessoais.js';
import SessaoExperienciasProfissionais from './components/CardGrande/SessaoExperienciasprofissionais';
import SessaoRedesSociais from './components/CardGrande/SessaoRedesSociais';

function App() {

  return (
    <div className="App">
      <SessaoDadosPessoais />
      <SessaoExperienciasProfissionais />
      <SessaoRedesSociais />
    </div >
  );
}

export default App;
