import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtists} from '../actions/artists';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';
/*
* This component is related to the Artists items from the Spotify Web API. Please note that it uses the 'connect'
* function in order to receive the 'dispatch' method in the props from the parent 'Provider' component. Artists will be
* fetched by this component, not by its parent 'App' component.
* */
export class Artists extends Component {

  componentWillMount() {
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    //dispatch(getArtists());
  }

  // TODO: divide the number of artists between a fixed-sized number which will be the number of items per row. Then, create as many rows as needed to populate a grid-like panel of artists.
  renderArtists() {
    const chunk = 5;
    const {items} = this.props.artists;

    let result = [];

    for (let i = 0; i < items.length; i += chunk) {
      let artistCards = items
        .slice(i, i + chunk)
        .map((artist, idx) => {
          return <ArtistCard key={artist.id} artist={artist} />
      });

      if (artistCards.length < chunk) {
        for (let j = 0; j < chunk - artistCards.length + 1; j++) {
          artistCards.push(<div className="col-md-2" key={'artist-placeholder-' + j}></div>);
        }
      }

      result.push(<div className="row equal" key={'songs-row-' + i}>{artistCards}</div>);
    }

    if (!result || result.length === 0) {
      return <SearchBar />;
    }

    return result;
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