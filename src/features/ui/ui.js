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
        <div className="button-container">
            <h1> mode state is {state.mode} </h1>
            <button class="btn btn-secondary" onClick={clickCounter}>Counter</button>
            <button class="btn btn-success" onClick={clickTodo}>To-do</button>
            <button class="btn btn-info" onClick={clickStopwatch}>Stopwatch</button>
        </div>

    )
}

export default Ui