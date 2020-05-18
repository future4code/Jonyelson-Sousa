import React, { Component } from 'react';
import styled from 'styled-components';

export default class FormPart1 extends Component {
    render() {

        return (
            <>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual seu nome?</p>
                <input type='text'></input>
                <p>2. Qual sua idade?</p>
                <input type='number'></input>
                <p>3. Qual seu email?</p>
                <input type='email'></input>
                <p>4. Qual sua escolaridade?</p>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </>

        );
    };
};