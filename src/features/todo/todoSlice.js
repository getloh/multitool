import {createSlice} from '@reduxjs/toolkit';
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

export const toggleComplete = (id, status) => {    // id, and true if box ticked, false if unticked
    return {
        type: "todo/toggleComplete",
        payload: id,
        status: status
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

const sliceOptions = {
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            return{
                ...state, tasks: [...state.tasks, action.payload]
            }
        },
        removeTodo: (state, action) => {
            return {
                ...state, tasks: [...state.tasks.filter(obj => obj.id !== action.payload)]
            }
        },
        toggleComplete: (state, action) => {
            let index = state.tasks.findIndex(obj => obj.id === action.payload);
            
                state.tasks[index].complete = action.status
            
        },
        setTask: (state, action) => {
            return {
                ...state, taskField: action.payload
            }
        }


    }


}

const todoSlice = createSlice(sliceOptions)




export default todoSlice.reducer;