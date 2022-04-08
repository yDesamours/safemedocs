import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import * as saveSvgAsPng  from 'save-svg-as-png';
//import axios from 'axios';
import Box from './box';
import '../styles/prescription.css';
import Button from './button'
import favicon from '../medias/favicon-32x32.png'

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
  }
  
  handleInput(e){
    this.setState(
      { input : e.target.value }
    )
  }

  new(){
    this.setState(
      { response : '' }
    )
  }

  save(){
      saveSvgAsPng.saveSvg(document.getElementById("svg"), "test.svg", {scale : 10})
  }

  send(){
    console.log('sending')
    this.setState(state => {return { response : state.input }})
   /* axios.post('/new',{
      content : this.state.input
      }
    )
      .then(response => {
        console.log(response)
        this.setState(
          { response  }
        )
      })
      .catch(error => {
        console.log(error)
        this.setState(
        { input : '' }
    )
      })*/
    this.setState(
        { input : '' })
  }
  
  render(){
    let write = <Box className='prescription'>
                  <div className="prescription_text">
                    <p>Ecrire une prescription.</p>
                    <p>Puis encoder le.</p>
                  </div>
                  <form className="prescription_write">
                    <legend>Rx</legend>
                    <textarea value={this.state.input} onChange={this.handleInput} required={ true } />
                    <Button className="danger" disabled={this.state.input} click={this.new}>Effacer</Button> 
                    <Button className="send" click={this.send} disabled={false}>Submit</Button> 
                  </form> 
                </Box>;
    let qr = (
        <Box className="response">
          <div className="qrbox">
            <QRCodeSVG  
                id="svg" 
                fgColor={"#6772E5"}
                value={ this.state.response } 
                size={256}
                imageSettings={
                  {
                    src: { favicon },
                    x: null,
                    y: null,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }
                }
              />
          </div>
          <Button className='save' click={this.save} disabled={false}>Telecharger</Button>
          <Button className='new' click={this.new} disabled={false}>Nouveau</Button>
        </Box> 
    )
      return(
      <div>
        { this.state.response ? qr : write }
      </div>
      
    );
  }
}

export default Prescription;