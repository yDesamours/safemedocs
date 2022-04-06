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
          <p>{ this.state.file }</p>
          <Button click = {this.handleFile} disabled= {this.state.file}>Retreive</Button>
        </div>
        <div id="reader"></div>
      </Box>
    );
  }
} 

export default Lecteur;