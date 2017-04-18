import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import Snackbar from 'material-ui/Snackbar'

import DataTable from '../component/DataTable'
import config from '../config'
import './Admin.css'

export default class Admin extends Component {
  state = {
    login: false,
    phone: '',
    password: '',
    error: ''
  }

  login = () => {
    fetch(`${config.server}/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: this.state.phone,
        password: this.state.password
      })
    }).then((r) => {
      if (!r.ok) {
        throw new Error('用户名或密码错误')
      } else {
        return r.json().then(user => {
          if (user.type === 'user') {
            throw new Error('该用户权限不足')
          }

          this.setState({
            login: true,
            token: r.headers.get('x-access-token')
          }, () => {
            this.getExpress()
          })
        })
      }
    }).catch(e => {
      this.showError(e.message)
    })
  }

  showError = (error) => {
    this.setState({error})
  }

  clearError = () => {
    this.setState({
      error: ''
    })
  }

  getExpress = () => {
    fetch(`${config.server}/api/express`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': this.state.token
      }
    }).then(r => r.json())
      .then(express => this.setState({express}))
  }

  render () {
    if (this.state.login) {
      return (
        <div className="Admin">
          <AppBar title="物流信息管理" showMenuIconButton={false}/>
          <DataTable express={this.state.express || []} />
        </div>
      )
    }

    if (!this.state.login) {
      return (
        <div className="Admin">
          <AppBar title="物流信息管理" showMenuIconButton={false}/>

          <Paper className="Admin-Login">
            <h1 className="Login-title">物流信息管理系统</h1>
            <form className="Login-form">
              <TextField
                hintText="请输入电话号码"
                floatingLabelText="电话号码"
                type="text"
                fullWidth
                value={this.state.phone}
                onChange={e => this.setState({phone: e.target.value})}
              />
              <TextField
                hintText="请输入密码"
                floatingLabelText="密码"
                type="password"
                fullWidth
                value={this.state.password}
                onChange={e => this.setState({password: e.target.value})}
              />

              <RaisedButton className="Login-button" primary label="登录" onClick={this.login}/>

              <Snackbar
                open={!!this.state.error}
                message={this.state.error ? this.state.error : ''}
                autoHideDuration={4000}
                onRequestClose={this.clear}
              />
            </form>
          </Paper>
        </div>
      )
    }
  }
}