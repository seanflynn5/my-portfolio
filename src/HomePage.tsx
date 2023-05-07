import { useState } from 'react'
import { Link } from 'react-router-dom';
import seanPhoto from './assets/sean-photo.png'
import violaImg from './assets/viola.png'
import MyNavbar from './MyNavbar.tsx'
import ExperienceModal from './ExperienceModal.tsx'
import ProjectModal from './ProjectsModal.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function HomePage():JSX.Element {
  const [expModalShow, setExpModalShow] = useState(false);
  const [projModalShow, setProjModalShow] = useState(false);

  return (
    <>
    <MyNavbar />
    <div id='main-content'>
      
      <div>
          <img src={seanPhoto} className="photo" alt="Vite logo" />
      </div>
      <h1>Sean Flynn</h1>
      <h3><i>Software Engineer</i></h3>
      <p className="intro">
        Hi! 👋  I'm Sean, a software engineer with experience in fullstack JavaScript development. I currently work at <a href='https://www.codesmith.io/'>Codesmith</a> as a Software Engineer, and recently worked on <a href='http://prevue.live'>PreVue</a>, an open source prototyping tool for Vue.js developers. In my downtime, I enjoy playing and listening to music (as you can tell by my photo!). Let's be in touch!
      </p>
      </div>
      <div id='modal-btn-container'>
        <button className='modal-btn' onClick={() => setExpModalShow(true)}>
          Experience
        </button>
        <button className='modal-btn' onClick={() => setProjModalShow(true)}>
          Projects
        </button>
        </div>
        <div id='tail-content'>
      <ExperienceModal show={expModalShow}
        onHide={() => setExpModalShow(false)} />
      <ProjectModal show={projModalShow}
        onHide={() => setProjModalShow(false)} />   
        <p><i>Website built with React, TypeScript, Vite, and React Bootstrap</i></p>
        <Link to="/music">
        <img id='viola-img' src={violaImg} alt="My Image" />
      </Link>
      </div>
    </>
  )
}

export default HomePage