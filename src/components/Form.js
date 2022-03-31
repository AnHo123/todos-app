import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { getTodo, addTodo, filterTodo, reRenderTodo } from "../actions";

function Form() {
  const dispatch = useDispatch();
  let todo = useSelector((state) => state.getTodo);
  let todosList = useSelector((state) => state.manageTodo);
  let filterList = useSelector((state) => state.filterTodo);
  let [text, setText] = useState('');
  let [status, setStatus] = useState('all');
  
  useEffect(() => {
      dispatch(addTodo(todo))
      setText('')
      setStatus('all')
    }, [todo])
  
  useEffect(() => {
    filterHandler()
    dispatch(filterTodo(filterList))
    console.log('hey')
  }, [status, todosList])

  //functions
  const getTodoHandle = (e) => {
    e.preventDefault();
    if (text)
      dispatch(getTodo(text));
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        filterList = todosList.filter(item => item.isCompleted);
        dispatch(filterTodo(filterList));
        break;
      case "uncompleted":
        filterList = todosList.filter(item => !item.isCompleted);
        dispatch(filterTodo(filterList));
        break;
      default:
        filterList = [...todosList];
        dispatch(filterTodo(filterList));

    }
  }

  return (
    <section>
      <form className="todo-form" onSubmit={getTodoHandle}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className="todo-input"
          placeholder="Enter your todo..."
        />
        <button type="submit" className="todo-btn-submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="selector">
          <select name="todos" className="todo-filter" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </section>
  );
}

export default Form;
