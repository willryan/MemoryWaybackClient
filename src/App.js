import React, { Component } from 'react'
import './App.css'
import { connect } from "react-redux"
import { fetchMedia, changeRange, toggleFilter } from "./actions/mediaActions"
import Results from './components/results'
import DateRange from './components/date-range'
import Filters from './components/filters'

@connect((store) => {
  return {
    dbLastUpdated: store.results.dbLastUpdated,
    query: store.results.query,
    media: store.results.media
  };
})

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMedia())
  }
  onRangeChange(range) {
    this.props.dispatch(changeRange(range))
  }
  onFilterChange(filterName) {
     this.props.dispatch(toggleFilter(filterName))
  }
  render() {
    const { media, query, dbLastUpdated } = this.props;
    return (
      <div className="App">
        <div>Db last updated: {dbLastUpdated}</div>
        <Filters filter={query.types} onChange={::this.onFilterChange}></Filters>
        <DateRange from={query.fromDate} to={query.toDate}
                   onChange={::this.onRangeChange}></DateRange>
        <Results results={media}></Results>
      </div>
    );
  }
}

export default App;
