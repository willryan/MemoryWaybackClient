import React, { Component } from 'react'

export default class Results extends Component {
  render() {
    const { results } = this.props
    const mappedMedias = results.map(m => <li key={m.id}>
      <div>{m.name}, taken at {m.date.toDateString()}</div>
    </li>)

    if (mappedMedias.length > 0) {
      return (
        <ul>{mappedMedias}</ul>
      )
    } else {
      return (
        <div>No results found.</div>
      )
    }
  }
}