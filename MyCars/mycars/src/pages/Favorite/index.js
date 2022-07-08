import { useEffect, useState } from 'react'

import { Container, SubContainer, Search } from './style'
import ListCarsFavorite from '../../components/ListCarsFavorite'
import BtnBack from '../../components/btnBack'

export default function Favorite () {
  const [cars, setCars] = useState([])
  const [busca, setBusca] = useState('')

  useEffect(() => {
    const FavoriteCars = localStorage.getItem('favorite')
    setCars(JSON.parse(FavoriteCars) || [])
  }, [busca])

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

  function apagar (id) {
    let filtroCars = cars.filter((item) => {
      return (item.id !== id)
    })

    setCars(filtroCars)
    localStorage.setItem('favorite', JSON.stringify(filtroCars))
    alert('Veículo Removido com Sucesso!')
  }

  return (
    <Container>
      <SubContainer>

        <div style={{ alignSelf: 'flex-start' }}>
           <BtnBack press="/"/>
        </div>

        <Search placeholder="Buscar" onChange={(e) => setBusca(e.target.value)} value={busca}/>

        <h3 style={{ marginTop: 10, marginBottom: 10 }}>Favoritos</h3>

        {carsFilter.map((car) => {
          return (
            <ListCarsFavorite key={car.id}
            idParams={car.id}
            nome={car.name}
            marca={car.marca}
            placa={car.placa}
            desc={car.descricao}
            ano={car.ano}
            cor={car.cor}
            preco={car.preco}
            press={() => apagar(car.id)}/>
          )
        })}
      </SubContainer>
    </Container>

  )
}
