import { NavLink } from 'react-router-dom';
import styles from '../styles/navbutton.module.css';

function navButton(props){
  return(
      <NavLink className={styles.navbutton} to={ props.to } onClick={props.click}>{props.children}</NavLink>
  )
} 

export default navButton;