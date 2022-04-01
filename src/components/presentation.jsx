import '../styles/presentation.css';

function presentation(props) {
  return(
    <div className="presentation">
      <div className="presentation_text"><p>{props.text}</p></div>
      <figure className="presentation_image">
        <img src={props.image} alt="illustration" />
      </figure>
    </div>
  );
}

export default presentation;