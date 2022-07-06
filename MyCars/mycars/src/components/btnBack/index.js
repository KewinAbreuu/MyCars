import { Link } from "react-router-dom";
import {Container,Back} from './style'

import arrow from '../../assets/arrow.png'

export default function BtnBack({press}) {
  return (
       <Link to={`${press}`}>
       <Container>
         <Back src={arrow}/> 
       </Container>
       </Link>
     
  );
}

