import React from 'react'
import { useDispatch } from 'react-redux'
import { dec, laylo, reset } from '../../redux/features/counterSlice'

// useDispatch - set

const About = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <h2>About</h2>
        <button onClick={() => dispatch(laylo())}>increment</button>
        <button onClick={() => dispatch(dec())} disabled={dec == 1}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default About