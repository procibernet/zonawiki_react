import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      check: false
    }
  }

  sayHi = () => {
    if(this.state.check){
      alert("Holi  " + this.state.name)
    } else {
      alert("Acepta primero")
    }
  }

  updateName = (event) => { this.setState({ name: event.target.value }) }

  updateCheck = (event) => { this.setState({ check: event.target.checked }) }

  render() {
    return (
      <div>
        <h1>Hola ZonaWiki</h1>
        <input type="text" value={this.state.name} onChange={this.updateName}/>
        <div>
          <label>
            <input type="checkbox" checked={this.state.ceck} onClick={this.updateCheck}/>
             Acepto
          </label>
        </div>
        <button onClick={this.sayHi}>Holiiiii</button>
      </div>
    );
  }
}

export default Form;
