import React from 'react';
import Counter from '../features/counter/counter.js';

import Todo from '../features/todo/todo.js';
import './app.css';
import Ui from '../features/ui/ui.js';
import {useSelector} from 'react-redux';

function App() {
  const state = useSelector(state => state)

  return (
    <div className="container">
    <div className="head">
      <h1>App title</h1>
    </div>
    <div className="main">
      {state.ui.mode === "counter" ? <Counter id="counter-element" className="main"/> : null}
      {state.ui.mode === "todo" ? <Todo id="todo-element" className="main"/> : null}
      
    </div>
    <div className="ui"><Ui id="ui-element"/></div>
    </div> //end container
  );
}

export default App;