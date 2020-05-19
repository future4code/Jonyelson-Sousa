import React, { Component } from 'react';
import OpenQuestion from './OpenQuestion';
import QuestionOptions from './QuestionOptions';

export default class FormPart1 extends Component {


    render() {

        return (
            <>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <OpenQuestion pergunta={'1.Qual o seu nome?'} type={'text'} />
                <OpenQuestion pergunta={'2. Qual sua idade?'} type={'number'} />
                <OpenQuestion pergunta={'3. Qual seu email?'} type={'email'} />
                <QuestionOptions pergunta={'4.Qual sua escolaridade?'}

                    options={[
                        'Ensino Médio Incompleto ',
                        'Ensino Médio Completo',
                        'Ensino Superior Incompleto',
                        'Ensino Superior Completo'
                    ]}
                />

            </>

        );
    };
};