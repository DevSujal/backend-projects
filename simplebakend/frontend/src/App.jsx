import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState({})

  useEffect(() => {
    axios.get("/api/jokes").then((response) => {
      console.log(response)
      setJokes(response.data)
    }).catch((err) => {
      console.log("error occured!")
    })
  }, [])
  return (
   <>
           <div>
            <h2>Joke No : {jokes.id}</h2>
            <h2>Title : {jokes.title}</h2>
            <h3>Joke : {jokes.joke}</h3>
          </div>
   </>
  )
}

export default App
