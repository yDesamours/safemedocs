import '../styles/box.css'

function box(props){
  return(
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default box;