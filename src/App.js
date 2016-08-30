import React, { Component } from 'react'
import './App.css'
import { connect } from "react-redux"
import { fetchMedia } from "./actions/mediaActions"
import Results from './components/results';
import DateRange from './components/date-range';
import Filters from './components/filters';

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
  render() {
    const { media, query, dbLastUpdated } = this.props;
    return (
      <div className="App">
        <div>Db last updated: {dbLastUpdated}</div>
        <Filters filter={query.types}></Filters>
        <DateRange from={query.fromDate} to={query.toDate}></DateRange>
        <Results results={media}></Results>
      </div>
    );
  }
}

export default App;
