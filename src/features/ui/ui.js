import {modeCounter, modeTodo, modeStopwatch} from './uiSlice.js'
import {useDispatch, useSelector} from 'react-redux'

const Ui = () => {
    const state = useSelector(state => state.ui)
    const dispatch = useDispatch();


    const clickCounter = () => {
        dispatch(modeCounter())
    };
    const clickTodo = () => {
        dispatch(modeTodo())
    };
    const clickStopwatch = () => {
        dispatch(modeStopwatch())
    };

    return (
        <div>
        <h1> mode state is {state.mode} </h1>
            <button onClick={clickCounter}>Counter</button>
            <button onClick={clickTodo}>To-do</button>
            <button onClick={clickStopwatch}>Stopwatch</button>
        </div>

    )
}

export default Ui