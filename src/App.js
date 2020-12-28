import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY

export default function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://api.unsplash.com/photos/?client_id=${accessKey}`
        )
        const data = result.data
        setImages(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  // return an error if there is no access key
  if (!accessKey) {
    return (
      <a href="https://unsplash.com/developers" className="error">
        Required: Get Your Unsplash API Key
      </a>
    )
  }

  return (
    <div className="app">
      <h1>Infinity Image Gallery!</h1>

      <form>
        <input type="text" placeholder="Search Image..." />
        <button>Search</button>
      </form>

      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  )
}
