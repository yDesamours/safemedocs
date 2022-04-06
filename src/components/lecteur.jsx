import React from 'react';
import Box from './box';
import '../styles/lecteur.css';
import Button from './button';
import { Html5Qrcode } from 'html5-qrcode'
import '../styles/button.css'

class Lecteur extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      file : '',
    }
    this.handleFile = this.handleFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    if(e.target.files.length !== 0 ) 
      this.setState( {file : e.target.files[0].name} )
  }

  handleFile(){
    let qr = new Html5Qrcode("reader")
    let file = document.getElementById('file').files[0]

    qr.scanFile(file, false)
    .then(decodedText => {
      console.log(decodedText);
    })
    .catch(err => {
      console.log(`Error scanning file. Reason: ${err}`)
    });
  }
  
  render(){
    return(
      <Box className="lecteur">
        <div className="file_input">
          <input type="file" id="file" onChange={this.handleChange} />
          <label htmlFor="file"><p>Choisir un fichier</p></label>
          <div className="file_select">
            <Button className="save" click = {this.handleFile} disabled= {!this.state.file}>Lire</Button>
            <p className='filename'>{ this.state.file || "Aucun fichier choisi!"}</p>
          </div>
        </div>
        <div id="reader"></div>
      </Box>
    );
  }
} 

export default Lecteur;