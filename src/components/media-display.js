import React, { Component } from 'react'
import VideoPlayer from './video-player'
import ImageDisplay from './image-display'

export default class MediaDisplay extends Component {
  render() {
    const { media } = this.props
    if (!!media) {
      const link = media.link
      const content = (media.type === "Video")
        ? (
          <VideoPlayer source={link}></VideoPlayer>
        )
        : (
          <ImageDisplay source={link}></ImageDisplay>
        )
       return (
         <div class="media-display">
           {content}
         </div>
       )
     } else {
       return (
         <div>Nothing selected.</div>
       )
     }
  }
}