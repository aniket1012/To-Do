import './App.css';
import React, {useState} from 'react'
import Form from './Components/Form'
import TodoList from './Components/ToDoList'

function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([])


  return (
    <div className="App">
      <header>
        <h1>Aniket's ToDo List</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        inputText={inputText} 
        todos={todos} 
        setToDos={setToDos}/>
      <TodoList 
        setToDos={setToDos} 
        todos={todos}/>
    </div>
  );
}

export default App;
