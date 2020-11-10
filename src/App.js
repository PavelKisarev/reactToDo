import React from 'react';
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
      <header>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 logo">
              <i class="far fa-list-alt"></i>
            </div>
          </div>
        </div>
      </header>
      <main className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <ToDoList state={state}/>
            </div>
          </div>
      </main>
      
    </div>
  );
}

export default App;
