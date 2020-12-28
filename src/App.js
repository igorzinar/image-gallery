import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css'
import axios from 'axios'

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY

export default function App() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getPhoto()
  }, [page])

  function getPhoto() {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages((images) => [...images, ...data])
      })
  }

  // Try to rewrite useState to add next page
  const fetchData = async () => {
    const result = await axios(
      `https://api.unsplash.com/photos/?client_id=${accessKey}`
    )
    const data = result.data
    setImages(data)
  }
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
      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={() => setPage((page) => page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <a
              className="image"
              key={index}
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}
