import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAlbumDetails} from '../actions/albums';

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
    const {albums} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <AlbumMainDetails details={albums.details} />
          <AlbumSongs details={albums.details} />
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const {albums} = state;
  return {
    albums: albums.toJS()
  };
}

export const AlbumViewContainer = connect(mapStateToProps)(AlbumView);
