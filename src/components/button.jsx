import '../styles/button.css'

function button(props){
  let className = `button ${props.className}`
  return(
      <button 
        className={className} 
        disabled={ props.disabled } 
        onClick={  props.click } >
          { props.children } 
      </button>
  )
}

export default button;