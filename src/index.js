import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { blue500 } from 'material-ui/styles/colors'

import App from './App'
import './index.css'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  },
})

injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
