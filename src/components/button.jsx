import { Link } from 'react-router-dom';
import '../styles/button.css';

function button(props){
  return(
    <div className="button">
      <p><Link to={props.to}>{props.children}</Link></p>
    </div>
  )
}

export default button;