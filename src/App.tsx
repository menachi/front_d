import PostForm from "./PostForm"
import { useState } from 'react'

function App() {
  const [refresh, setRefresh] = useState(0);
  return (
    <div>
      <PostForm />
      <button className='btn btn-primary mt-3' onClick={() => { setRefresh(refresh + 1) }}>render</button>
    </div>
  )
}

export default App
