import Box from './box';
import '../styles/App.css';
import styles from '../styles/box.module.css';
import Myheader from './myheader';
import medicaments from '../medias/medicaments.jpg';
import Presentation from './presentation';
import { Outlet } from 'react-router-dom';

function App() {
  const texte = <p><b>Procurez</b> vous des médicaments <b>sûrs</b>.</p>
  return (
    <div className="App">
      <Box className={styles.firstview}>
        <Myheader />   
        <Presentation text={texte} image={medicaments} />
      </Box>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
