import { Link } from 'react-router-dom';

function Music() {
    return(
        <>
        <div id='video-div'>
            <iframe
        width="600"
        height="315"
        src="https://www.youtube.com/embed/_MLbDPtK1n4"
        title="Eroded"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="600"
        height="315"
        src="https://www.youtube.com/embed/eQsWEdxjabE"
        title="Sperger"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="600"
        height="315"
        src="https://www.youtube.com/embed/RBLGKsS4I1g"
        title="Shosty"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
        <Link to="/">
        <button id='back-btn' className='modal-btn'> Back </button>
        </Link>
        </>
    )
}

export default Music;