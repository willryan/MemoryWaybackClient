import React, { Component } from 'react'

export default class DateRange extends Component {
  render() {
    return (
      <div class="date-range">
        <div>From: {this.props.from}</div>
        <div>To: {this.props.to}</div>
      </div>
    );
  }
}