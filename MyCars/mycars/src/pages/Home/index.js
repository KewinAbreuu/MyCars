import { useEffect, useState } from 'react'

import axios from 'axios'

import { Container, SubContainer, Search, ContainerHeader, Img } from './style'
import Life from '../../assets/life.png'
import BtnAdd from '../../components/btnAdd'
import ListCars from '../../components/ListCars'
import { useHistory } from 'react-router-dom'

export default function Home () {
  const [cars, setCars] = useState([])
  const [busca, setBusca] = useState('')

  const history = useHistory()

  useEffect(() => {
    function loadApi () {
      axios.get('http://localhost:3002/cars')
        .then((json) => {
          setCars(json.data)
        })
    }
    loadApi()
  }, [busca, cars])

  const carsFilter = cars.filter((car) => {
    return (
      car.name.startsWith(busca.toUpperCase()) ||
      car.marca.startsWith(busca.toUpperCase()) ||
      car.cor.startsWith(busca.toUpperCase()) ||
      car.ano.startsWith(busca.toUpperCase()) ||
      car.placa.startsWith(busca.toUpperCase()) ||
      car.descricao.startsWith(busca.toUpperCase()) ||
      car.preco.startsWith(busca.toUpperCase())
    )
  })

  return (
    <Container>
      <SubContainer>
        <ContainerHeader>
          <Search placeholder="Buscar" onChange={(e) => setBusca(e.target.value)} value={busca}/>
          <Img src={Life} onClick={() => history.push('/favorite')}/>
        </ContainerHeader>

        <BtnAdd press="addCar"/>

        <h3 style={{ marginTop: 10, marginBottom: 10 }}>Meus Anuncios</h3>

        {carsFilter.map((car) => {
          return (
            <ListCars key={car.id}
            idParams={car.id}
            nome={car.name}
            marca={car.marca}
            placa={car.placa}
            desc={car.descricao}
            ano={car.ano}
            cor={car.cor}
            preco={car.preco}/>
          )
        })}
      </SubContainer>
    </Container>

  )
}
