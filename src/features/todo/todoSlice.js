
// actions
export const addTodo = (task) => {       // Recieves a task object from todo
    return {
    type: "todo/addTodo",
    payload: task
    }
};

export const removeTodo = (id) => {     // Recieves id value from todoItem
    return {
    type: "todo/removeTodo",
    payload: id
    }
};

export const setComplete = (id, status) => {
    return {
        type: "todo/setComplete",
        payload: [id, status]
    }
}
export const setuncomplete = (id) => {
    return {
        type: "todo/setUncomplete",
        payload: id
    }
}

export const setTask = (val) => {
    return {
        type: "todo/setTask",
        payload: val
    }
}

// reducer
const initialState = {
    tasks: [
        {name: "TEST water the garden",
        complete: false,
        id: Date.now(),
        urgent: false},
        {
        name: "TEST do taxes",
        complete: false,
        id: Date.now()+1,
        urgent: true}
    ],
    taskField: ""
}

const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case 'todo/addTodo':            // Adds a task via adding the object to the state.tasks array
            return{
                ...state, tasks: [...state.tasks, action.payload]
            }

        case 'todo/removeTodo':         // Removes a task, via filtering out the id from state.tasks.id
            return {
                ...state, tasks: [...state.tasks.filter(obj => obj.id !== action.payload)]
            }

        case 'todo/setComplete':        // Sets .complete to be true on state
            return {
                ...state, tasks: []
            }
        case 'todo/setUncomplete':      // sets .complete to be false on state
            return {
                ...state, tasks: []
            }

        // Set the field which adds the task
        case 'todo/setTask':
            return {
                ...state, taskField: action.payload
            }
        default: return state;
    }
}

export default todoReducer;