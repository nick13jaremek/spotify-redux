import React, {Component} from 'react';

import NavigationBar from './NavigationBar';
import Index from './Index';
import Footer from './Footer';
export class App extends Component {

  render() {
    return (
      <div {...this.props}>
        <NavigationBar />
        {this.props.children || <Index />}
        <Footer />
      </div>
    );
  }
}
