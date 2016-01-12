import React, {Component} from 'react';

export default class AlbumSongs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {details} = this.props;
    console.log('AlbumSongs::details', details);
    return (
      <div>AlbumSongs</div>
    );
  }
}