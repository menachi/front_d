import PostsList from "./PostsList"
import { useEffect, useState } from "react"
import axios from "axios"

interface Post {
  _id: string,
  title: string,
  content: string,
  author: string
}

function App() {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const fetchItems = async () => {
      console.log('useEffect')
      const response = await axios.get<Post[]>('http://localhost:3060/posts')
      console.log(response.data)
      setItems(response.data.map((item) => item.title))
    }
    fetchItems()
  }, [])

  console.log('App rendered')
  return (
    <div>
      <PostsList items={items} title="Posts" onItemSelected={() => { }} />
    </div>
  )
}

export default App
