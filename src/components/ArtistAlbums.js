import React, {Component} from 'react';
import AlbumCard from './AlbumCard';

export default class ArtistAlbums extends Component {
  constructor(props) {
    super(props);
  }

  renderAlbums() {
    const {albums} = this.props;

    const albumsPerRow = 3;
    let result = [];

    if (!albums || !albums.length) {
      return <div>No albums</div>;
    }

    for (let i = 0; i < albums.length; i += albumsPerRow) {
      let albumCards = albums
        .slice(i, i + albumsPerRow)
        .map((album) => {
          return <AlbumCard key={album.id} album={album} />
        });

      if (albumCards.length < albumsPerRow) {
        for (let j = 0; j < albumsPerRow - albumCards.length + 1; j++) {
          albumCards.push(<div className="col-md-2 col-sm-2" key={'album-placeholder-' + j}></div>);
        }
      }

      result.push(<div className="row equal" key={'albums-row-' + i}>{albumCards}</div>);
    }

    return result;
  }

  render() {
    return (
      <div className="col-md-9 col-sm-9 padded">
        {this.renderAlbums()}
      </div>
    );
  }
}