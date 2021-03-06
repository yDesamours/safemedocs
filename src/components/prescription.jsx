import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import * as saveSvgAsPng  from 'save-svg-as-png';
import axios from 'axios';
import Box from './box';
import boxStyles from '../styles/box.module.css'
import styles from '../styles/prescription.module.css';
import Button from './button'
import buttonStyles from '../styles/button.module.css'
import { CSSTransition } from 'react-transition-group'

class Prescription extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input : '',
      response : ''
    }
    
    this.handleInput = this.handleInput.bind(this)
    this.send = this.send.bind(this)
    this.new = this.new.bind(this)
    this.save = this.save.bind(this)
    this.effacer = this.effacer.bind(this)
  }
  
  handleInput(e){
    this.setState(
      { input : e.target.value }
    )
  }

  effacer(){
    this.setState(
      { input : '' }
    )
  }
  
  new(){
    this.setState(
      { response : ''  }
    )
  }

  save(){
    const date = new Date();
    const name = date.toLocaleDateString() +'-'+ date.toLocaleTimeString()
      saveSvgAsPng.saveSvg(document.getElementById("svg"), name , {scale : 10})
  }

  send(){
    console.log('sending')
    axios.post('https://safemocscom.yveltdesamours.repl.co/new',{
      content : this.state.input
      }
    )
      .then(response => {
        console.log(response)
        this.setState(
          { response : response.data }
        )
      })
      .catch(error => {
        console.log(error)
        this.setState(
        { input : '' }
    )
      })
  }
  
  render(){
 
  

      return(
      <div>
        <CSSTransition in={this.state.response === ''} timeout={500}>
  <Box className={boxStyles.prescription}>
                  <div className={styles.prescription_text}>
                    <p>Ecrivez une prescription.</p>
                    <p>Puis encodez la.</p>
                  </div>
                  <div>
                    <form className={styles.prescription_write}>
                      <legend>Rx</legend>
                      <textarea className={styles.textarea} value={this.state.input} onChange={this.handleInput} required={ true } />
                    </form>
                    <Button className={buttonStyles.danger+ ' ' + buttonStyles.button} disabled={!this.state.input} click={this.effacer}>Effacer</Button> 
                      <Button className={buttonStyles.send+ ' ' + buttonStyles.button}  click={this.send} disabled={false}>Effectuer</Button> 
                  </div>
                   
                </Box>;
  </CSSTransition>
    
    <CSSTransition in={this.state.response !== ''} timeout={500}>
      <Box className={boxStyles.response}>
          <div className={styles.qrbox}>
            <QRCodeSVG  
                id="svg" 
                fgColor={"#6772E5"}
                value={ this.state.response } 
                size={256}
              />
          </div>
          <Button className={buttonStyles.save+ ' ' + buttonStyles.button}  click={this.save} disabled={false}>Telecharger</Button>
          <Button className={buttonStyles.new+ ' ' + buttonStyles.button}  click={this.new} disabled={false}>Nouveau</Button>
        </Box> 
    </CSSTransition>
      </div>
      
    );
  }
}

export default Prescription;