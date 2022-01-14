

// actions - arrow functions which return an object containing action type and payload

export const increment = (val = 1) => {
    return {
        type: "counter/increment",
        payload: val
    }
}

export const decrement = (val) => {
    return {
        type: "counter/decrement",
        payload: val
    }
}

export const increaseMulti = () => {
    return {
        type: "counter/increaseMulti"
    }
}
export const decreaseMulti = () => {
    return {
        type: "counter/decreaseMulti"
    }
}


// reducer - function which takes an initial state, action, and has a switch statement
const initialState = {
    counter: 0,
    multiplier: 1
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'counter/increment': 
            return {...state, counter: state.counter + (1 * state.multiplier)}
        
        case 'counter/decrement': 
            return {...state, counter: state.counter - (1 * state.multiplier)}
        case 'counter/increaseMulti':
            return {...state, multiplier: state.multiplier + 1};
        case 'counter/decreaseMulti':
            return {...state, multiplier: state.multiplier - 1}
        default: 
            return state
    }

}

export default counterReducer;
