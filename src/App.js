import React, {Component} from 'react'

class App extends Component{

  number = (Doblo) =>{
    return Doblo * 100
  }

  mensagem = () =>{
    return(
      <div>
        <h1> ARROW FUNCTION</h1>
        <h2>hello I'm an arrow function and I'm on the screen </h2>

      </div>
    )
  }
  render(){
    return(
      <div>
        {this.mensagem()}
        {this.number(100)}
      </div>
    )
  }
}

export default App;