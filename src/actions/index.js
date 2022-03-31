const getTodo = (inputText) => ({
    type: "GET_TODO",
    payload: inputText
});

const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo
});

const reRenderTodo = (todosList) => ({
    type: "RE_RENDER_TODO",
    payload: todosList
})

const filterTodo = (todosList) => ({
    type: "FILTER_TODO",
    payload: todosList
})

export {getTodo, addTodo, filterTodo, reRenderTodo}