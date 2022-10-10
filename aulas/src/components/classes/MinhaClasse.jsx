import { Component } from 'react'

class MinhaClasse extends Component {
  render() {

    // Para criar funções não usa a palavra function
     
    return (
      <div>
        {/* Sempre usa a palavra this */}
        {this.props.nome}
      </div>
    )
  }
}

export default MinhaClasse