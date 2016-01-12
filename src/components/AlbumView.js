import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAlbumDetails} from '../actions/albumDetails';

import AlbumMainDetails from './AlbumMainDetails';
import AlbumSongs from './AlbumSongs';

export class AlbumView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {id}  = this.props.params;
    const {dispatch} = this.props;
    dispatch(getAlbumDetails(id));
  }

  render() {
    const {album} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <AlbumMainDetails details={album.details} />
          <AlbumSongs details={album.details} />
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const {album} = state;
  return {
    album: album.toJS()
  };
}

export const AlbumViewContainer = connect(mapStateToProps)(AlbumView);
