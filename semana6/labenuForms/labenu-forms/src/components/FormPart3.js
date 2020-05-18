import React, { Component } from 'react';
import styled from 'styled-components';


export default class FormPart3 extends Component {
    render() {
        return (
            <>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que voçê não terminou um curso de graduação?</p>
                <input type='text'></input>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
            </>

        );
    };
};