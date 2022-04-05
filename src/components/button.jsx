import { Link } from 'react-router-dom';
import '../styles/button.css';

function button(props){
  return(
    <div className="button">
      <Link to={props.to}>{props.children}</Link>
    </div>
  )
}

export default button;