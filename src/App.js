import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';
import Card from './components/Card';


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
          <Card title={todo.title} 
                priority={todo.priority} 
                description={todo.description} 
                responsible={todo.responsible}
          />
      )
    })
    return (
      <div className="App">
        <nav className="navbar nav-dark bg-dark">
            <a href="" className="text-white">
                Tasks
                <span className="badge badge-pill badge-light ml-2">
                    { this.state.todos.length }
                </span>
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
