import React, { useEffect } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'https://api.unsplash.com/photos/?client_id=lkYpZkmURFesR8bn_odqbt1p_qH060LI0XeI4w8Vqj4'
        )
        console.log(result.data)
        // const data = await result.json()
        // console.log(data)
      } catch (error) {
        console.error("can't find image")
      }
    }
    fetchData()
  }, [])
  return (
    <div className="app">
      <h1>Infinity Image Gallery!</h1>

      <form>
        <input type="text" placeholder="Search Image..." />
        <button>Search</button>
      </form>

      <div className="image-grid">
        {[...Array(100)].map((_, index) => (
          <div className="image" key={index}>
            <img src="https://placekitten.com/g/1920/1080" alt="Sample" />
          </div>
        ))}
      </div>
    </div>
  )
}
