import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

export default class DateRange extends Component {
  handleChangeFrom(from) {
    this.props.onChange({from, to: this.props.to});

  }
  handleChangeTo(to) {
    this.props.onChange({from: this.props.from, to});
  }
  render() {
    return (
      <div class="date-range">
        <div class="picker">
          <DatePicker
            inline
            showYearDropdown 
            scrollableYearDropdown
            selected={this.props.from}
            selectsStart  startDate={this.props.from}
            endDate={this.props.to}
            onChange={::this.handleChangeFrom} />
        </div>
        <div class="picker">
          <DatePicker
            inline
            showYearDropdown 
            scrollableYearDropdown
            selected={this.props.to}
            selectsEnd  startDate={this.props.from}
            endDate={this.props.to}
            onChange={::this.handleChangeTo} />
        </div>
      </div>
    );
  }
}