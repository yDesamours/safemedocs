import React from 'react';
import Box from './box';
import '../styles/lecteur.css';
import Button from './button';

class Lecteur extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      file : '',
    }
  }
  render(){
    return(
      <Box className="lecteur">
        <div className="file_input">
          <input type="file" id="file"/>
          <label for="file"><p>Choisir un fichier</p></label>
          <p>{ this.state.file }</p>
        </div>
      </Box>
    );
  }
} 

export default Lecteur;