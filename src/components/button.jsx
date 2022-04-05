import { Link } from 'react-router-dom';
import '../styles/button.css';

function button(props){
  return(
    <div className="button">
      <Link to={ props.to } onClick={props.click}>{props.children}</Link>
    </div>
  )
}

export default button;