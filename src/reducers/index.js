import { combineReducers } from 'redux'
// import reducers
import manageTodo from './manageTodo'
import getTodo from './getTodo'
import filterTodo from './filterTodo'

const allReducers = combineReducers(
    {
        manageTodo,
        getTodo,
        filterTodo
    }
)

export default allReducers