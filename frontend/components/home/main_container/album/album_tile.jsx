import React from 'react'
import { Link, Route } from 'react-router-dom'

class AlbumTile extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    debugger
    console.log(this.props)
  }

  testing() {
    debugger 
    console.log('maybe here?')
  }
  // onClick = {() => history.push(`/home/albums/${this.props.album.id}`)}
  render() {
    
    return (
      <div className="album-tile-container">
        <Link to={`/home/albums/${this.props.album.id}`}className='artist-album-tile-link'>
          <div className="at-tile" >
            <div className="at-art">
              <img className="at-art-img" src={this.props.album.albumArtUrl} alt="" />
            </div>
            <div className="at-title">{this.props.album.name}</div>
            <div className="at-year">{`${this.props.album.year}  |  Album`}</div>
          </div>
        </Link>
      </div>
      )
    };
  }


export default AlbumTile;


// props: 
// albumArtUrl: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6d6b5aa1ddd44aff9929ed5f2e15331e285de44b/zombie.jpg";
// artistId: 1;
// id: 1;
// name: "Zombie (USA)";
// year: 1977;