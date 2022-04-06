import NavButton from './navbutton';
import '../styles/nav.css'

function nav(props){
  return(
    <nav>
      <ul>
        <li><NavButton to='/a_propos'>A Propos</NavButton></li>
      </ul>
   </nav>    
  )
}

export default nav;