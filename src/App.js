import React from 'react'
import './App.css'

export default function App() {
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
