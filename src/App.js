import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Express from './page/Express'
import Login from './page/Login'
import Manage from './page/Manage'

const App = () =>
  <Router>
    <div style={{height: '100%'}}>
      <Route path="/" component={Login} />
      <Route path="/express" component={Express} />
      <Route path="/manage" component={Manage} />
    </div>
  </Router>

export default App