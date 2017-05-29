import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import { Tabs, Tab } from 'material-ui/Tabs'

import ExpressTable from '../component/ExpressTable'
import EmployeeTable from '../component/EmployeeTable'
import config from '../config'
import './Login.css'

export default class Manage extends Component {
  state = {
    express: [],
    employee: [],
    redirect: false,
    tab: 'expressManagement'
  }

  componentWillMount() {
    this.getExpress()
  }

  handleTabChange = (tab) => {
    this.setState({tab}, this.getData)
  }
  getData = () => {
    if (this.state.tab === 'expressManagement') {
      this.getExpress()
    } else {
      this.getEmployee()
    }
  }

  getExpress = () => {
    fetch(`${config.server}/api/express`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('token')
      }
    }).then(r => r.json())
      .then(express => this.setState({express}))
      .catch(() => this.setState({redirect: true}))
  }

  getEmployee = () => {
    fetch(`${config.server}/api/employee`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('token')
      }
    }).then(r => r.json())
      .then(employee => this.setState({employee}))
      .catch(() => this.setState({redirect: true}))
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to="/admin" />
    }
    return (
      <div className="Admin">
        <AppBar title="物流信息管理" showMenuIconButton={false}/>
        <Tabs value={this.state.tab} onChange={this.handleTabChange}>
          <Tab label="物流管理" value="expressManagement">
            <ExpressTable express={this.state.express} />
          </Tab>
          <Tab label="人员管理" value="employeeManagement">
            <EmployeeTable employee={this.state.employee} />
          </Tab>
        </Tabs>
      </div>
    )
  }
}