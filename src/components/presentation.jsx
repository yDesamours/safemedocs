import { useMediaQuery } from 'react-responsive';
import '../styles/presentation.css';
import React from 'react';

const Presentation = (props)=> {
  const isMobile = useMediaQuery({ query : '(max-width : 600px)'})
  const style ={ visibility : isMobile ? 'hidden' : 'visible'};
  
  return(
    <div className="presentation">
      <div className="presentation_text"><p>{props.text}</p></div>
      <figure className="presentation_image" style={style}>
        <img src={props.image} alt="illustration" />
      </figure>
    </div>
  );
}

export default Presentation;