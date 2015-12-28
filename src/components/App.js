import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtists} from '../actions/artists';

import NavigationBar from './NavigationBar';

export class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    dispatch(getArtists());
  }

  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {artists} = state;
  return {
    artists
  };
}

export const AppContainer = connect(mapStateToProps)(App);