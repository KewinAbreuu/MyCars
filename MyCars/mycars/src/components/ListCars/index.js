
import {Container,Desc} from './style'
import axios from 'axios';
import { useState } from 'react';

import Favorite from '../../assets/life.png'
import Close from '../../assets/close.png'


export default function ListCars({nome, preco, desc, ano, cor, marca, placa,idParams}) {

  const [fav, setFav] = useState(true)

  function apagar (){
    axios.delete(`http://localhost:3002/cars/${idParams}`)
    alert('Veiculo Exluído com Sucesso!')
  }

  async function favorite(){
    const data = {
      id: idParams,
      name: nome
    }
   const favorite = localStorage.getItem('favorite')
   const dataFavorire = favorite || []

   const favoriteExists = dataFavorire.indexOf(`${idParams}`)

   if(favoriteExists > -1){
     alert('Esse Veículo Já Existe nos Favoritos!')
     setFav(false)
   }else{
    localStorage.setItem('favorite',dataFavorire + JSON.stringify(data))
    alert('Adicionado aos favoritos!')
    setFav(false)
   }
 
  }



  return (
   <Container>
    <div style={{alignSelf:'end'}}>
      {fav === true ? <img src={Favorite} style={{width:50, height:50, cursor:'pointer'}} onClick={favorite}/> : <></>}
      <img src={Close} style={{width:50, height:50, cursor:'pointer'}} onClick={apagar}/>
    </div>
       
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

