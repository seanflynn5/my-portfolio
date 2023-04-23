import { useState } from 'react'
import seanPhoto from './assets/sean-photo.png'
import './App.css'

function App() {
  return (
    <>
      <div>
          <img src={seanPhoto} className="photo" alt="Vite logo" />
      </div>
      <h1>Sean Flynn - Software Engineer</h1>
      <p className="intro">
        Hi! 👋  I'm Sean. I'm a software engineer with experience in fullstack JavaScript & TypeScript development. I currently work at Codesmith as a Software Engineer, and recently worked on <a href='http://prevue.live'>PreVue</a>, an open source prototyping tool for Vue.js developers.
      </p>
    </>
  )
}

export default App
