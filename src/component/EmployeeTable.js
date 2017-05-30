import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
  from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'

export default class DataTable extends Component {
  state = {
    open: false,
    phone: '',
    name: '',
    password: '',
  }
  openDialog = () => {
    this.setState({
      open: true,
    })
  }

  closeDialog = () => {
    this.setState({
      open: false,
      phone: '',
      name: '',
      password: '',
    })
  }

  createEmployee = () => {
    this.props.createEmployee(this.state)
    this.closeDialog()
  }

  render () {
    return (
      <Paper>
        <Table selectable={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>姓名</TableHeaderColumn>
              <TableHeaderColumn>电话</TableHeaderColumn>
              <TableHeaderColumn>操作</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.employee.map(v => (
              <TableRow key={v.userId}>
                <TableRowColumn>{v.userId}</TableRowColumn>
                <TableRowColumn>{v.name}</TableRowColumn>
                <TableRowColumn>{v.phone}</TableRowColumn>
                <TableRowColumn>
                  <TableRowColumn>
                    <FlatButton secondary label="删除" onClick={this.props.delete(v.userId)} />
                  </TableRowColumn>
                </TableRowColumn>
              </TableRow>
            ))}
            <TableRow>
              <TableRowColumn colSpan="4" style={{textAlign: 'center'}}>
                <RaisedButton label="新增快递员" primary fullWidth onClick={this.openDialog}/>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        <Dialog
          title="新建快递员"
          open={this.state.open}
          onRequestClose={this.closeDialog}
        >
          <TextField
            hintText="请输入电话号码"
            floatingLabelText="电话号码"
            type="text"
            fullWidth
            value={this.state.phone}
            onChange={e => this.setState({phone: e.target.value})}
          />
          <TextField
            hintText="请输入姓名"
            floatingLabelText="姓名"
            type="text"
            fullWidth
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})}
          />
          <TextField
            hintText="请输入密码"
            floatingLabelText="密码"
            type="password"
            fullWidth
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
          />
          <RaisedButton label="确认" primary fullWidth onClick={this.createEmployee} />
          <FlatButton label="取消" primary fullWidth onClick={this.closeDialog} />
        </Dialog>
      </Paper>
    )
  }
}