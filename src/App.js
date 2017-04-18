import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Express from './page/Express'
import Admin from './page/Admin'

const App = () =>
  <Router>
    <div style={{height: '100%'}}>
      <Route path="/express" component={Express} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>

export default App