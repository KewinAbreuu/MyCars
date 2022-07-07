
import { Container, Info, Img, SubContainer } from './style'
import axios from 'axios'
import { useState } from 'react'

import Favorite from '../../assets/life.png'
import Close from '../../assets/close.png'
import Edit from '../../assets/edit.png'
import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function ListCars ({ nome, preco, desc, ano, cor, marca, placa, idParams }) {
  const [fav, setFav] = useState(true)
  const history = useHistory()

  function apagar () {
    axios.delete(`http://localhost:3002/cars/${idParams}`)

    alert('Veiculo Exluído com Sucesso!')
  }

  async function favorite () {
    const data = {
      id: idParams,
      name: nome
    }

    const favorite = localStorage.getItem('favorite')
    const dataFavorire = favorite || []

    const favoriteExists = dataFavorire.includes(`${idParams}`)

    if (favoriteExists > -1) {
      alert('Esse Veículo Já Existe nos Favoritos!')
      setFav(false)
    } else {
      localStorage.setItem('favorite', dataFavorire + JSON.stringify(data))
      alert('Adicionado aos favoritos!')
      setFav(false)
    }
  }

  function vai () {
    history.push(`/updateCar/${idParams}`)
  }

  return (
   <Container>
    <SubContainer>
      <Img src={Edit} onClick={vai}/>
      <Img src={Close} onClick={apagar}/>

      {fav === true && <Img src={Favorite} onClick={favorite}/> }
    </SubContainer>

    <Info>{`${nome}`}</Info>
    <Info>{`Marca: ${marca}`}</Info>
    <Info>{`Ano: ${ano}`}</Info>
    <Info>{`Cor: ${cor}`}</Info>
    <Info>{`Preço: ${preco}`}</Info>
    <Info>{`Descrição: ${desc}`}</Info>
    <Info>{`Placa: ${placa}`}</Info>
   </Container>
  )
}
