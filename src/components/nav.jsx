import Button from './button';
import '../styles/nav.css'

function nav(props){
  return(
    <nav>
      <ul>
        <li><Button to='/'>Acceuil</Button></li>
        <li><Button to='/a_propos'>A Propos</Button></li>
      </ul>
   </nav>    
  )
}

export default nav;