function filterTodo (state=[], action) {
    switch (action.type) {
        case "FILTER_TODO":
            let newState = [...action.payload]
            return newState;
        default:
            return state;
    }
}

export default filterTodo;