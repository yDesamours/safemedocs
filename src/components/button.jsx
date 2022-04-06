import '../styles/button.css'

function button(props){
  let className = `button ${props.className}`
  return(
      <button className={className} button disabled={ !props.disabled }>{ props.children } </button>
  )
}

export default button;