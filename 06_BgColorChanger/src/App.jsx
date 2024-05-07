import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("#252525")

  return (
    <>
      <div className='h-screen w-full' style={{backgroundColor: color}}>
        <div className='fixed flex justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap bg-white rounded-3xl gap-3 shadow-lg px-5 py-2' >
            <button style={{backgroundColor: "red"}} onClick={()=> setcolor("red")} className='px-3 py-2  rounded-full text-white shadow-lg outline-none' >Red</button>
            <button style={{backgroundColor: "blue"}} onClick={()=> setcolor("blue")} className='px-3 py-2  rounded-full text-white shadow-lg outline-none'>Blue</button>
            <button style={{backgroundColor: "green"}} onClick={()=> setcolor("green")} className='px-3 py-2  rounded-full text-white shadow-lg outline-none'>Green</button>
            <button style={{backgroundColor: "yellow"}} onClick={()=> setcolor("yellow")} className='px-3 py-2  rounded-full text-white shadow-lg outline-none'>Yellow</button>
            <button style={{backgroundColor: "black"}} onClick={()=> setcolor("black")} className='px-3 py-2  rounded-full text-white shadow-lg outline-none' >Black</button>
            <button style={{backgroundColor: "white"}} onClick={()=> setcolor("white")} className='px-3 py-2  rounded-full text-black shadow-lg outline-none' >White</button>
            <button style={{backgroundColor: "purple"}} onClick={() => setcolor("purple")} className='px-3 py-2 rounded-full text-white shadow-lg outline-none'>Purple</button>
            <button style={{backgroundColor: "orange"}} onClick={() => setcolor("orange")} className='px-3 py-2 rounded-full text-white shadow-lg outline-none'>Orange</button>
            <button style={{backgroundColor: "pink"}} onClick={() => setcolor("pink")} className='px-3 py-2 rounded-full text-white shadow-lg outline-none'>Pink</button>
            <button style={{backgroundColor: "teal"}} onClick={() => setcolor("teal")} className='px-3 py-2 rounded-full text-white shadow-lg outline-none'>Teal</button>
            <button style={{backgroundColor: "brown"}} onClick={() => setcolor("brown")} className='px-3 py-2 rounded-full text-white shadow-lg outline-none'>Brown</button>
            <button style={{backgroundColor: "gray"}} onClick={() => setcolor("gray")} className='px-3 py-2 rounded-full text-white shadow-lg outline-none'>Gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
