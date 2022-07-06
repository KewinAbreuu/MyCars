import { useEffect, useState } from "react";

import axios from 'axios';

import {Container,SubContainer, Search} from './style'
import BtnAdd from "../../components/btnAdd";
import ListCars from '../../components/ListCars';


export default function Home() {
  const [cars, setCars]=useState([])
  const [busca, setBusca]=useState('')

  useEffect(()=>{
    function loadApi(){

      axios.get('http://localhost:3002/cars')
      .then((json)=>{
        setCars(json.data)
     })
    }
    loadApi()
    
  },[busca])

  const teste = [
    'oi'

  ]
  // const strCars = cars.toString()
  const carsFilter = teste.filter((carr) => carr.toString().startsWith(busca))

  console.log(carsFilter)

  return (
    <Container>
      <SubContainer>
        <Search placeholder="Buscar" onChange={(e)=>setBusca(e.target.value)} value={busca}/>
        <BtnAdd press="addCar"/>
        <h3 style={{marginTop:10, marginBottom:10}}>Meus Anuncios</h3>
        
        {carsFilter.map((car)=>{
          return(
            <ListCars key={car.id}
            idParams={car.id}
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

