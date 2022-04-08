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
  return (
    <div className="App">
      <Box className="first_view">
        <Myheader />   
        <Presentation text="Procurez vous des médicaments sûrs." image={medicaments} />
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
