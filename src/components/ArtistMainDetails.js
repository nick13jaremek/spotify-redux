import React, {Component} from 'react';

import {ALBUM_PLACEHOLDER} from '../../src/constants/Config';

export default class ArtistMainDetails extends Component {

  renderArtistDetails() {
    const {details, albums} = this.props;
    if (details.hasOwnProperty('length') && details.length === 0) {
      return <div></div>;
    }

    const image = (details.images && details.images.length > 0) ? details.images[0].url : ALBUM_PLACEHOLDER;

    const name = (details.name) ? <li className="list-group-item"><b>Name: </b><span>{details.name}</span></li> : null;

    const genre = (details.genres && details.genres.length > 0) ?
      <li className="list-group-item"><b>Genre: </b><span>{details.genres[0]}</span></li> : null;

    const popularity = details.popularity ?
      <li className="list-group-item"><b>Popularity: </b><span>{details.popularity}</span></li> : null;

    const followers = details.followers ?
      <li className="list-group-item"><b>Followers: </b><span>{details.followers.total}</span></li> : null;

    return (
      <div className="col-md-3 col-sm-4">
        <div className="thumbnail">
          <img src={image} className="img-responsive center-block fxd-img"/>
        </div>
        <ul className="list-group">
          {name}
          {genre}
          {popularity}
          {followers}
          <li className="list-group-item"><b>Albums: </b><span>{albums}</span></li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderArtistDetails()}
      </div>
    );
  }
}