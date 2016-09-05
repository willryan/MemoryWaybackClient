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
    query: store.query,
    media: store.results.media,
    fetching: store.fetching
  }
})

class App extends Component {
  componentWillMount() {
    this.search();
  }
  search() {
    this.props.dispatch(fetchMedia(this.props.query));
  }
  onRangeChange(range) {
    this.props.dispatch(changeRange(range))
  }
  onFilterChange(filterName) {
     this.props.dispatch(toggleFilter(filterName))
  }
  render() {
    const { fetching, media, query, dbLastUpdated } = this.props;
    const results = fetching.fetching ? <div>Fetching...</div> : <Results results={media}></Results>
    return (
      <div className="App">
        <div>Db last updated: {dbLastUpdated}</div>
        <Filters filter={query.types} onChange={::this.onFilterChange}></Filters>
        <DateRange from={query.fromDate} to={query.toDate} onChange={::this.onRangeChange}></DateRange>
        <button onClick={::this.search}>Search</button>
        {results}
      </div>
    );
  }
}

export default App;
