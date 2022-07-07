
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddCar from './pages/AddCars'
import UpdateCar from './pages/UpdateCars'

export default function RoutesApp () {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/addCar" component={AddCar}/>
        <Route path="/updateCar/:id" component={UpdateCar}/>
      </Switch>
  )
}
