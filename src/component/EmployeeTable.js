import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
  from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

export default class DataTable extends Component {
  state = {
    open: false
  }
  showCode = (code) => {
    this.setState({
      open: true,
      code
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
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
                    <FlatButton secondary label="删除" />
                    <FlatButton primary label="修改" />
                  </TableRowColumn>
                </TableRowColumn>
              </TableRow>
            ))}
            <TableRow>
              <TableRowColumn colSpan="4" style={{textAlign: 'center'}}>
                <RaisedButton label="新增快递员" primary fullWidth />
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    )
  }
}