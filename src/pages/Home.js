import React from 'react'
import video from "./video.mp4"

const Home = () => {
  return (
    <div className="home">
      <h1>DTox</h1>
      <video autoPlay loop muted>
        <source src={video} type="video/ogg" />
      </video>
    </div>
  )
}

export default Home;

