import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtists} from '../actions/artists';

/*
* This component is related to the Artists items from the Spotify Web API. Please note that it uses the 'connect'
* function in order to receive the 'dispatch' method in the props from the parent 'Provider' component. Artists will be
* fetched by this component, not by its parent 'App' component.
* */
export class Artists extends Component {

  componentDidMount() {
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    dispatch(getArtists());
  }

  render() {
    const {dispatch} = this.props;
    console.log('Props', this.props, dispatch);
    return (
      <div>
        Selected Artists
      </div>
    );
  }
}

/*
* This function injects some of the fields of the application state into this component state. Since this component
* deals with 'artists' items, it injects the 'artists' reducer into its state to dispatch actions for artists fetching
* and so.
*/
function mapStateToProps(state) {
  const {artists} = state;
  return {
    artists
  };
}

export const ArtistsContainer = connect(mapStateToProps)(Artists);