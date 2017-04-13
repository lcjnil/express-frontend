import React, {Component} from 'react'
import qs from 'query-string'
import AppBar from 'material-ui/AppBar'
import MediaQuery from 'react-responsive'
import QRCode from 'qrcode.react'

import ListItem from '../component/ListItem'

import './Express.css'

export default class Express extends Component {
  constructor() {
    super()

    document.title = '物流信息查询'
  }
  render() {
    const expressData = qs.parse(this.props.location.search)
    return (
      <div className="Express">
        <AppBar title="物流信息查询" showMenuIconButton={false} />
        <h2 className="Express-subheader">物流信息</h2>
        <ListItem label="ID" text={expressData.id} />
        <ListItem label="类型" text={expressData.t} />
        <ListItem label="重量" text={expressData.w} />

        <MediaQuery query='(max-width: 480px)'>
          <p className="Express-tip">想获取更多信息，<u>请下载 App </u>查看</p>
        </MediaQuery>

        <MediaQuery query='(min-width: 480px)' className="QRCode">
          <p className="Express-tip">请使用 App 扫码以下二维码，获取更多信息</p>
          <QRCode value={location.href} size="300" fgColor="#212121"/>
        </MediaQuery>
      </div>
    )
  }
}
