import { useState } from 'react'

const ChangeColor = () => {
    const [color, setColor] = useState("black")
  return (
    <div className='w-full h-screen duration-200 flex justify-center items-center'
      style={{backgroundColor: color}}
      >
        <div className='flex justify-center items-center bottom-14 px-2 py-2'>
          <div className='flex flex-wrap justify-center items-center gap-4 bg-amber-50 rounded-2xl shadow-2xl p-4'>
            <div className='flex flex-col justify-center items-center'>
              <button className='outline-none px-3 py-2 rounded-2xl text-white font-semibold bg-blue-500 hover:bg-blue-600 duration-200 m-2 border-amber-950'
              style={{backgroundColor:"red"}}
              onClick={() => setColor("red")}>
                Red
              </button>
              <button className='outline-none px-3 py-2 rounded-2xl text-white font-semibold bg-blue-500 hover:bg-blue-600 duration-200 m-2'
              style={{backgroundColor:"blue"}}
              onClick={()=> setColor("blue")}>
                Blue
              </button>
              <button className='outline-none px-3 py-2 rounded-2xl text-black font-semibold bg-blue-500 hover:bg-blue-600 duration-200 m-2 border-amber-950'
              style={{backgroundColor:"yellow"}}
              onClick={()=> setColor("yellow")}
              >
                Yellow
              </button>
              <button className='outline-none px-3 py-2 rounded-2xl text-white font-semibold bg-blue-500 hover:bg-blue-600 duration-200 m-2'
              style={{backgroundColor:"green"}}
              onClick={()=> setColor("green")}
              >
                Green
              </button>
              

          </div>
        </div>
      </div>
      </div>
  )
}

export default ChangeColor