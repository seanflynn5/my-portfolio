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
        <p>April 2023 - August 2023</p>
        <ul id='modal-content'>
          <li>Utilized React’s component-based architecture and Redux’s observer pattern to develop and maintain Codesmith’s public site and CSX, an
online JavaScript learning platform with over 165,000 users annually</li>
          <li>Updated custom YAML content parser to map static content to dynamic React components, which enabled collaborative workflows and reduce
content-to-deployment turnaround time by replacing traditional CMS through automation</li>
          <li>Implemented parameterized SQL queries for transaction support with a relational database, ensuring ACID compliance, strict schemas, and
robust security for classified user data</li>
          <li>Created Jest and Enzyme unit tests with Cypress end-to-end tests in the CI/CD pipeline, ensuring proper rendering of React/Redux
components, intended functionality, and early detection of side effects</li>
          <li>Performed code reviews, white-boarding sessions, and mentored junior engineers for full-stack app development and
professional growth</li>
          <li>Evaluated prospective engineers in technical interviews based on JS knowledge, technical communication, debugging,
algorithmic thinking, empathy, and adherence to best practices</li>
        </ul>
        <br></br>
        <h4><a href='https://github.com/open-source-labs/PreVue'>PreVue (OS Labs)</a></h4>
        <img className='modal-img' src={prevueLogo}></img>
        <p><i>January 2023 - March 2023</i></p>
        <ul id='modal-content'>
          <li>Developed prototyping tool with reusable Vue components and Vue Router to create a modular and efficient application that allows Vue
developers to conceptualize and plan project component hierarchy</li>
<li>Employed TypeScript to ensure consistent and efficient error handling, allowing developers to quickly detect bugs and improve scalability</li>
<li>Created unit test coverage with Vue Test Utils and HTTP server testing with Supertest to ensure consistent performance, enhancing the UX for
both developers and users and preventing future regressions in functionality</li>
<li>Migrated state management library to Vuex 4 to manage application state, allowing quick access to specific parts of the state from all layers of
its structure and ensuring its easy scalability, modularity, and efficient debugging for future enhancements and improvements</li>
<li>Initialized a Node/Express server to serve a number of different HTTP requests at various endpoints, ensuring future scalability as well as improved routing and middleware chaining by leveraging Node’s event-driven architecture</li>
<li>Leveraged Docker for containerization, allowing for efficient movement between development, staging, and production environments,
enabling high degree of ease for future application iteration</li>
<li>Authenticated users with OAuth 2.0, providing them the ability to log in via GitHub and streamline the process of project retrieval and storage</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-btn' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExperienceModal;