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
                <button className="btn btn-primary" onClick={completeTask}> {isComplete === false ? "Сделал":"Не сделал"}</button>
                <button className="btn btn-secondary" onClick={removeTask}>Удалить</button>
            </div>
            <div className="todo__clone">
                <div className="btn btn-primary" onClick={cloneTask}>Клонировать</div>
            </div>
        </li>
    )
}

export default ToDoItem
