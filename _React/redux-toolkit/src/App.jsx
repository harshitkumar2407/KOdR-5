import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './features/counterReducer'

const App = () => {
  let {count} = useSelector((store) => store.counter)
  let dispatch =  useDispatch()

  const [value, setValue] = useState(0)
  return (
    <div>
      <h1>Count is {count}</h1>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Value"
      />
      <button onClick={() => dispatch(incrementByValue(value))}>Add</button>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </div>
  )
}

export default App
