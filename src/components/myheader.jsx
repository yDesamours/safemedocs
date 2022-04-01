import Logo from './logo';
import Nav from './nav';
import '../styles/myheader.css'

function myheader(props){
  return(
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}

export default myheader;