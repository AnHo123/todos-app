import './App.css';
import {Form, TodoList} from './components'

function App() {
  
  return (
    <div className="main">
      <header>
          <h1>An's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
