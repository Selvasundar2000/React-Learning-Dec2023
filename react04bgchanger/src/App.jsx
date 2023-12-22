import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [color, setColor] = useState('olive')

  function changeColor(Clr) {
    setColor(Clr);
  }
  return (

    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }} >

      <div className='fixed flex flex-wrap justify-center 
        bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg
        bg-white px-3 py-2 rounded-3xl'>
          <button
            className='outline-none px-4 py-1 rounded-full
         shadow-lg text-black'
            onClick={() => changeColor('red')}
            style={{ backgroundColor: 'red' }}
          >Red</button>
          <button
            className='outline-none px-4 py-1 rounded-full
         shadow-lg text-black'
            onClick={() => changeColor('blue')}
            style={{ backgroundColor: 'blue' }}
          >Blue</button>
          <button
            className='outline-none px-4 py-1 rounded-full
         shadow-lg text-black'
            onClick={() => changeColor('pink')}
            style={{ backgroundColor: 'pink' }}
          >Pink</button>
          <button
            className='outline-none px-4 py-1 rounded-full
         shadow-lg text-black'
            onClick={() => changeColor('purple')}
            style={{ backgroundColor: 'purple' }}
          >Purple</button>
          <button
            className='outline-none px-4 py-1 rounded-full
         shadow-lg text-black'
            onClick={() => changeColor('orange')}
            style={{ backgroundColor: 'orange' }}
          >Orange</button>
        </div>
      </div>
    </div>


  )
}

export default App
