import React from 'react';


function QuestionOptions(props) {
    return (
        <>
            <p>{props.pergunta}</p>
            <select>
                {props.options.map(opcao => {
                    return <option>{opcao} </option>
                })}
            </select>
        </>
    );
}

export default QuestionOptions;