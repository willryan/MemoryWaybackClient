import React, { Component } from 'react'

const fileNameOnly = function(fullPath) {
  const parts = fullPath.split("/")
  return parts[parts.length-1];
}

export default class Results extends Component {
  setSelectedMedia(media) {
    this.props.setSelectedMedia(media)
  }
  render() {
    const { results } = this.props
    const buildPhoto = (p) => {
      return (<li key={p}>
        <div>
          <img src={p} alt={p} width="50" height="30" onClick={this.setSelectedMedia.bind(this,p)}></img>
          <a href={p}>{fileNameOnly(p)}</a>
        </div>
      </li>)
    }
    const buildVideo = (v) => {
      return (<li key={v}>
        <div>
          <img src="/assets/video.jpg" alt="video" width="50" height="30" onClick={this.setSelectedMedia.bind(this,v)}></img>
          <span>
            <a href={v}>{fileNameOnly(v)}</a>
          </span>
        </div>
      </li>)
    }
    const mappedMedias = results.map(m => {
      const photos = m.photos.map(buildPhoto)
      const videos = m.videos.map(buildVideo)
      return (
        <li key={m.date}> 
          <div>Media taken on {m.date}</div>
          <ul> {photos} </ul>
          <ul> {videos} </ul>
        </li>
      )
    })

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