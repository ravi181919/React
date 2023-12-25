import React, { useState } from 'react'
import Hello from './pre'

function Usestate() {
    const [s, r] = useState(true)
  return (
    <div className=' flex  justify-center items-center bg-zinc-700'>
    <div className='h-80 mb-10 w-4/5 bg-gray-600 flex flex-col gap-1 justify-center items-center' >
      <h1 className={`${s === true ? 'text-green-500' : 'text-red-500'}`}>{s === true ? 'Hello':" Hey"}</h1>
      <button onClick={() => r(!s)} className='p-4 px-7 py-3 bg-red-400 rounded-md '>Change</button>
    </div>
    </div>
  )
}

export default Usestate
