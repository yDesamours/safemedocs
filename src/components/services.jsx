import Service from './service';
import Box from './box';
import prescription from '../medias/prescription.jpg';

function services (props){
  return(
    <Box className='services'>
          <Service to='/write' caption='rediger une prescription' image={pscription} />
    </Box>
  );
}