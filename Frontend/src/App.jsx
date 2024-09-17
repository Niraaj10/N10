import { useState } from 'react'
import Main from './component/Main'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Main />
      </div>
    </>
  )
}

export default App
