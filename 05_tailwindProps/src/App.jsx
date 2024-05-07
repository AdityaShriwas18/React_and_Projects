import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    name: "Aditya Shriwas",
    age: 19
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black text-8xl p-8 rounded ' >Tailwind Test</h1>
    {/* <Card channel="item 1" someObj = {myObj} /> */}
    {/* <Card channel="item 2" someObj = {newArr}/> */}
    <Card username="Aditya Shriwas" profession="software engineer" img="https://media.licdn.com/dms/image/D4D03AQHwrHZamJRS0Q/profile-displayphoto-shrink_400_400/0/1712845233949?e=1720656000&v=beta&t=EqBFZcALkk7tqOhCEV5lr7ZNZHtb-vSD3QP708AeoRE"/>
    <Card username="Aman Rai" profession="software developer" img="https://media.licdn.com/dms/image/D4D03AQGBkY9zt0Yvbg/profile-displayphoto-shrink_100_100/0/1692363911920?e=1720656000&v=beta&t=LCX9AmHI4FirjT3ovJu9zs8FEa09tu-28hN1E7L-ie0"/>
    </>
  )
}

export default App
