import './App.css';

import Form from './Components/Form'
import TodoList from './Components/ToDoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aniket's ToDo List</h1>
      </header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
