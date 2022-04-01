import { Link } from 'react-router-dom';
import '../styles/service.css'

function service(props) {
  return(
    <article className='service'>
      <Link to={props.to}>
        <figure>
          <img src={props.image} alt={props.service} />
          <figcaption>{props.caption}</figcaption>
        </figure>
      </Link>
    </article>
  );
}

export default service;