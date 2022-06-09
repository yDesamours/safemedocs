import logo from '../medias/logo.png'
import styles from '../styles/logo.module.css'
import { Link } from 'react-router-dom'

function logoSite(props){
  return(
      <figure className={styles.site_logo}>
        <Link to='/'><img src={logo} alt="logo site"/></Link>
      </figure>
  );
}

export default logoSite;