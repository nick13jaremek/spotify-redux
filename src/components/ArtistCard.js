import React, {Component} from 'react';

export default class ArtistCard extends Component {

  render() {
    const {artist} = this.props;
    const imageUrl = (artist.images.length ? artist.images[0].url : "");

    return (
      <div className="col-md-3">
        <div className="thumbnail">
          <img src={imageUrl} className="img-thumbnail"/>
            <div className="caption">
              <h4 className="">{artist.name}</h4>
              <ul>
                <li><span>Popularity: {artist.popularity}</span></li>
                <li><span>Genre: {artist.genres.length ? artist.genres[0] : 'unknown'}</span></li>
              </ul>
              <a href={artist.external_urls.spotify} className="btn btn-default btn-xs" role="button">More Info</a>
            </div>
        </div>
      </div>
    );
  }
}