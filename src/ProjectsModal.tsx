import Modal from 'react-bootstrap/Modal';

interface ProjectsModalProps {
  onHide: () => void;
  show: boolean;
}

function ProjectsModal(props: ProjectsModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Projects
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h4><a href = 'https://comforting-paletas-29eebd.netlify.app/'>My Ear Trainer</a></h4>
        <p><i>Ear training app for musicians to help enhance aural skills</i></p>
        <ul id='modal-content'>
          <li>Created reusable components in React to easily maintain and uniformize the codebase through abstractions and the Flux architecture </li>
<li>Written in TypeScript to ensure data type consistency, enhancing ease of debugging and streamlined implementation of future features</li>
        </ul>
        <br></br>
        <h4>AI-Mongus</h4>
        <p><i>An interactive guessing game integrated with ChatGPT</i></p>
        <ul id='modal-content'>
          <li>Integrated React Router to facilitate single page application (SPA) development to minimize network requests and ensure
maintainability and uniformity of the codebase, ultimately creating a better user and developer experience</li>
<li>Built a MongoDB database instance to prioritize querying speed and to take advantage of faster read/write times for non-relational data
</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-btn' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectsModal;