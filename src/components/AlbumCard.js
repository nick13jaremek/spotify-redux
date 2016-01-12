import React, {Component} from 'react';
import {ALBUM_PLACEHOLDER} from '../constants/Config';
import {Router, Link} from 'react-router';

export default class AlbumCard extends Component {

  render() {
    const {album} = this.props;

    const imageUrl = (album.images && album.images.length ? album.images[0].url : ALBUM_PLACEHOLDER);

    return (
      <div className="col-md-2 col-sm-2">
        <div className="thumbnail">
          <img src={imageUrl} className="img-responsive center-block fxd-img"/>
          <div className="caption">
            <Link to={`album/${album.id}`} className="btn btn-default btn-md" role="button">More Info</Link>
          </div>
        </div>
      </div>
    );
  }
}