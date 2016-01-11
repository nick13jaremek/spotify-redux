import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtistDetails} from '../actions/artistDetails';

import ArtistMainDetails from './ArtistMainDetails';

export class ArtistView extends Component {
  constructor(props) {
    console.log('ArtistView');
    super(props);
    const {id} = this.props.params;
    const {dispatch} = this.props;
    dispatch(getArtistDetails(id));
  }

  render() {
    const {id}  = this.props.params;
    const {artist} = this.props;
    console.log('Artist', artist);
    return (
      <div className="container-fluid">
        <div className="row">
          <ArtistMainDetails />
          <div className="col-md-9 col-sm-8">
            <h1 className="page-header">Dashboard</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          </div>
        </div>
      </div>
    )
  }
}

/*
 * This function injects some of the fields of the application state into this component props.
 */
function mapStateToProps(state) {
  const {artist} = state;
  return {
    artist: artist.toJS() // artist contains the fields: 'isFetching' and 'details' which are available when converting from Immutable objects to plain JS equivalents
  };
}

export const ArtistViewContainer = connect(mapStateToProps)(ArtistView);