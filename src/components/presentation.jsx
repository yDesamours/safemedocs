import { useMediaQuery } from 'react-responsive';
import '../styles/presentation.css';
import React from 'react';

const Presentation = (props)=> {
  let isMobile = useMediaQuery({ query : '(max-width : 400px)'})
  console.log(isMobile)
  return(
    <div className="presentation">
      <div className="presentation_text"><p>{props.text}</p></div>
      <figure className="presentation_image" >
        <img src={props.image} alt="illustration" />
      </figure>
    </div>
  );
}

export default Presentation;