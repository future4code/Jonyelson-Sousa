import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		input: '',

	}

	onChangeComentario(event) {
		const novoValor = event.target.value;
		this.setState({ input: novoValor });

	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.input}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
