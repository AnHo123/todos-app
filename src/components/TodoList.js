import { useSelector } from 'react-redux';
import TodoItem from "./TodoItem";

function TodoList() {
  let todosList = useSelector(state => state.filterTodo);
  
  return (
    <section>
      <div className="todo-list">
        {todosList.map((todo) => (
          <TodoItem key={todo.id} data={todo.todo} id={todo.id}/>
        ))}
      </div>
    </section>
  );
}

export default TodoList;
