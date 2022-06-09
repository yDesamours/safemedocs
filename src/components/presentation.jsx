import styles from '../styles/presentation.module.css';

const Presentation = (props)=> {
  return(
    <div className={styles.presentation}>
      <div className={styles.presentation_text}>{props.text}</div>
      <figure className={styles.presentation_image}>
        <img src={props.image} alt="illustration" />
      </figure>
    </div>
  );
}

export default Presentation;