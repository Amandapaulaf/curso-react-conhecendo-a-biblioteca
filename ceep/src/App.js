
import { Component } from 'react';
import "./App.css";
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

class App extends Component {
  constructor(){
    super();
    this.state={
      notas: []
    };

  }
  criarNota(titulo,texto){
    const novaNota= {titulo,texto};
    const novoArrayDeNotas= [...this.state.notas, novaNota];
    const novoEstado= {
      notas: novoArrayDeNotas
    };
    this.setState(novoEstado);

  }

  render(){
  return (
    <section className="conteudo">
    <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
    <ListaDeNotas notas={this.state.notas}/> 
   
    </section>
  );
  }
}

export default App;
