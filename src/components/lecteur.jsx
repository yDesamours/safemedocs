import React from 'react';
import Box from './box';
import '../styles/lecteur.css';
import Button from './button';
import QrScanner from 'qr-scanner';
import '../styles/button.css';

class Lecteur extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      file : '',
      result : ''
    }
   this.scanner = null;
    
    this.handleFile = this.handleFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }

  componentDidMount(){
    const video = document.getElementById('scanner')
    this.scanner = new QrScanner(video, result => console.log(result))
  }

  start(){
    this.scanner.start()
  }

  stop(){
    this.scanner.stop()
  }
  
  handleChange(e){
    if(e.target.files.length !== 0 ) 
      this.setState( {file : e.target.files[0].name} )
  }

  handleFile(){
    let file = document.getElementById('file').files[0]

    QrScanner.scanImage(file)
    .then(result => this.setState({result : result}))
    .catch(error => console.log(error || 'No QR code found.'));
  }
  
  render(){
    const scanner = (
      <Box className="lecteur">
        <div>
          <video id="scanner"></video>
          <div className = 'buttons'>
            <Button className='save' click={this.start}>Start</Button>
            <Button className="danger" click={this.stop}>Stop</Button>
          </div>
        </div>
                
        <div className="file_input">
          <input type="file" id="file" name='file' onChange={this.handleChange} accept="image/*" />
          <label htmlFor="file"><p>Choisir un fichier</p></label>
          <div className="file_select">
            <Button className="save" click = {this.handleFile} disabled= {!this.state.file}>Lire</Button>
            <p className='filename'>{ this.state.file || "Aucun fichier choisi!"}</p>
          </div>
        </div>
      </Box>
    )

    const result = (
      <Box className ='lecteur'>
        <p className='resultat'>{this.state.result}</p>
      </Box>
    )
    
    return(
      <div>
        { this.state.result ? result : scanner }
      </div>  
    );
  }
} 

export default Lecteur;