function manageTodo (state=[], action) {
    switch (action.type) {
        case "ADD_TODO":
            let todoNewList = [...state]
            if (action.payload.todo) {
                todoNewList.push(action.payload)
            }
            return todoNewList;
            break;
        case "RE_RENDER_TODO":
            let newState = [...action.payload];
            return newState;
            break;
        default:
            return state;
    }
}

export default manageTodo;