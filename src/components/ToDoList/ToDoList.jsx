import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import './index.css';



function ToDoList(props) {

    let [tasks, setTasks] = React.useState(props.state.tasks);
    let [taskText, setTaskText] = React.useState('');

    // Complete task on click
    const completeTask = (idx) =>{

      let curItem = tasks[idx];

      curItem.isComplete = !curItem.isComplete;

      setTasks([...tasks]);
    }

    // Clone task by index
    const cloneTask = (idx) => {

      let insertItem = tasks[idx];

      tasks.splice(idx,0,insertItem);

      // ALERT !!!!!!!!!!!
      setTasks([...tasks]);
    }

    // Remove task by index
    const removeTask = (idx) =>{

      let newTasksList = tasks.filter((_, index) => index !== idx);

      const confirmDelete = window.confirm("Вы точно хотите удалить?");

      confirmDelete && ( setTasks(newTasksList) )
    }

    // Read new task text
    const handleTextarea = (event) =>{
        let curValue = event.target.value;
        setTaskText(curValue);
    }

    // ADD new task 
    const addNewTask = () => {

      let newId = tasks.length + 1;

      let newTask = {
        id: newId,
        task: taskText,
        isComplete:false,
        hideByFilter:false
      }

      tasks.unshift(newTask);

      setTasks([...tasks]);
      setTaskText("");
    }


    // Filter tasks
    const handleSearchInput = (event) =>{
      let curValue = event.target.value;

      let filterResult = tasks.map((elem) => ({...elem,hideByFilter:!elem.task.includes(curValue)}))
      
      setTasks(filterResult);
    }
    

    // Create JSX of task items
    let taskElements = tasks.map((elem, index)=>{

      return (
        <ToDoItem 
          key={`${elem.id}__${elem.task}__${index}`}
          task={elem} 
          removeFunc={()=>{removeTask(index)}}
          cloneFunc={()=>{cloneTask(index)}}
          completeFunc={()=>{completeTask(index)}}
        />
      )
    });


    return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-4">

                <div className="logo">
                  <i class="far fa-list-alt"></i>
                </div>

                <div className="form-add-task">
                  <h2 className="title">Добавить новую задачу</h2>
                  <div className="form-group">
                    <textarea onChange={handleTextarea} value={taskText} className="form-control" name="" id="" cols="10" rows="5"></textarea>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-secondary" onClick={addNewTask}>Добавить задачу</button>
                  </div>
                </div>

              
              </div>

              <div className="col-12 col-lg-8">

                <div className="todo">
                  <div className="todo__search">
                    <h2 className="title">Поиск по задачам</h2>
                    <input className="form-control" onChange={handleSearchInput}  type="text"/>
                  </div>

                  <h2 className="title">Список задач</h2>
                  <ul className="todo__list">
                      {taskElements}
                  </ul>
                </div>
              </div>

            </div>
          </div>
    )
}

export default ToDoList
