import { useSelector, useDispatch } from 'react-redux'
import TodoList from './TodoList';
import { reRenderTodo, filterTodo } from '../actions'


function TodoItem({ data, id }) {
    const dispatch = useDispatch();
    let todosList = useSelector((state) => state.manageTodo);
    let filterList = useSelector((state) => state.filterTodo);
    let todo = todosList.find(todo => todo.id === id);
    console.log('list:', todosList)
    console.log('filter list:', filterList)

    const completeHandle = () => {
       todosList.forEach(item => {
        if (item.id === todo.id) 
            item.isCompleted = !item.isCompleted
        
          })
        dispatch(reRenderTodo(todosList))
    }

    const deleteHandle = () => {
      todosList = todosList.filter(item =>( item.id !== id));
      dispatch(reRenderTodo(todosList))
      dispatch(filterTodo(todosList))
    }

    return (
        <div className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
          <span className="todo-item-text">{data}</span>
          <div className="todo-btn">
            <button onClick={completeHandle} className="check-btn">
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={deleteHandle} className="delete-btn">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
    )
}

export default TodoItem;