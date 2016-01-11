import React, {Component} from 'react';

export default class ArtistMainDetails extends Component {

  render() {
    return (
      <div className="col-md-3 col-sm-4">
        <div className="thumbnail">
          <img src='/assets/album-placeholder.png' className="img-responsive center-block fxd-img"/>
        </div>
        <ul className="list-group">
          <li className="list-group-item"><b>Name:</b> <span>Bruce Springsteen</span></li>
          <li className="list-group-item"><b>Genre(s):</b> <span>Roots Rock</span></li>
          <li className="list-group-item"><b>Number of albums:</b> <span>32</span></li>
        </ul>
      </div>
    );
  }
}