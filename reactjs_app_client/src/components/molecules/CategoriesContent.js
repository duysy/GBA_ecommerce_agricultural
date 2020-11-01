import React, { Component } from 'react'
import './styles.css'
export default class extends Component {
  render() {
    return <div className="xxxx">Em lam dep noi dung item trong day {this.props.children}</div>
  }
}
