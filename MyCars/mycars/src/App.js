import RoutesApp from './routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'

function App () {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <RoutesApp/>
    </BrowserRouter>
  )
}

export default App
