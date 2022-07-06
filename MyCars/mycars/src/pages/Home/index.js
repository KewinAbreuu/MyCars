import {Container,SubContainer, Search} from './style'
import BtnAdd from "../../components/btnAdd";
import ListCars from '../../components/ListCars';
import { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [cars, setCars]=useState([])
  const [text, setText]=useState('')
  const [realTime, setRealTime]=useState(true)



  useEffect(()=>{
    function loadApi(){

      axios.get('http://localhost:3002/cars')
      .then((json)=>{
        setCars(json.data)
     })
    }
    loadApi()
    
  },[realTime])



function addCar (){
  const data = {
    name: text,
    marca: text,
    cor: text,
    ano: text,
    placa: text,
    descricao: text,
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
        <Search placeholder="Buscar" onChange={(e)=>setText(e.target.value)}/>
        <BtnAdd press="addCar"/>
        <h3 style={{marginTop:10, marginBottom:10}}>Meus Anuncios</h3>
        {cars.map((car)=>{
          return(
            <ListCars 
            nome={car.name} 
            marca={car.marca}
            placa={car.placa}
            desc={car.descricao}
            ano={car.ano}
            cor={car.cor}/>
          ) 
        })}
      </SubContainer>
     
   
    </Container>
     
  );
}

