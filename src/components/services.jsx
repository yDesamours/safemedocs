import Service from './service';
import Box from './box';
import prescription from '../medias/prescription.webp';
import qr from '../medias/qr.jpg';
import carte from '../medias/carte.jpg';

function services (props){
  return(
    <Box className='services'>
      <Service to='/write' caption='rediger une prescription' image={prescription} />
      <Service to='/read' caption='lire une prescription' image={qr} />
      <Service to='/find' caption='trouver une pharmacie' image={carte} />
    </Box>
  );
}

export default services;