import React, {Component} from 'react';

import {ALBUM_PLACEHOLDER} from '../../src/constants/Config';

export default class AlbumMainDetails extends Component {

  renderAlbumSongs() {
    const {details} = this.props;

    if (details.hasOwnProperty('length') && details.length === 0) {
      return <div></div>;
    }

    const artists = (details.artists && details.artists.length > 0) ?
      <li className="list-group-item"><b>Artist(s): </b><span>{details.artists[0].name}</span></li> : null;

    const image = (details.images && details.images.length > 0) ? details.images[0].url : ALBUM_PLACEHOLDER;

    const name = (details.name) ? <li className="list-group-item"><b>Name: </b><span>{details.name}</span></li> : null;

    const genre = (details.genres && details.genres.length > 0) ?
      <li className="list-group-item"><b>Genre: </b><span>{details.genres[0]}</span></li> : null;

    const popularity = details.popularity ?
      <li className="list-group-item"><b>Popularity: </b><span>{details.popularity}</span></li> : null;

    const releaseDate = details.release_date ?
      <li className="list-group-item"><b>Release Date: </b><span>{details.release_date}</span></li> : null;

    const numberOfTracks = details.tracks ? <li className="list-group-item"><b>Tracks: </b><span>{details.tracks.total}</span></li> : null;

    return (
      <div className="col-md-3 col-sm-4">
        <div className="thumbnail">
          <img src={image} className="img-responsive center-block fxd-img"/>
        </div>
        <ul className="list-group">
          {name}
          {artists}
          {releaseDate}
          {genre}
          {popularity}
          {numberOfTracks}
        </ul>
      </div>
    );
  }

  render() {
    const {details} = this.props;
    return (
      <div>
        {this.renderAlbumSongs()}
      </div>
    );
  }
}