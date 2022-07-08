
import { useState, useEffect } from 'react'

import { Container, Info, Img, SubContainer } from './style'
import axios from 'axios'

import Favorite from '../../assets/life.png'
import Close from '../../assets/close.png'
import Edit from '../../assets/edit.png'
import { useHistory } from 'react-router-dom'

export default function ListCars ({ nome, preco, desc, ano, cor, marca, placa, idParams }) {
  const [fav, setFav] = useState(true)
  const [cars, setCars] = useState([])
  const history = useHistory()

  // Buscando do findById
  useEffect(() => {
    function loadApi () {
      axios.get(`http://localhost:3002/cars/${idParams}`)
        .then((json) => {
          setCars(json.data)
        })
    }
    loadApi()
  }, [cars])

  function apagar () {
    axios.delete(`http://localhost:3002/cars/${idParams}`)

    alert('Veiculo Exluído com Sucesso!')
  }

  async function favorite () {
    const favorite = localStorage.getItem('favorite')
    let dataFavorite = JSON.parse(favorite) || []

    const favoriteExists = dataFavorite.some((car) => car.id === cars.id)

    if (favoriteExists) {
      setFav(!fav)
      alert('Esse Veículo Já Existe nos Favoritos!')
      return
    }

    dataFavorite.push(cars)
    localStorage.setItem('favorite', JSON.stringify(dataFavorite))
    alert('Veículo Salvo com Sucesso!')
  }

  function UpdateCar () {
    history.push(`/updateCar/${idParams}`)
  }

  return (
   <Container>
    <SubContainer>
      <Img src={Edit} onClick={UpdateCar}/>
      <Img src={Close} onClick={apagar}/>

      {fav === true && <Img src={Favorite} onClick={favorite}/> }
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
