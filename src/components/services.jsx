import Service from './service';
import Box from './box';
import styles from '../styles/box.module.css'
import prescription from '../medias/prescription.webp';
import qr from '../medias/qr.jpg';
import carte from '../medias/carte.jpg';

function services (props){
  return(
    <Box className={styles.services}>
      <Service to='/write' caption='Rediger une prescription' image={prescription} />
      <Service to='/read' caption='Lire une prescription' image={qr} />
      <Service to='/find' caption='Trouver une pharmacie' image={carte} />
    </Box>
  );
}

export default services;