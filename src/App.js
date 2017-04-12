import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Express from './component/Express'

const App = () =>
  <Router>
    <Route path="/express" component={Express}/>
  </Router>

export default App