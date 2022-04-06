import '../styles/button.css'

function button(props){
  let className = `button ${props.className}`
  let disabled = props.disabled && true;
  return(
      <button 
        className={className} 
        disabled={ disabled } 
        onClick={  props.click } >
          { props.children } 
      </button>
  )
}

export default button;