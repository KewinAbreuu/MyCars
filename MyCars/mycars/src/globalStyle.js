import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    scroll-behavior: smooth;
    text-decoration: none;
  }
  body{
    max-width: 100vw;
    overflow-x: hidden;
  }
`
