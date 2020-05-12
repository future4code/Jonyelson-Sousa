import React from 'react';
import CardGrande from './CardGrande';
import ImagemButton from '../ImagemButton/ImagemButton';
import fotoPerfil from '../../imagen/perfil_lin.jpeg'

function SessaoDadosPessoais() {

    return (
        <div className="page-section-container">
            <h2>Dados pessoais</h2>

            <CardGrande
                imagem={fotoPerfil}
                nome="Astrodev"
                descricao="Oi, eu sou o Jonyelson Lopes. Sou o aluno da Labenu. Gosto muito de programação, ja tenho formações tecnologicas mais sempre estou aperfeiçoando meus conhecimentos."
            />

            <ImagemButton
                imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
                texto="Ver mais"
            />
        </div>
    )

};

export default SessaoDadosPessoais;