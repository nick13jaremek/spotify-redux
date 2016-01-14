import React, {Component} from 'react';
import {ALBUM_PLACEHOLDER} from '../constants/Config';
import {Router, Link} from 'react-router';

export default class ArtistCard extends Component {

  renderArtistData(artistData) {

    const name = artistData.name ? <h4 className="">{artistData.name}</h4> : null;
    const popularity = artistData.popularity ? <li><span>Popularity: {artistData.popularity}</span></li> : null;
    const genre = (artistData.genres && artistData.genres.length > 0) ?  <li><span>Genre: {artistData.genres[0]}</span></li> : null;
    const link = artistData.id ? <Link to={`/artist/${artistData.id}`} className="btn btn-default btn-xs" role="button">More Info</Link> : null;

    return (
      <div className="caption">
        {name}
        <ul>
          {popularity}
          {genre}
        </ul>
        {link}
      </div>
  );
  }

  render() {
    const {artist} = this.props;
    const imageUrl = (artist.images && artist.images.length ? artist.images[0].url : ALBUM_PLACEHOLDER);

    return (
      <div className="col-md-2">
        <div className="thumbnail">
          <img src={imageUrl} className="img-responsive center-block fxd-img"/>
          {this.renderArtistData(artist)}
        </div>
      </div>
    );
  }
}