import React, { Component } from 'react'

export default class VideoPlayer extends Component {
  render() {
    const { source } = this.props

    return (
      <video width="500" height="375" controls autoPlay src={source} type="video/mp4"></video>
    )
  }
}