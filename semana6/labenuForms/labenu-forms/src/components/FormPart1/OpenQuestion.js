import React from 'react';
import styled from 'styled-components';

function OpenQuestion(props) {
    return (
        <>
            <p>{props.pergunta}</p>
            <input type={props.type}></input>
        </>
    );

}

export default OpenQuestion;