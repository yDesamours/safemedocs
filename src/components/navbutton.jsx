import { Link } from 'react-router-dom';
import '../styles/navbutton.css';

function navButton(props){
  return(
    <div className="navbutton">
      <Link to={ props.to } onClick={props.click}>{props.children}</Link>
    </div>
  )
}

export default navButton;