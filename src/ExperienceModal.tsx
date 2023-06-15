import csLogo from './assets/cs-logo.png'
import prevueLogo from './assets/prevue-large-green.png'
import Modal from 'react-bootstrap/Modal';

interface ExperienceModalProps {
  onHide: () => void;
  show: boolean;
}

function ExperienceModal(props: ExperienceModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Experience
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Codesmith</h4>
        <img className='modal-img' src={csLogo}></img>
        <p>April 2023 - Present</p>
        <ul id='modal-content'>
          <li>Utilized React’s component-based architecture and Redux’s observer pattern to develop and maintain Codesmith’s public site and CSX, an
online JavaScript learning platform with over 165,000 users annually</li>
          <li>Updated custom YAML content parser to map static content to dynamic React components, which enabled collaborative workflows and reduce
content-to-deployment turnaround time by replacing traditional CMS through automation</li>
          <li>Mentored junior engineers on full SDLC of open-source apps using JS, Node / Express, React, PostgreSQL, Docker, etc. for
successful product launches</li>
          <li>Conducted technical training on Node and non-native JS data structures with focus on best practices</li>
          <li>Performed code reviews, white-boarding sessions, and mentored junior engineers for full-stack app development and
professional growth</li>
          <li>Evaluated prospective engineers in technical interviews based on JS knowledge, technical communication, debugging,
algorithmic thinking, empathy, and adherence to best practices</li>
        </ul>
        <br></br>
        <h4><a href='https://github.com/open-source-labs/PreVue'>PreVue (Open Source)</a></h4>
        <img className='modal-img' src={prevueLogo}></img>
        <p><i>January 2023 - Present</i></p>
        <ul id='modal-content'>
          <li>Developed prototyping tool with reusable Vue components and Vue Router to create a modular and easily navigable
prototyping tool that allows Vue developers to conceptualize and plan project component hierarchy</li>
<li>Employed Test Driven Development practices by creating test suites with Vue Test Utils and Supertest to ensure consistent
and efficient functionality on both front and back ends, enhancing the UX for both developers and users</li>
<li>Implemented Vuex 4 to manage application state, allowing quick access to specific parts of the state from all layers of its
structure and ensuring its easy scalability, modularity, and efficient debugging for future enhancements and improvements</li>
<li>Initialized a Node/Express server to serve a number of different HTTP requests at various endpoints, ensuring future
scalability as well as improved routing and middleware chaining to aid in enhancing the user experience</li>
<li>Utilized Docker for containerization, allowing for efficient movement between development, staging, and production
environments, enabling high degree of ease for future application iteration</li>
<li>Constructed a PostgreSQL database to enable effective querying of relational data with querying speed and storage
efficiency in mind, easily integrating with the frontend to allow for a seamless user experience upon data retrieval</li>
<li>Utilized TypeScript to ensure consistent and efficient error handling, allowing developers to quickly detect and remedy bugs
with its strict type-checking system while concurrently improving performance and scalability</li>
<li>Implemented OAuth 2.0 to authenticate users and persist user session state, providing them with the ability to log in via
GitHub and save and retrieve projects saved in database</li>
<li>Conducted daily standups as scrum lead in an AGILE/SCRUM flow to enhance workflow and team dynamics</li>
<li>Product was developed under tech accelerator OS Labs (opensourcelabs.io)</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-btn' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExperienceModal;