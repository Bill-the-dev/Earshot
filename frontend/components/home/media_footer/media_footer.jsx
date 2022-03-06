import React from 'react'
// icons
import playIcon from '../../../../app/assets/images/media_bar/play-solid.svg';
import pauseIcon from '../../../../app/assets/images/media_bar/pause-solid.svg';


class MediaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.playAudio = this.playAudio.bind(this)
  }
  
  componentDidMount(){
    this.props.fetchSongs();
    
    // debugger
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentSong !== this.props.currentSong){
      this.setState(this.props.currentSong)
    }
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    let btnPlayPause = playIcon
  
    if (audioEl.paused) {
      audioEl.play()
      this.btnPlayPause = pauseIcon;
      // playState ?
    } else {
      audioEl.pause()
      this.btnPlayPause = playIcon;
      // playState ?
    }
  }


  muteAudio() {
    const muteIconContainer = document.getElementById('mute-icon');
    muteIconContainer.addEventListener('click', () => {
    if (audioEl.muted) {
      audioEl.mute = false;
      // muteState ?
    } else {
      audioEl.muted = true;
      // muteState ?
    }
  })

  }

  render(){
    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
    }
    return (
      <div className="media-footer">
        {/* TRACK */}
        <div className="current-track">
          <div className="ct-art"></div>
          <div className="ct-track-info">
            <div className="ct-title">ct-Title</div>
            <div className="ct-artist">ct-Artist</div>
          </div>
          <div className="ct-like">{'<3'}</div>      
        </div>
        {/* MEDIA CONTROLS CTR */}
        {/* <div id="audio-player-container">  */}
        <div className="media-player">
          <audio className="audio-element" src={this.state.songUrl} preload="metadata"></audio>
          <button onClick={this.playAudio} id="play-pause-btn">
            <img id="play-pause-icon" src={this.btnPlayPause} alt="play-pause" />  
          </button>
          <div className="track-time">
            <div id="current-time" >0:00</div>
            <div id="duration" >0:00</div>
          </div>
        </div>
        {/* </div> */}
        {/* MEDIA CONTROLS RIGHT */}
        <div className="media-controls">Media Controls
          <output id="volume-output">100</output>
          <input type="range" id="volume-slider" max="100" value="100"/>
          
          <button id="mute-icon" onClick={this.muteAudio}>Mute</button>
        </div>
      </div> 
      
      
    )
  }

  

}



export default MediaFooter






// class MediaPlayer3 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       audioState: 'paused',  // paused or playing
//       currentSong: '',
//       currentAlbum: '',
//       songDuration: null
//     }
//     this.toggleAudio = this.toggleAudio.bind(this);
//   }

  
//   componentDidMount(){};
  
//   componentDidUpdate(){};
  
//   toggleAudio() {
//     const audioEl = document.getElementsByClassName("audio-el")
//     if (this.audioEl.paused) {
//       return this.audioEl.play()
//     } else {
//       return this.audioEl.pause()
//     }
//     // if (this.state.audioState.value = 'paused') {
//     //   audio.play()
//     //   this.setState({
//     //     audioState: 'playing'
//     //   }) 
//     // } else {
//     //   audio.pause();
//     //   this.setState({
//     //     audioState: 'paused'
//     //   }) 
//     // }
//   }
// //  <div>
// //       //   <button onClick={this.toggleAudio}>
// //       //       <span>Play Audio</span>
// //       //   </button>
// //       //   <audio className={"audio-element"}>
// //       //     <source src={song_url}/>
// //       //   </audio>
// //       // </div>
  
//   render(){
//     let song_url = "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--52b35ddfefd7e57aab46422ec95c71424a7f17e7/04+Meet+Me+In+the+City.m4a";

//     return(
//       <div id="audio-player-container">
//         <p>Audio Player</p>
//         <audio id="audio-el" src={song_url} preload="metadata"></audio>
//         <button id="play-pause-btn" onClick={this.toggleAudio}>Play/Pause</button>
//         <span 
//           className="time" id="current-time"
//           >0:00
//         </span>
//         <span
//           className="time" id="duration"
//           >0:00
//         </span>
//         <output id="volume-output">100</output>
//         <input type="range" id="volume-slider" max="100" value="100"/>
        
//         <button id="mute-icon">Mute</button>
//       </div>
//     )
//   }



// }