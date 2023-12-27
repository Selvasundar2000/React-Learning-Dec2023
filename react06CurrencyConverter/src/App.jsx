import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import  {InputBox}  from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo=useCurrencyInfo(from)
const options=Object.keys(currencyInfo)

const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert=()=>{
  setConvertedAmount(amount* currencyInfo[to])

}

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center
    items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400)` }}>
       <div className='w-full'>
        <div className='w-full max-w-md mx-auto border-gray-60 rounded-lg
        p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
             <InputBox
             label="from"
             amount={amount}
             currencyOptions={options}
             onCurrencyChange={(currency)=>setFrom(currency)}
             onAmountChange={(amount)=>setAmount(amount)}
             selectedCurrency={from}
             />
            </div>
          </form>
        </div>
       </div>
        </div>
    </>
  )
}

export default App
