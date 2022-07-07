import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: auto;
  align-items:flex-start;
  flex-direction:column;

  background-color: #A52A2A;
  margin-bottom: 50px;
  padding: 30px;

  @media(max-width:860px){
    width: 100%;
  }
`

export const Desc = styled.h1`
  font-size: 16px;
  font-weight: 100;
  color: #fff;
  text-align: start;
  margin-bottom: 10px;
`
