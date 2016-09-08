import React, { Component } from 'react'

export default class ImageDisplay extends Component {
  render() {
    const { source } = this.props
    return (
      <img src={source} width="500" alt={source}></img>
    )
  }
}