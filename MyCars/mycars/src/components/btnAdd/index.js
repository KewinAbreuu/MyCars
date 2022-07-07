import { Link } from 'react-router-dom'
import { Container, TextBtn } from './style'

export default function BtnAdd ({ press }) {
  return (
       <Link to={`/${press}`}>
       <Container>
          <TextBtn>ADICIONAR</TextBtn>
       </Container>
       </Link>

  )
}
