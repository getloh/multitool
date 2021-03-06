import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo, setTask} from './todoSlice.js'
import TodoItem from './todoItem.js'

function Todo() {
    const todo = useSelector(state => state.todo)               // Selector is for 'todo' slice
    const dispatch = useDispatch();

    // Form handler - 
    const handleForm = (e) => {                                 // handles the form for todos
        e.preventDefault();
        let task = document.getElementById("task").value;       // grabs the data from the field to be able to submit
        let check = document.getElementById("urgentflag").checked;  // Status of the urgent checkbox
        dispatch(addTodo(                                       // dispatch the contents of the form via 'addTodo' action
            {name: task,
            complete: false,
            id: Date.now(),
            urgent: check}))
               
        document.getElementById("task").value = ''              // clears the field after submit
    }

//    const TESTFUNCTION = () =>{
//     let task = document.getElementById("task").value.toString();
//     let check = document.getElementById("urgentflag").checked;
//         console.log(task);
//         console.log(check);
//    };

    // The render
    return (
        <div className="todo-container">

            <h2>Todo list:</h2>


            <div className="todo-form">
                <form onSubmit={handleForm}>
                    <input id="task" className="form-control" type="text" placeholder='Enter a task to add to the list'></input>
                    <div className="todo-lower">
                    <input id="urgentflag" type="checkbox" value={true}></input>
                    <label for="urgentflag">Urgent</label>
                    
                    <input id="taskSubmit" className="btn btn-primary" type="submit"></input>
                    </div>
                </form>
            </div>

            {/* <button onClick={TESTFUNCTION}> test button </button> */}
            <container className="todo-items">
                {todo.tasks.map (x => 
                    <TodoItem 
                        name={x.name}
                        complete={x.complete}
                        id={x.id}
                        urgent={x.urgent}
                    /> ) }
            </container>
                
        </div>
    )
}


// useDispatch(addTodoNormal(document.getElementById("task")))

export default Todo