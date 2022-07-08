import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: auto;
  align-items:flex-start;
  flex-direction:column;

  background-color: #EA5050;
  margin-bottom: 50px;
  padding: 30px;
  cursor: pointer;
  :hover{
    background-color: #F27C7C;
  }

  @media(max-width:860px){
    width: 100%;
  }
`

export const SubContainer = styled.div`
  align-self: flex-end;
`

export const Info = styled.h1`
  font-size: 14px;
  font-weight: 100;
  color: #fff;
  text-align: start;
  margin-bottom: 10px;
`

export const Img = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer ;

  :hover{
    background-color: #fff;
    border-radius: 50%;
  }
`
