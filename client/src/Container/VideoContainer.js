import React, { Component } from "react";
import YouTube from 'react-youtube';
 
class VideoContainer extends Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

  render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };


      
    return (
      <div className="Container">

      <YouTube
        videoId="kkygcbr1ec8"
        opts={opts}
        onReady={this._onReady}
      />		
      </div>
    );
  }
}
 
export default VideoContainer;