import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  background-color: #8BCCC4;
  border-radius: 30px;

  :hover{
    background-color: #C5E4DF;
  }
`

export const TextBtn = styled.h1`
  font-size: 24px;
  color: #4f4f4f;
  text-decoration: none;
`
