function button(props){
  let className = `button ${props.className}`
  return(
    <div className={className}>
      <button disabled={ !props.disabled }>{ props.children } </button>
    </div>
  )
}

export default button;