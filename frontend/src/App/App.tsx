import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { increment, decrement, selectCount } from "./appSlice";


const App = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch()

    return (<div>
        count:{count}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>)
}

export default App;