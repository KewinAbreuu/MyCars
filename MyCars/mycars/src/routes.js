
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import AddCar from './pages/AddCars'

export default function RoutesApp(){
  return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/addCar" component={AddCar}/>
      </Switch>
  )
}