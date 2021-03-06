import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vw;
  align-items:center;
  flex-direction:column;
  background-color: #cdcdcd;

  @media (max-width:860px){
    background-color: #fff;
  }
`
export const SubContainer = styled.div`
  display: flex;
  width: 60%;
  min-height: 100vw;
  align-items:center;
  flex-direction:column;
  background-color: #fff;


  @media (max-width:860px){
    width:100%;
    padding: 0px 20px 0px 20px;
  }
`

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  padding: 50px 0px 20px 10px;

  @media (max-width:860px){
    width:100%;
    padding: 50px 10px 20px 10px;
  }
`

export const Img = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;

  :hover{
    background-color: #EA5050;
    border-radius:30px;
  }
`

export const Search = styled.input`
  display: flex;
  width: 80%;
  height: 50px;
  align-items:center;
  flex-direction:column;

  padding: 20px;

  border: none;
  border-radius: 30px;
  background-color: #C5E4DF;

  ::placeholder{
    font-size: 16px;
  }

  :focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media (max-width:860px){
    width:100%;
  }
`
