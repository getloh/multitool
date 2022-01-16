import {useDispatch, useSelector} from 'react-redux';
import {removeTodo, toggleComplete} from './todoSlice.js'



const TodoItem = ({name, complete, id}) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodo(id))
    }

    const handleToggle = () => {
        let check = document.getElementById(id).checked;    // true if box is checked
        dispatch(toggleComplete(id, check))                              // object ID
    }

    return (
        <div>
            <li>{name}</li>
            <button onClick={handleRemove}>Remove task</button>
            <input id={id} type="checkbox" value={true} onClick={handleToggle}></input>
            <label for="completeflag">Complete</label>
        </div>
    )
}


export default TodoItem;
