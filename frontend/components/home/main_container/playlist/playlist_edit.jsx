import React from 'react'
import { withRouter } from 'react-router-dom';
import musicNoteIcon from '../../../../../app/assets/images/music-note-pl.svg'


class PlaylistEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: parseInt(this.props.location.pathname.slice(19)),
      title: ''
    }

    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUpdate() {
    return (e) => {
      this.setState({
        title: e.target.value
      })
    }
  }

  handleSubmit(e) {
    if (this.state.title.length > 0) {
      e.preventDefault()
      this.props.editPlaylist(this.state)
      .then(this.props.closeModal())
    }
  }

  render() {
    if (!this.props.playlists) return null
    const playlistId = parseInt(this.props.location.pathname.slice(19))
    // const playlistId = this.state.playlistId
    const currentPlaylist = this.props.playlists[playlistId]

    debugger
    return (
      <div className='modal-edit-playlist-container'>
        <h1>Edit Details</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="pl-edit-art">
            <img src={musicNoteIcon} alt="playlist-art" id='pl-edit-img' />
          </div>
          <div className="pl-edit-info">
            <label className='pl-edit-name'>
              <input 
                type="text" 
                onChange={this.handleUpdate()} 
                placeholder={currentPlaylist.title}
                id="pl-edit-input" 
              />
            </label>            
            <input 
              type="submit"
              className="pl-btn-save" 
              value="Save"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(PlaylistEdit)