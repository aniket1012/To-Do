import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './Components/Form'
import TodoList from './Components/ToDoList'

function App() {

  
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredToDos, setFilteredToDos] = useState([])
  
  
  const filterHandler = () => {
    switch (status) {
      case "completed": {
        setFilteredToDos(todos.filter((todo) => todo.completed === true));
        break;
      }
      case "uncompleted": {
        setFilteredToDos(todos.filter((todo) => todo.completed === false));
        break;
      }
      default:
        setFilteredToDos(todos)
        break
      }
    }
    
    useEffect(() => {
      filterHandler();
    }, [todos,status])

  return (
    <div className="App">
      <header>
        <h1>Aniket's ToDo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setToDos={setToDos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        setToDos={setToDos}
        todos={todos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;



