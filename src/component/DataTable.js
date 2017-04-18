import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
  from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import QRCode from 'qrcode.react'
import Dialog from 'material-ui/Dialog'

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
              <TableHeaderColumn>类型</TableHeaderColumn>
              <TableHeaderColumn>重量</TableHeaderColumn>
              <TableHeaderColumn>发件人信息</TableHeaderColumn>
              <TableHeaderColumn>收件人信息</TableHeaderColumn>
              <TableHeaderColumn>二维码</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.express.map(v => (
              <TableRow>
                <TableRowColumn>{v.expressId}</TableRowColumn>
                <TableRowColumn>{v.type}</TableRowColumn>
                <TableRowColumn>{v.weight}</TableRowColumn>
                <TableRowColumn>{v.senderPhone}</TableRowColumn>
                <TableRowColumn>{v.receiverPhone}</TableRowColumn>
                <TableRowColumn>
                  <IconButton onClick={() => this.showCode(v.code)}>
                    <FontIcon className="material-icons">code</FontIcon>
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog
          title="二维码"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {location.origin}/express?{this.state.code}}
          <QRCode value={`${location.origin}/express?${this.state.code}`} size="300" fgColor="#212121"/>
        </Dialog>
      </Paper>
    )
  }
}