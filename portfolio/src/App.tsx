import { useState } from 'react'
import seanPhoto from './assets/sean-photo.png'
import MyNavbar from './MyNavbar.tsx'
import ExperienceModal from './ExperienceModal.tsx'
import ProjectModal from './ProjectsModal.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [expModalShow, setExpModalShow] = useState(false);
  const [projModalShow, setProjModalShow] = useState(false);

  return (
    <>
    <MyNavbar />
    <div id='main-content'>
      <div id='intro-div'>
      <div>
          <img src={seanPhoto} className="photo" alt="Vite logo" />
      </div>
      <h1>Sean Flynn</h1>
      <h3><i>Software Engineer</i></h3>
      <p className="intro">
        Hi! 👋  I'm Sean, a software engineer with experience in fullstack JavaScript & TypeScript development. I currently work at Codesmith as a Software Engineer, and recently worked on <a href='http://prevue.live'>PreVue</a>, an open source prototyping tool for Vue.js developers.
      </p>
      </div>
      <div id='modal-div'>     
        <button className='modal-btn' onClick={() => setExpModalShow(true)}>
          Experience
        </button>
        <button className='modal-btn' onClick={() => setProjModalShow(true)}>
          Projects
        </button>
      <ExperienceModal show={expModalShow}
        onHide={() => setExpModalShow(false)} />
      <ProjectModal show={projModalShow}
        onHide={() => setProjModalShow(false)} />  
        </div>
        </div>
    </>
  )
}

export default App
