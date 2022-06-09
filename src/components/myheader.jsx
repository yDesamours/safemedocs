import Logo from './logo';
import Nav from './nav';
import styles from '../styles/myheader.module.css'

function myheader(props){
  return(
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
}

export default myheader;