
import { Container, Info, Img, SubContainer } from './style'
import React from 'react'

import Close from '../../assets/close.png'

export default function ListCarsFavorite ({ nome, preco, desc, ano, cor, marca, placa, press }) {
  return (
   <Container>
    <SubContainer>
      <Img src={Close} onClick={press}/>
    </SubContainer>

    <Info>{`${nome}`}</Info>
    <Info>{`Marca: ${marca}`}</Info>
    <Info>{`Ano: ${ano}`}</Info>
    <Info>{`Cor: ${cor}`}</Info>
    <Info>{`Placa: ${placa}`}</Info>
    <Info>{`Preço: $${preco}`}</Info>
    <Info>{`Descrição: ${desc}`}</Info>

   </Container>
  )
}
