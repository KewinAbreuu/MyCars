import {Container,SubContainer, ContainerForm,Input} from './style'
import { useState } from "react";

import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddCar() {
  const [cars, setCars]=useState([])
  const [nome, setNome]=useState('')
  const [marca, setMarca]=useState('')
  const [cor, setCor]=useState('')
  const [ano, setAno]=useState('')
  const [placa, setPlaca]=useState('')
  const [desc, setDesc]=useState('')
  const [realTime, setRealTime]=useState(true)


function addCar (){
  const data = {
    name: nome,
    marca: marca,
    cor: cor,
    ano: ano,
    placa: placa,
    descricao: desc,
  }

  axios.post('http://localhost:3002/cars', data)
  .then((result)=>{
    console.log(result)
    setRealTime(!realTime)
  })

  } 


  return (
    <Container>
      <SubContainer>
        <ContainerForm>
          <label style={{marginLeft:20}}>Nome:</label>
          <Input type="text" onChange={(e)=>setNome(e.target.value)} value={nome}/>

          <label style={{marginLeft:20}}>Marca:</label>
          <Input type="text" onChange={(e)=>setMarca(e.target.value)} value={marca}/>

          <label style={{marginLeft:20}}>Cor:</label>
          <Input type="text" onChange={(e)=>setCor(e.target.value)} value={cor}/>

          <label style={{marginLeft:20}}>Ano:</label>
          <Input type="text" onChange={(e)=>setAno(e.target.value)} value={ano}/>

          <label style={{marginLeft:20}}>placa:</label>
          <Input type="text" onChange={(e)=>setPlaca(e.target.value)} value={placa}/>

          <label style={{marginLeft:20}}>descrição:</label>
          <Input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>

          <h1>{nome}</h1>

          <button onClick={addCar}>SALVAR</button>
        </ContainerForm>
      </SubContainer>
     
   
    </Container>
     
  );
}

