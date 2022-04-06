import React from 'react';
import Box from './box';
import Button from './button';

class Lecteur extends React.Component{
  render(){
    return(
      <Box className="lecteur">
        <input type="file" id="file"/>
        <label for="file">Choisir un fichier</label>
      </Box>
    );
  }
} 

export default Lecteur;