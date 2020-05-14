import React from 'react';
import CardGrande from './CardGrande';

function SessaoExperienciasProfissionais() {

    return (
        <div className="page-section-container">
            <h2>Experiências profissionais</h2>
            <CardGrande
                imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
                nome="Labenu"
                descricao="Formando desenvolvedores para o mercado de trabalho!"
            />

            <CardGrande
                imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
                nome="NASA"
                descricao="Apontando defeitos."
            />
        </div>

    )
};

export default SessaoExperienciasProfissionais;