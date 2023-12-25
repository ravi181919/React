
import React from 'react'
import Hello from "./pre"
import Add from "./add"
import Usestate from './useState';

function App() {
  return (
    <>
    <div>
       <div className="h-screen w-full flex justify-center items-center bg-zinc-700">
        <div className='w-4/5 h-4/6 flex justify-center items-center flex-col  bg-white'>
          <p id='cardHere'>card Here</p>
          <div><marquee behavior="" direction="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eius blanditiis corrupti harum nobis, eveniet vel laboriosam suscipit recusandae totam officiis non omnis minima facilis.</marquee></div>
        </div>
       </div>
    <Hello object={{name:'ravi', age: 25}} />
    <Add />
    <Usestate />
    </div>
    </>
  );
}

export default App
