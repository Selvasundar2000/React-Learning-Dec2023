import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


let myAddress={
  name:'selva',
  age:23,
  address:{
    city:'Tirunelveli',
    state:'Tamil nadu',
    country:'india'
  }
}

let newArr=[1,2,3,4,5,6,7,8,9]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-red-500 p-3 rounded-md'>
       Employee details</h1>
      <Card />
    </>
  )
}

export default App
