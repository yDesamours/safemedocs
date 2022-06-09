import React from 'react';
import Box from './box';
import styles from '../styles/lecteur.module.css';
import boxStyles from '../styles/box.module.css'
import Button from './button';
import QrScanner from 'qr-scanner';
import buttonStyles from '../styles/button.module.css';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group'

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
    this.scanner = new QrScanner(video, result => this.handleScan(result))
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
    .then(result => this.handleScan(result))
    .catch(error => console.log(error || 'No QR code found.'));
  }

  handleScan(data){
  axios.post('https://safemocscom.yveltdesamours.repl.co/read', 
               {
                 id : data
               }
          ).then(response => {
    console.log(response)
              this.setState({ result : response.data.content })
          })
  }
  
  render(){
    
    
    return(
      <>
        <CSSTransition in={this.state.result == ''} timeout={500}>
      <Box className={boxStyles.lecteur}>
        <div>
          <video className={styles.video} id="scanner"></video>
          <div className = {styles.buttons}>
            <Button className={buttonStyles.save + ' ' + buttonStyles.button} click={this.start}>Start</Button>
            <Button className={buttonStyles.danger+ ' ' + buttonStyles.button} click={this.stop}>Stop</Button>
          </div>
        </div>
                
        <div className={styles.file_input}>
          <input className={styles.file} type="file" id="file" name='file' onChange={this.handleChange} accept="image/*" />
          <label htmlFor="file"><p>Choisir un fichier</p></label>
          <div className={styles.file_select}>
            <Button className={buttonStyles.save+ ' ' + buttonStyles.button} click = {this.handleFile} disabled= {!this.state.file}>Lire</Button>
            <p className={styles.filename}>{ this.state.file || "Aucun fichier choisi!"}</p>
          </div>
        </div>
      </Box>
        </CSSTransition>
      <CSSTransition in={this.state.result != ''} timeout={500}>
      <Box className ={boxStyles.lecteur}>
        <p className={styles.resulta}>{this.state.result}</p>
      </Box>
      </CSSTransition>

      </>  
    );
  }
} 

export default Lecteur;