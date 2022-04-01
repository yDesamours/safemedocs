import logo from '../medias/logo.png'
import '../styles/logo.css'

function logoSite(props){
  return(
      <figure id="site_logo">
        <img src={logo} alt="logo site"/>
      </figure>
  )  
}

export default logoSite;