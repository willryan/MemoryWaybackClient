import React, { Component } from 'react'

export default class DateRange extends Component {
  handleChangeFrom(e) {
    const from = e.target.value;
    this.props.onChange({from, to: this.props.to});

  }
  handleChangeTo(e) {
    const to = e.target.value;
    this.props.onChange({from: this.props.from, to});
  }
  render() {
    return (
      <div class="date-range">
        <div>From:
          <input value={this.props.from} onChange={::this.handleChangeFrom}></input>
        </div>
        <div>To:
          <input value={this.props.to} onChange={::this.handleChangeTo}></input>
        </div>
      </div>
    );
  }
}