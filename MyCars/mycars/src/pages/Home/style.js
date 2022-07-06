import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vw;
  align-items:center;
  flex-direction:column;
  background-color: #cdcdcd;
`
export const SubContainer = styled.div`
  display: flex;
  width: 60%;
  min-height: 100vw;
  align-items:center;
  flex-direction:column;
  background-color: #fff;
`

export const Search = styled.input`
  display: flex;
  width: 80%;
  height: 50px;
  align-items:center;
  flex-direction:column;

  margin: 50px 0px 20px 0px;
  padding: 20px;

  border: none;
  border-radius: 30px;
  background-color: #40E0D0;

  ::placeholder{
    font-size: 16px;
  }

  :focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

