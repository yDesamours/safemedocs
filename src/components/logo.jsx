import logo from '../medias/logo.png'
import '../styles/logo.css'
import { Link } from 'react-router-dom'

function logoSite(props){
  return(
      <figure id="site_logo">
        <Link to='/'><img src={logo} alt="logo site"/></Link>
      </figure>
  );
}

export default logoSite;