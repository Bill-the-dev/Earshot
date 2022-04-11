import React from 'react'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions'

import PlaylistEdit from '../../components/home/main_container/playlist/playlist_edit_container' 

const Modal = ({modal, closeModal}) => {
  // debugger
  if (!modal) return null

  switch (modal) {
    case 'PlaylistEdit':
      // debugger
      return (
        <div className='modal-body' onClick={closeModal}>
          <div className='modal-child' onClick={e => e.stopPropagation()}>
            <PlaylistEdit />
          </div>
        </div>
      )
  
    default:
      return null;
  }
}

const mSTP = (state) => {
  return ({
    modal: state.modal,
    playlists: state.entities.playlists,
    songs: state.entities.songs,
    currentUser: state.entities.users[state.session.id],
  })
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mSTP, mDTP)(Modal))