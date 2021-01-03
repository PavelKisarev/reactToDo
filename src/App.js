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
    },
    {
      id:4,
      task:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      isComplete: false,
      hideByFilter: false
    }
  ]
}


function App() {
  return (
    <div className="App">
      <header>
        <div className="container-fluid" style={{height:'15px'}}>
          <div className="row justify-content-center">
            <div className="col-12">
              
            </div>
          </div>
        </div>
      </header>
      <main>
          <section>
              <ToDoList state={state}/> 
          </section>
      </main>
      
    </div>
  );
}

export default App;
