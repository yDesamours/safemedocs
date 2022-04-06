import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import * as saveSvgAsPng  from 'save-svg-as-png';
import axios from 'axios';
import Box from './box';
import '../styles/prescription.css';
import Button from './button'

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

  new(e){
    e.preventDefault()
    this.setState(
      { response : '' }
    )
  }

  save(e){
    e.preventDefault()
      saveSvgAsPng.saveSvg(document.getElementById("svg"), "test.svg", {scale : 10})
  }

  send(e){
    console.log('sending')
    e.preventDefault();
    this.setState(state => ({response : state.input}))
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
                    <p>some text goes here</p>
                    <p>here to</p>
                  </div>
                  <form className="prescription_write">
                    <legend>Rx</legend>
                    <textarea value={this.state.input} onChange={this.handleInput} required={ true } />
                      <Button to='#' click={this.send}>Submit</Button>
                  </form> 
                </Box>;
    let qr = <Box className="response">
                <QRCodeSVG  id="svg" value={ this.state.response } size={256}/>
                  <Button className='new' click={this.new}>New</Button>
                  <Button className click={this.save}>Save</Button>
              </Box>
    return(
      <div>
        { this.state.response ? qr : write }
      </div>
      
    );
  }
}

export default Prescription;