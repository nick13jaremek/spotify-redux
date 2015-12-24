import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from './NavigationBar';

export class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
  }

  render() {
    return (
      <NavigationBar />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export const AppContainer = connect(mapStateToProps)(App);