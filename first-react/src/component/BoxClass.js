import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
      <div>
        <h1> { this.props.title } </h1>
        <p> { this.props.item && this.props.item.img }</p>  
        <h2> { this.props.result } </h2>
      </div>
    )
  }
}
