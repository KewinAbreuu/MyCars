
import { useState } from "react";
import {Container,Desc} from './style'

export default function ListCars({nome, preco, desc, ano, cor, marca, placa}) {
  return (
   <Container>
    <Desc>{nome}</Desc>
    <Desc>{marca}</Desc>
    <Desc>{placa}</Desc>
    <Desc>{preco}</Desc>
    <Desc>{desc}</Desc>
    <Desc>{ano}</Desc>
    <Desc>{cor}</Desc>
   </Container>
  );
}

