import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtistDetails} from '../actions/artistDetails';
import {getArtistAlbums} from '../actions/artistAlbums';

import ArtistMainDetails from './ArtistMainDetails';
import ArtistAlbums from './ArtistAlbums';

export class ArtistView extends Component {
  constructor(props) {
    console.log('ArtistView');
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
    const {artist} = this.props;
    const {albums} = this.props;
    console.log('Artist', artist);
    console.log('Albums', albums);
    return (
      <div className="container-fluid">
        <div className="row">
          <ArtistMainDetails details={artist.details} />
          <ArtistAlbums albums={albums.items} artist={artist.details}/>
        </div>
      </div>
    )
  }
}

/*
 * This function injects some of the fields of the application state into this component props.
 */
function mapStateToProps(state) {
  const {artist, albums} = state;
  console.log('mappedAlbums', albums.toJS());
  return {
    artist: artist.toJS(), // artist contains the fields: 'isFetching' and 'details' which are available when converting from Immutable objects to plain JS equivalents
    albums: albums.toJS()
  };
}

export const ArtistViewContainer = connect(mapStateToProps)(ArtistView);