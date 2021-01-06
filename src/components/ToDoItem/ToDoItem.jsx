import React from 'react'

function ToDoItem(props) {

    let id = props.task.id,
        task = props.task.task;

    let removeTask = props.removeFunc;
    let cloneTask = props.cloneFunc;
    let completeTask = props.completeFunc;

    let isComplete = props.task.isComplete;
    let hideByFilter = props.task.hideByFilter;

    let completeClass = isComplete === true ? "completed":"";
    let hideClass = hideByFilter === true ? "hidden":"";

    return (
        <li className={`todo__item ${completeClass} ${hideClass}`}>
            <p>{`${id} - ${task}`}</p>
            <div className="todo__btn-block">
                <button className="btn btn-primary btn-ico" onClick={cloneTask}><i className="fas fa-clone"></i></button>
                <button className="btn btn-primary btn-ico" onClick={completeTask}> {isComplete === false ? <i className="far fa-check-circle"></i>:<i class="fas fa-minus-circle"></i>}</button>
                <button className="btn btn-primary btn-ico" onClick={removeTask}><i className="fas fa-trash"></i></button>
            </div>
        </li>
    )
}

export default ToDoItem
