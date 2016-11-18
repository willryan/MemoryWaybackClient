import React, { Component } from 'react'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css'
import { connect } from "react-redux"
import * as act from "./actions/mediaActions"
import Results from './components/results'
import DateRange from './components/date-range'
import Filters from './components/filters'
import MediaDisplay from './components/media-display'

@connect((store) => {
  return {
    dbLastUpdated: store.results.dbLastUpdated,
    query: store.query,
    results: store.results.results,
    fetching: store.fetching,
    selectedMedia: store.selectedMedia.media
  }
})

class App extends Component {
  componentWillMount() {
    this.search();
  }
  search() {
    this.props.dispatch(act.fetchMedia(this.props.query));
  }
  onRangeChange(range) {
    this.props.dispatch(act.changeRange(range))
  }
  onFilterChange(filterName) {
     this.props.dispatch(act.toggleFilter(filterName))
  }
  setSelectedMedia(media) {
    this.props.dispatch(act.setSelectedMedia(media))
  }
  render() {
    const { fetching, results, query, dbLastUpdated } = this.props;
    const content = fetching.fetching
      ? <div>Fetching...</div>
      : <Results results={results} setSelectedMedia={::this.setSelectedMedia}></Results>
    return (
      <div className="App">
        <div>Db last updated: {dbLastUpdated}</div>
        <Filters filter={query.types} onChange={::this.onFilterChange}></Filters>
        <DateRange from={query.fromDate} to={query.toDate} onChange={::this.onRangeChange}></DateRange>
        <button onClick={::this.search}>Search</button>
        <div class="results">
          <div class="media-player">
            <MediaDisplay media={this.props.selectedMedia}></MediaDisplay>
          </div>
          <div class="results-list">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
