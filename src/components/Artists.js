import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';
/*
* This component is related to the Artists items from the Spotify Web API. Please note that it uses the 'connect'
* function in order to receive the 'dispatch' method in the props from the parent 'Provider' component. Artists will be
* fetched by this component, not by its parent 'App' component.
* */
export class Artists extends Component {


  renderArtists() {
    const chunk = 5;
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    const {items} = this.props.artists;
    const {input} = this.props.inputs;

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
      return <SearchBar dataType="artists" dispatch={dispatch} value={input} />;
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
  const {artists, inputs} = state;
  return {
    artists: artists.toJS(), // artists contains two fields: 'isFetching' and 'items' which are available when converting from Immutable objects to plain JS equivalents
    inputs: inputs.toJS() // inputs contains one field: 'input', which contains the value of some view's input type element
  };
}

export const ArtistsContainer = connect(mapStateToProps)(Artists);