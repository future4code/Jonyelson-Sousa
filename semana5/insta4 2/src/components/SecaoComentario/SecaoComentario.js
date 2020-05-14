import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorInput: "",
	}
	onChangeComentario = event => {
		const novoValorInput = event.target.value;
		this.setState({
			valorInput: novoValorInput
		});
		console.log(this.state.valorInput);
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorInput}
				onChange={this.onChangeComentario}
			/>

			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
