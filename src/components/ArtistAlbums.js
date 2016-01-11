import React, {Component} from 'react';

export default class ArtistAlbums extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {artist, albums} = this.props;
    console.log('ArtistAlbums::artist', artist);
    console.log('ArtistAlbums::albums', albums);
    return (
      <div className="col-md-9 col-sm-8">
        <h1 className="page-header">Dashboard</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      </div>
    );
  }
}