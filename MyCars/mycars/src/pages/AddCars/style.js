import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vw;
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
`
export const ContainerForm = styled.div`
  display: flex;
  width: 60%;
  min-height: 100vw;
  align-items:flex-start;
  flex-direction:column;
  background-color: #cdcdcd;
  padding: 100px 0px 0px 0px ;
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
`