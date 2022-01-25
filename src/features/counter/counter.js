import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, increaseMulti, decreaseMulti} from './counterSlice.js'


function Counter() {
    const counterState = useSelector(state => state.counter)
    const dispatch = useDispatch();

    // Setting JSX outside of the return statement allows for easier creation of complex logic
    let counterMulStatus = <h1>Counter multiplier {counterState.multiplier}</h1>
       if(counterState.multiplier > 3 && counterState.multiplier < 8){
            counterMulStatus = <h1 className="redFlagged">Counter MULTIPLIER {counterState.multiplier}</h1>
        }
        else if (counterState.multiplier >= 8){
            counterMulStatus = <h1 className="pinkFlagged">Counter M-M-M-M-MULTIPLIER {counterState.multiplier}</h1>
        }
      
        

    

    return (
        <div className="counter-container">
        {// this counter uses conditional to set className redFlagged, where CSS will then style it differently
        }
            {counterState.counter < 10 ? <h1>Counter {counterState.counter}</h1> : <h1 className="redFlagged">Counter {counterState.counter}</h1>}
        
        {// Counter elements work by dispatching and changing the counter state
        }
            <button class="btn btn-primary" onClick={() => dispatch( increment() ) }> + </button>
            <button class="btn btn-primary" onClick={() => dispatch( decrement() ) }> - </button>

            {counterMulStatus}
        

            <button class="btn btn-primary" onClick={() => dispatch( increaseMulti() ) }> M + </button>
            <button class="btn btn-primary" onClick={() => dispatch( decreaseMulti() ) }> M - </button>
        </div>
    )

}


export default Counter;
