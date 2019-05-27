import React, { Component } from 'react';
import posts from './posts'

class App extends Component {
  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          <li>
            <a href={posts[2].url} target="_blank">
              <img src={posts[2].image} />
            </a>
            <p>{posts[2].title}</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default App
