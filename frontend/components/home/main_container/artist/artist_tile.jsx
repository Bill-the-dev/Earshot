import React from 'react'
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class ArtistTile extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // debugger;
    console.log(this.props);
  }

  // handleClick(e) { 
  //   e.preventDefault()
  //   this.props.history.push(`/home/artists/${this.props.artist.id}`)
  // }

  render() {
    return (
      
        <li className="l-tile" id="l-tile-1">
          <div className="l-tile-art">
            <img className='lt-art' src={this.props.artist.artistImgUrl} alt="" />  
          </div>
          <Link to={`/home/artists/${this.props.artist.id}`} id='library-artist-link'>
            <p className="l-tile-title">{this.props.artist.name}</p>
          </Link>
        </li>
    )
  }
}  

export default ArtistTile;

