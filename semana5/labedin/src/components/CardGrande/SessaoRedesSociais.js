import React from 'react';
import ImagemButton from '../ImagemButton/ImagemButton';

function SessaoRedesSociais() {

    return (
        <div className="page-section-container">
            <h2>Minhas redes sociais</h2>
            <ImagemButton
                imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
                texto="Facebook"
            />

            <ImagemButton
                imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
                texto="Twitter"
            />
        </div>
    )
};

export default SessaoRedesSociais;