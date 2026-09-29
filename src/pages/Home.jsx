import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className="home">

        <div className="home-content">
           <p className='intro'>Hello, I'm </p>
           <h1>Aishwarya<span>Bhoir</span></h1>
           <h2>Java Full Stack Developer</h2>
           <p className='description'>
            I'm a Computer Science graduate passionate about
          web development and building responsive,
          user-friendly web applications.
           </p>

           <div className="home-buttons">

            <a href="/projects" className="primary-btn">View My Work</a>
          

            <a href="/contact" className="secondary-btn">Contact Me</a>

            </div>
        </div>

        <div className="home-image">
          <div className="image-circle">
            <img src="./user-image.jpg" alt="Aishwarya Bhoir" />
          </div>
        </div>


    </section>
  )
}

export default Home
