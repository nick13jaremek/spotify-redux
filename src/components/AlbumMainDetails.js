import React, {Component} from 'react';

import {ALBUM_PLACEHOLDER} from '../../src/constants/Config';

export default class AlbumMainDetails extends Component {

  renderAlbumSongs() {
    return (<div>Songs</div>);
  }

  render() {
    const {details} = this.props;
    console.log('AlbumMainDetails::details', details);
    return (
      <div>
        {this.renderAlbumSongs()}
      </div>
    );
  }
}