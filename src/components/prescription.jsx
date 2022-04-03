import React from 'react';
import axios from 'axios';
import Box from './box';
import '../styles/prescription.css'

class Prescription extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input : ''
    }
    this.handleInput = this.handleInput.bind(this)
  }
  
  handleInput(e){
    this.setState(
      { input : e.target.value }
    )
  }

  send(e){
    e.preventDefault();
    axios.post('/new',{
      content : this.state.input
      }
    )
      .then(response => {
        console.log(response)
        this.setState(
          { input : '' }
        )
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  render(){
    return(
      <Box className='prescription'>
        <div>
          <p>some text goes here</p>
          <p>here to</p>
        </div>
        <form className="prescription_write">
          <textarea value={this.state.input} onChange={this.handleInput} required={ true } />
          <button type="submit" onClick={this.send}>Submit</button>
        </form> 
      </Box>   
    );
  }
}

export default Prescription;