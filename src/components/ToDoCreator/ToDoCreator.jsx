import React from 'react'

function ToDoCreator() {

    // let curTaskText = React.useRef();

    const handleTextarea = (event) =>{
       let curValue = event.target.value;
       console.log(curValue);
    }

    return (

        <div style={{marginBottom:'60px'}}>
            <textarea onChange={handleTextarea} className="form-control" name="" id="" cols="30" rows="10"></textarea>
            <button type="button" className="btn">Добавить задачу</button>
        </div>

    )
}

export default ToDoCreator
