import React from 'react'
import './ListItem.css'

export default ({label, text}) =>
  <p className="ListItem">
    <span className="List-label">{label}</span>
    <span className="List-text">{text}</span>
  </p>