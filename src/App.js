import React, { Component } from 'react'
import './css/bootstrap.css'
import './css/bootstrap-theme.css'
import './css/App.css'
import 'react-datepicker/dist/react-datepicker.css'
import { connect } from "react-redux"
import * as act from "./actions/mediaActions"
import Results from './components/results'
import DateRange from './components/date-range'
import Filters from './components/filters'
import MediaDisplay from './components/media-display'
import moment from 'moment'

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
    let rangeValue = parseInt(range.range,10)
    if (isNaN(rangeValue)) {
      rangeValue = 0
    }
    const from = range.date.clone().subtract(range.range, 'days')
    const to = range.date.clone().add(range.range, 'days')
    this.props.dispatch(act.changeRange({from, to}))
  }
  onFilterChange(filterName) {
    this.props.dispatch(act.toggleFilter(filterName))
  }
  setSelectedMedia(media) {
    this.props.dispatch(act.setSelectedMedia(media))
  }
  render() {
    const { fetching, results, query, dbLastUpdated } = this.props
    const range = Math.round(moment.duration((query.toDate - query.fromDate) / 2.0).asDays())
    const date = query.fromDate.clone().add(range, 'days')
    const content = fetching.fetching
      ? <div>Fetching...</div>
      : <Results results={results} setSelectedMedia={::this.setSelectedMedia}></Results>
    return (
      <div className="App">
        <table>
          <tr>
            <td class="search-and-selected">
              <div class='search'>
                <DateRange date={date} range={range} onChange={::this.onRangeChange}></DateRange>
                <Filters filter={query.types} onChange={::this.onFilterChange}></Filters>
                <button onClick={::this.search}>Search</button>
              </div>
              <div class="media-player">
                <MediaDisplay media={this.props.selectedMedia}></MediaDisplay>
              </div>
            </td>
            <td class="results">
              <div class="results-list">
                {content}
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;
