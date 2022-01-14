import {useDispatch, useSelector} from 'react-redux';
import {removeTodo, setComplete} from './todoSlice.js'



const TodoItem = ({name, complete, id}) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodo(id))
    }

    const handleToggle = () => {
        let check = document.getElementById("completeflag").checked;
        dispatch(setComplete({id, check}))
    }

    return (
        <div key={id}>
            <li>{name}</li>
            <button onClick={handleRemove}>Remove task</button>
            <input id="completeflag" type="checkbox" value={true} onClick={handleToggle}></input>
            <label for="completeflag">Complete</label>
        </div>
    )
}


export default TodoItem;
