import Box from './box';
import '../styles/App.css';
import Myheader from './myheader';
import medicaments from '../medias/medicaments.jpg';
import Presentation from './presentation';
import Services from './services';

function App() {
  return (
    <div className="App">
      <Box className="first_view">
        <Myheader />   
        <Presentation text="Hello" image={medicaments} />
      </Box>
      <main</main>
        <Services />
      </main>
    </div>
  );
}

export default App;
