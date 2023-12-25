import React, { useState } from 'react'

function Add() {
    var [a, b] = useState(78);
  return (

    <div className=' flex  justify-center items-center bg-zinc-700'>
      <div className='bg-gray-600 h-80 mb-10 w-4/5 flex flex-col gap-1 justify-center items-center'>
        <h1>{a}</h1>
        <button onClick={() => b(a + 1)} className='p-4 px-7 py-3 bg-red-400 rounded-md '>click</button>
      </div>
    </div>
  )
}

export default Add
