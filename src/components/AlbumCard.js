import React, {Component} from 'react';
import {ALBUM_PLACEHOLDER} from '../constants/Config';
import {Router, Link} from 'react-router';

export default class AlbumCard extends Component {

  render() {
    const {album} = this.props;
    const imageUrl = (album.images.length ? album.images[0].url : "/assets/" + ALBUM_PLACEHOLDER);

    return (
      <div className="col-md-2">
        <div className="thumbnail">
          <img src={imageUrl} className="img-responsive center-block fxd-img"/>
          <div className="caption">
            <ul>
              <li><span>Title: {album.name}</span></li>
              <li><span>Year: {album.year}</span></li>
              <li><span>Number of tracks: {album.tracks.length}</span></li>
            </ul>
            <Link to={`album/${album.id}`} className="btn btn-default btn-xs" role="button">More Info</Link>
          </div>
        </div>
      </div>
    );
  }
}