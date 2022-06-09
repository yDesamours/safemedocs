import NavButton from './navbutton';
import styles from '../styles/nav.module.css'

function nav(props){
  return(
    <nav className={styles.nav}>
      <ul>
        <li><NavButton to='/a_propos'>Connexion</NavButton></li>
        <li><NavButton to='/a_propos'>A Propos</NavButton></li>
      </ul>
   </nav>    
  )
}

export default nav;