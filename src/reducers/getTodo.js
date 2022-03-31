function getTodo (state={}, action) {
    switch (action.type) {
        case "GET_TODO":
            return {
                id: Math.random()*1000000,
                isCompleted: false,
                todo :action.payload
            };
        default:
            return state;
    }
}

export default getTodo;