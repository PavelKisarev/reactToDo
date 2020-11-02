import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';

const state = {
  tasks:[
    {
      id:1,
      task:"Изучить React",
      isComplete: false,
      hideByFilter: false
    },
    {
      id:2,
      task:"Изучить Angular",
      isComplete: false,
      hideByFilter: false
    },
    {
      id:3,
      task:"Изучить Vue",
      isComplete: false,
      hideByFilter: false
    }
  ]
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
          <div className="ToDo__wrapper">
            <ToDoList state={state}/>
          </div>
      </main>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
