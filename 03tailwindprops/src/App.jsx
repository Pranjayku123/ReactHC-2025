import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let myObj={
  username: "pranjay",
  age:24
}
  return (
    <>
      <h1 className='bg-green-400 text-yellow p-4 text-black rounded-xl'>Tailwind Test</h1>
      <Card username ="Pranjay's bird"  btnText="click more..."/>
      <Card username ="Summi's bird"  btnText="show more..."/>
    </>
  )
}

export default App
