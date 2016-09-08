import React, { Component } from 'react'

export default class Results extends Component {
  setSelectedMedia(media) {
    this.props.setSelectedMedia(media)
  }
  render() {
    const { results } = this.props
    const mappedMedias = results.map(m => {
      const link = `/assets/${m.name}`;
      let content;
      if (m.type === "Photo") {
        content = (
          <div>
            <img src={link} alt={link} width="50" height="30" onClick={this.setSelectedMedia.bind(this,m)}></img>
            <a href={link}>{m.name}</a>, taken at {m.date.toDateString()}
          </div>
        )
      }
      else {
        content = (
          <div>
            <img src="/assets/video.jpg" alt="video" width="50" height="30" onClick={this.setSelectedMedia.bind(this,m)}></img>
            <span>
              <a href={link}>{m.name}</a>, taken at {m.date.toDateString()}
            </span>
          </div>
        )
      }
      return (<li key={m.id}>{content}</li>);
    });

    if (mappedMedias.length > 0) {
      return (
        <ul>{mappedMedias}</ul>
      )
    } else {
      return (
        <div>No results found.</div>
      )
    }
  }
}