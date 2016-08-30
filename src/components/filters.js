import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    const { filter } = this.props
    const mappedTypes = filter.map(m => <li key={m}>{m}</li>)
    return (
      <ul>{mappedTypes}</ul>
    );
  }
}