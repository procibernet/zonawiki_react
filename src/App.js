import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  onClick(e) {
      this.setState({
          count: this.state.count + 1
      });
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={this.onClick.bind(this)}>Incrementa</button>
      </div>
    );
  }
}

export default App;

import React, { Fragment, useState } from 'react';

export const App = () => {

  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <h2>{count}</h2>
      <button onClick={ () => setCount(count + 1) }>Incrementa</button>
    </Fragment>
  );
};

export default App;
