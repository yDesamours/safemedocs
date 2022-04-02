import React from 'react';
import axios from 'axios';

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
  }
  
  render(){
    return(
      <form>
        <textarea value={this.state.input} required={ true } />
        <button type="submit" onClick={this.send}></button>
      </form>    
    );
  }
}

export default Prescription;