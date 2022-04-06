import React from 'react';
import Box from './box';
import '../styles/lecteur.css';
import Button from './button';
import { Html5Qrcode } from 'html5-qrcode'

class Lecteur extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      file : '',
    }
  }
  render(){
    let qr = new Html5Qrcode()
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