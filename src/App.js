import './App.css';
import React, {useState} from 'react'
import Form from './Components/Form'
import TodoList from './Components/ToDoList'

function App() {


  const [inputText, setInputText] = useState("");


  return (
    <div className="App">
      <header>
        <h1>Aniket's ToDo List</h1>
      </header>
      <Form setInputText={setInputText}/>
      <TodoList/>
    </div>
  );
}

export default App;
