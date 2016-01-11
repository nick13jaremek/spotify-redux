import React, {Component} from 'react';
import {ALBUM_PLACEHOLDER} from '../constants/Config';
import {Router, Link} from 'react-router';

export default class ArtistCard extends Component {

  render() {
    const {artist} = this.props;
    const imageUrl = (artist.images.length ? artist.images[0].url : "/assets/" + ALBUM_PLACEHOLDER);

    return (
      <div className="col-md-2">
        <div className="thumbnail">
          <img src={imageUrl} className="img-responsive center-block fxd-img"/>
          <div className="caption">
            <h4 className="">{artist.name}</h4>
            <ul>
              <li><span>Popularity: {artist.popularity}</span></li>
              <li><span>Genre: {artist.genres.length ? artist.genres[0] : 'unknown'}</span></li>
            </ul>
            <Link to={`/artist/${artist.id}`} className="btn btn-default btn-xs" role="button">More Info</Link>
          </div>
        </div>
      </div>
    );
  }
}