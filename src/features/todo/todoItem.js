import {useDispatch, useSelector} from 'react-redux';
import {removeTodo, toggleComplete} from './todoSlice.js'



const TodoItem = ({name, complete, id, urgent}) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodo(id))
    }

    const handleToggle = () => {
        let check = document.getElementById(id).checked;    // true if box is checked
        dispatch(toggleComplete(id, check))                 // object ID
    }

    let itemLogic = <h5>{name}</h5>;
    if (urgent) {
        itemLogic = <h5 className="urgent-item">{name}</h5>;
    }
    if (complete){
        itemLogic = <h5 className="complete-item">{name}</h5>;
    }


    return (
        <div className="todo-single">
            <div className="todo-left">
                {/* <label for="completeflag">Complete</label> */}
                <input id={id} type="checkbox" value={true} onClick={handleToggle} ></input>
                {itemLogic}
                
            </div>
            
            <div>
                <i class="far fa-times-circle xButton" onClick={handleRemove}></i>
            </div>
            {/* <button onClick={handleRemove}>Remove task</button> */}
            
            

        </div>
    )
}


export default TodoItem;
