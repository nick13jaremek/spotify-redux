import React, {Component} from 'react';

export default class Index extends Component {

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome to Spotify-Redux!</h1>
          <p>This is a sample application programmed using the React-Redux library, accompanied by several more components
          such as Webpack or React-Router.</p>

          <p>
          This web application uses the Spotify Web API to fetch artists, albums or songs. Click on any of the buttons on
          the navigation bar and start having fun!</p>
        </div>
      </div>
    );
  }
}