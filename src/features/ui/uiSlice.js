
// actions
export const modeCounter = () => {
    return {
        type: "ui/modeCounter",
        payload: "counter"
    }
}

export const modeTodo = () => {
    return {
        type: "ui/modeTodo",
        payload: "todo"
    }

}


// initial state
const initialState = {
    mode: "home"
}
// reducer

const uiReducer = (state= initialState, action) => {
    switch(action.type){
        case "ui/modeCounter":{
            return {...state, mode: action.payload}
        }
        case "ui/modeTodo":{
            return {...state, mode: action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default uiReducer