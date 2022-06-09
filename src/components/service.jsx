import { Link } from 'react-router-dom';
import styles from '../styles/service.module.css'

function service(props) {
  return(
    <article className={styles.service}>
      <Link to={props.to}>
        <figure>
          <img src={props.image} alt={props.service} />
        </figure>
      </Link>
      <p><b>{props.caption}</b></p>
    </article>
  );
}

export default service;