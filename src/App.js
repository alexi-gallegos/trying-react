import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';


class App extends Component {

  constructor(){
    super();
    this.state = {
      todos,
      ntodos : todos.length
    }
  }

  render() {
    const todos = this.state.todos.map((todo,i) => {
      return (
        <div className="col-md-4">
        <div className="card mt-4" key={i}>
          <div className="card-header">
            <h3>{ todo.title }</h3>
            <span className="badge badge-pill badge-danger ml-2">
              { todo.priority }
            </span>
          </div>
          <div className="card-body">
            <p>{ todo.description }</p>
          </div>
          <div className="card-footer">
              <p>{ todo.responsible }</p>
          </div>
        </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar nav-dark bg-dark">
            <a href="" className="text-white">
                Tasks - { this.state.ntodos }
            </a>
        </nav>
       
       <div className="container">
       <div className="row mt-4">
          { todos }
        </div>
       </div>

        <img src={logo} className="App-logo" alt="logo" />
        
      </div>
    );
  }
}

export default App;
