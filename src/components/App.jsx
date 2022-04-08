import Box from './box';
import '../styles/App.css';
import Myheader from './myheader';
import medicaments from '../medias/medicaments.jpg';
import Presentation from './presentation';
import Acceuil from './acceuil';
import Prescription from './prescription';
import Lecteur from './lecteur';
import { Routes, Route } from 'react-router-dom';

function App() {
  const texte = <p><b>Procurez</b> vous des médicaments <b>sûrs</b>.</p>
  return (
    <div className="App">
      <Box className="first_view">
        <Myheader />   
        <Presentation text={texte} image={medicaments} />
      </Box>
      <main>
        <Routes>
          <Route index element={ <Acceuil /> } />
          <Route path='/write' element={ <Prescription /> } />
          <Route path='/read'  element={ <Lecteur /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
