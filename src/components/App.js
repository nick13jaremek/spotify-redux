import React, {Component} from 'react';
import {connect} from 'react-redux';

import NavigationBar from './NavigationBar';
import Index from './Index';
import Footer from './Footer';
export class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
  }

  render() {
    console.log('APp', this.props)
    return (
      <div {...this.props}>
        <NavigationBar />
        {this.props.children || <Index />}
        <Footer />
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