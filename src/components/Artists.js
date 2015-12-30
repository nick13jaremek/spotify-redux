import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtists} from '../actions/artists';
import ArtistCard from '../components/ArtistCard';
/*
* This component is related to the Artists items from the Spotify Web API. Please note that it uses the 'connect'
* function in order to receive the 'dispatch' method in the props from the parent 'Provider' component. Artists will be
* fetched by this component, not by its parent 'App' component.
* */
export class Artists extends Component {

  componentWillMount() {
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    dispatch(getArtists());
  }

  // TODO: divide the number of artists between a fixed-sized number which will be the number of items per row. Then, create as many rows as needed to populate a grid-like panel of artists.
  renderArtists() {
    const {artists} = this.props;

    let items = artists.items.map((artist, idx) => {
      return <ArtistCard key={idx} artist={artist} />
    });
    return (
      <div className="container">
        <div className="row equal">
          {items}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderArtists()}
      </div>
    );
  }
}

/*
* This function injects some of the fields of the application state into this component props.
*/
function mapStateToProps(state) {
  const {artists} = state;
  return {
    artists: artists.toJS() // artists contains to fields: 'isFetching' and 'items' which are available when converting from Immutable objects to plain JS equivalents
  };
}

export const ArtistsContainer = connect(mapStateToProps)(Artists);