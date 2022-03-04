import React from 'react'

class MediaPlayer extends React.Component {
  // constructor(props){
  //   super(props)
  //   // this.state = {song: this.props.song}
  // }

  componentDidMount(){
    debugger
    // this.props.fetchSong(0)
  }

  
  playAudio() {
    // debugger
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    // debugger
    // let song_url = this.props.song;
    // let song_url = this.props.song.songUrl;
    let song_url = "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--52b35ddfefd7e57aab46422ec95c71424a7f17e7/04+Meet+Me+In+the+City.m4a";
    return(
      <div>
        <button onClick={this.playAudio}>
            <span>Play Audio</span>
        </button>
        <audio className={"audio-element"}>
          <source src={song_url}/>
        </audio>
      </div>
    )
  }
}

export default MediaPlayer;