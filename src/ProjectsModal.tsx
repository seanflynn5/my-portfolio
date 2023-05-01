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
        <h4>AI-Mongus</h4>
        <p><i>An interactive guessing game integrated with ChatGPT</i></p>
        <ul id='modal-content'>
          <li>Integrated React Router to facilitate single page application (SPA) development to minimize network requests and ensure
maintainability and uniformity of the codebase, ultimately creating a better user and developer experience</li>
<li>Leveraged the power of WebSockets to allow for requests to be made concurrently by both users and an AI interface</li>
<li>Performed code reviews, white-boarding sessions, and mentored junior engineers for full-stack app development and
professional growth</li>
<li>Created a MongoDB database with querying speed in mind, taking advantage of faster read/write times of NoSQL for
non-relational data</li>
        </ul>
        <br></br>
        <h4>GoodHealth</h4>
        <p><i>Querying interface to inform nutritional decision-making</i></p>
        <ul id='modal-content'>
          <li>Implemented the container pattern in React and created reusable components to easily maintain and uniformize the
codebase through abstractions and the Flux architecture</li>
<li>Managed the HTTP request/response cycle via a REST API built with Node/Express, facilitating consistent data flow and
error handling with the use of middleware and global error handlers</li>
<li>Utilized MongoDB for application's database due to its flexible data model, enabling easy development and scalability with
future changes in data requirements considered</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-btn' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectsModal;