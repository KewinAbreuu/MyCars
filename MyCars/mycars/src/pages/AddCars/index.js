import { useState } from 'react'
import axios from 'axios'
import { Container, SubContainer, ContainerForm, Input, Label, BtnSalvar } from './style'
import BtnBack from '../../components/btnBack'
import { useHistory } from 'react-router-dom'

export default function AddCar () {
  const [nome, setNome] = useState('')
  const [marca, setMarca] = useState('')
  const [cor, setCor] = useState('')
  const [ano, setAno] = useState('')
  const [placa, setPlaca] = useState('')
  const [desc, setDesc] = useState('')
  const [preco, setPreco] = useState('')

  const history = useHistory()

  function addCar () {
    const data = {
      name: nome.toUpperCase(),
      marca: marca.toUpperCase(),
      cor: cor.toUpperCase(),
      ano: ano.toUpperCase(),
      placa: placa.toUpperCase(),
      descricao: desc.toUpperCase(),
      preco: preco.toUpperCase()
    }

    if (!nome || !marca || !cor || !ano || !placa || !desc || !preco) {
      alert('Preencha todos os campos!')
    } else {
      axios.post('http://localhost:3002/cars', data)
        .then((result) => {
          console.log(result)
          history.push('/')
        })
    }
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
          value={nome}/>

          <Label>Marca *</Label>
          <Input
          type="text"
          onChange={(e) => setMarca(e.target.value)}
          value={marca}/>

          <Label>Cor *</Label>
          <Input
          type="text"
          onChange={(e) => setCor(e.target.value)}
          value={cor}/>

          <Label>Ano *</Label>
          <Input
          type="text"
          onChange={(e) => setAno(e.target.value)}
          value={ano}/>

          <Label>Placa *</Label>
          <Input
          type="text"
          onChange={(e) => setPlaca(e.target.value)}
          value={placa}/>

          <Label>Preço *</Label>
          <Input
          type="number"
          onChange={(e) => setPreco(e.target.value)}
          value={preco}/>

          <Label>Descrição *</Label>
          <Input
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}/>

          <BtnSalvar onClick={addCar}>SALVAR</BtnSalvar>
        </ContainerForm>
      </SubContainer>

    </Container>

  )
}
