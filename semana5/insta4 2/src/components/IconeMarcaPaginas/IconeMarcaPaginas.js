import React from 'react'
import './IconeMarcaPaginas.css'

export function IconeMarcaPaginas(props) {
    return <div className={'icon-container'}>
        <img alt={'Icone'} src={props.icone} onClick={props.onClickMarcaPaginas} />
    </div>
}
