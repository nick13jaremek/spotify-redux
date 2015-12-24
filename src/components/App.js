import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBusinesses} from '../actions/business';

import NavigationBar from './NavigationBar';

export class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    dispatch(fetchBusinesses());
  }

  render() {
    return (
      <NavigationBar />
    );
  }
}

function mapStateToProps(state) {
  const {business} = state;
  return {
    business
  };
}

export const AppContainer = connect(mapStateToProps)(App);