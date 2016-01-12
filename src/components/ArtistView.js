import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtistDetails} from '../actions/artists';
import {getArtistAlbums} from '../actions/albums';

import ArtistMainDetails from './ArtistMainDetails';
import ArtistAlbums from './ArtistAlbums';

export class ArtistView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {id} = this.props.params;
    const {dispatch} = this.props;
    dispatch(getArtistDetails(id));
    dispatch(getArtistAlbums(id));
  }

  render() {
    const {id}  = this.props.params;
    const {artists} = this.props;
    const {albums} = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <ArtistMainDetails details={artists.details} albums={albums.total} />
          <ArtistAlbums albums={albums.items} artist={artists.details}/>
        </div>
      </div>
    )
  }
}

/*
 * This function injects some of the fields of the application state into this component props.
 */
export function mapStateToProps(state) {
  const {artists, albums} = state;
  return {
    artists: artists.toJS(), // artists contains the fields: 'isFetching' and 'details' which are available when converting from Immutable objects to plain JS equivalents
    albums: albums.toJS()
  };
}

export const ArtistViewContainer = connect(mapStateToProps)(ArtistView);