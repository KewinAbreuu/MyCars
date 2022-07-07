import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, SubContainer, ContainerForm, Input, Label, BtnSalvar } from './style'
import BtnBack from '../../components/btnBack'
import { useHistory, useParams } from 'react-router-dom'

export default function UpdateCar () {
  const [cars, setCars] = useState([])
  const [nome, setNome] = useState('')
  const [marca, setMarca] = useState('')
  const [cor, setCor] = useState('')
  const [ano, setAno] = useState('')
  const [placa, setPlaca] = useState('')
  const [desc, setDesc] = useState('')

  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    function loadApi () {
      axios.get(`http://localhost:3002/cars/${id}`)
        .then((json) => {
          setCars(json.data)
        })
    }
    loadApi()
  }, [])

  function updateCar () {
    const data = {
      name: nome.toUpperCase(),
      marca: marca.toUpperCase(),
      cor: cor.toUpperCase(),
      ano: ano.toUpperCase(),
      placa: placa.toUpperCase(),
      descricao: desc.toUpperCase()
    }

    axios.put(`http://localhost:3002/cars/${id}`, data)
      .then((result) => {
        console.log(result)
        history.push('/')
      })
  }

  function preencheData () {
    setNome(cars.name)
    setMarca(cars.marca)
    setCor(cars.cor)
    setAno(cars.ano)
    setPlaca(cars.placa)
    setDesc(cars.descricao)
  }

  return (
    <Container>
      <SubContainer>
        <div style={{ alignSelf: 'flex-start' }}>
          <BtnBack press="/"/>
        </div>

        <ContainerForm>
          <Label>Nome *</Label>
          <Input
          type="text"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          placeholder={cars.name}/>

          <Label>Marca *</Label>
          <Input
          type="text"
          onChange={(e) => setMarca(e.target.value)}
          value={marca}
          placeholder={cars.marca}/>

          <Label>Cor *</Label>
          <Input
          type="text"
          onChange={(e) => setCor(e.target.value)}
          value={cor}
          placeholder={cars.cor}/>

          <Label>Ano *</Label>
          <Input
          type="text"
          onChange={(e) => setAno(e.target.value)}
          value={ano}
           placeholder={cars.ano}/>

          <Label>Placa *</Label>
          <Input
          type="text"
          onChange={(e) => setPlaca(e.target.value)}
          value={placa}
           placeholder={cars.placa}/>

          <Label>Descrição *</Label>
          <Input
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          placeholder={cars.descricao}/>

          <BtnSalvar onClick={preencheData}>Preencher</BtnSalvar>
          <BtnSalvar onClick={updateCar}>SALVAR</BtnSalvar>

        </ContainerForm>
      </SubContainer>

    </Container>

  )
}
