import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from "react-redux"
import { fetchMedia } from "./actions/mediaActions"

@connect((store) => {
  return {
    dbLastUpdated: store.dbLastUpdated,
    query: store.query,
    results: store.results
  };
})

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMedia())
  }
  render() {
    const { results } = this.props;
    const mappedMedias = results.map(m => <li key={m.id}>{m.name}</li>)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{mappedMedias}</ul>
      </div>
    );
  }
}

export default App;
