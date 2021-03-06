import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100%;
  align-items:center;
  flex-direction:column;
  background-color: #fff;
`
export const SubContainer = styled.div`
  display: flex;
  width: 60%;
  min-height: 100vw;
  align-items:center;
  flex-direction:column;
  background-color: #cdcdcd;

  @media(max-width:860px){
    width:100%;
    padding: 0px 5px 0px 5px;
  }
`
export const ContainerForm = styled.div`
  display: flex;
  width: 60%;
  min-height: 100%;
  align-items:flex-start;
  flex-direction:column;
  background-color: #cdcdcd;
  padding: 54px 0px 0px 0px ;
`

export const Input = styled.input`
 width: 90%;
 height: 50px;
 background-color: #fff;
 border-radius: 30px;
 border:none;
 padding:0px 25px 0px 25px;
 margin-bottom: 30px;

 :focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media(max-width:860px){
    width:100%;
  }
`

export const Label = styled.h1`
  margin-left:20px;
  font-size: 16px;
  font-weight:100;
`

export const BtnSalvar = styled.button`
  width:100px;
  height:30px;
  background-color: #66CDAA ;
  align-self:flex-end;
  margin-bottom:20px;
  border:none;
  border-radius:30px;
  color:#4f4f4f;
  cursor: pointer;
  transition: all ease-in-out 80ms;

  :hover{
    background-color: #00FA9A;
  }

`
