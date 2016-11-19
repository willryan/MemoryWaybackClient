import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

export default class DateRange extends Component {
  componentWillMount() {
    this.setState({range: this.props.range})
  }
  handleChangeDate(date) {
    this.props.onChange({date, range: this.props.range});
  }
  handleChangeRange(e) {
    let range = e.target.value;
    this.setState({range});
    range = parseInt(range);
    if (!isNaN(range))
    {
      this.props.onChange({date: this.props.date, range});
    }
  }
  render() {
    return (
      <div class="date-range">
        <DatePicker
          inline
          showYearDropdown 
          scrollableYearDropdown
          selected={this.props.date}
          onChange={::this.handleChangeDate} />
        <div class="range">
          within
          <input value={this.state.range} onChange={::this.handleChangeRange}></input>
          days
        </div>
      </div>
    );
  }
}