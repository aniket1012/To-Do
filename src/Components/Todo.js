import React from 'react'


const Todo = (props) => {

    const deleteHandler = () => {
      props.setToDos(props.todos.filter(el => el.id !== props.todo.id))
    }
    const completeHandler = () => {
      props.setToDos(props.todos.map(item => {
        if(item.id === props.todo.id) {
          return {
            ...item, completed: !item.completed
          }
        }
        return item
      }))
    }
    return (
      <div className="todo">
        <li className={`todo-item ${props.todo.completed ? "completed": ""}`}>{props.todo.text}</li>
        <button className="complete-btn" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
}

export default Todo