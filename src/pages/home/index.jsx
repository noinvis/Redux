import React from 'react'
import { useSelector } from 'react-redux'

// useSelector - get

const Home = () => {
  const count = useSelector((state) => state.counter.value)
  console.log(count);
  
  return (
    <div>
        <h2>Home {count}</h2>
    </div>
  )
}

export default Home