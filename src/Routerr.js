import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const NoMatch = () => <h1>No existe la ruta</h1>;
const Params = (props) => <h1>Mensaje {props.params.id}</h1>;

const Template = (props) => {
  return(
    <div>
      <h1>Super REACT</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
      {props.children}
    </div>
  )
}

class Routerr extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template} >
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
        </Route>
        <Route path="messages/:id" component={Params} />
        <Route path="*" component={NoMatch} />
      </Router>
    );
  }
}

export default Routerr;
