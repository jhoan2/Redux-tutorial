import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement} from './counterSlice';

// useSelector lets our component extract whatever pieces of data it needs from the redux sotre state. 
function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch()
    return (
        <div>
           Clicked: <span id="value">{count}</span> times
        <button id="increment" onClick={() => dispatch(increment())}>+</button>
        <button id="decrement" onClick={() => dispatch(decrement())}>-</button>
        <button id="incrementIfOdd">Increment if odd</button>
        <button id="incrementAsync">Increment async</button>
        </div>
    )
}

export default Counter;