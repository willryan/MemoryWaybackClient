import React, { Component } from 'react'

export default class Filters extends Component {
  onChange(name) {
    this.props.onChange(name);
  }
  render() {
    const { filter } = this.props
    const mappedTypes = filter.map(m => <div key={m.name}>
      <input type="checkbox"
             checked={m.include}
             onChange={this.onChange.bind(this,m.name)}>
      </input>
      {m.name}
    </div>)
    return (
      <div>{mappedTypes}</div>
    );
  }
}