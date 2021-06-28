import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    return (
      <div className="todo-container">
        <ul className="todo-list">
            {props.todos.map(todo => {
                return <Todo  
                          key={todo.id} 
                          todo={todo} 
                          setToDos={props.setToDos} 
                          todos={props.todos}
                        />
            })}
        </ul>
      </div>
    );
}

export default TodoList