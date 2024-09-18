import { useState } from 'react'
import Main from './component/Main'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300'>

        <Main />
      </div>
    </>
  )
}

export default App
