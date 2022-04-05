import React from 'react';
import { Link, Route } from 'react-router-dom';

class CreatePlaylistForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { playlists } = this.props;
    if (!playlists) return null;

    return (
      <>
        <h1>Hellllooooo playlists</h1>
      </>
    )
  }
}

export default CreatePlaylistForm;