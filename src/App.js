import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Express from './page/Express'

const App = () =>
  <Router>
    <Route path="/express" component={Express}/>
  </Router>

export default App