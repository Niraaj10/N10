import { useState } from 'react'
import Main from './component/Main'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-white dark:bg-black text-[#181818] dark:text-[#808080] transition-colors duration-300'>

        <Main />
      </div>
    </>
  )
}

export default App
