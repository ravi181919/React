import React from 'react'

function Hello({object}) {
  return (
  <div className='flex justify-center items-center bg-zinc-700'>
     <div className='bg-gray-600 h-80 mb-10 w-4/5 flex justify-center items-center'>
       <p className='text-white text-xs'> I am: {object.name}</p>
     </div>
  </div>
  )
}

export default Hello
