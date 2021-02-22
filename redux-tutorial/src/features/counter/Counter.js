import React from 'react'
import { useSelector } from 'react-redux';
import { selectCount } from './counterSlice';

// useSelector lets our component extract whatever pieces of data it needs from the redux sotre state. 
function Counter() {
    const count = useSelector(selectCount)
    return (
        <div>
           Clicked: <span id="value">0</span> times
        <button id="increment">+</button>
        <button id="decrement">-</button>
        <button id="incrementIfOdd">Increment if odd</button>
        <button id="incrementAsync">Increment async</button>
        </div>
    )
}
