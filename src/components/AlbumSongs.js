import React, {Component} from 'react';

export default class AlbumSongs extends Component {
  constructor(props) {
    super(props);
  }

  formatSongDuration(milliseconds) {
    let seconds = milliseconds / 1000;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.ceil(seconds % 60);
    let formattedSongSeconds = remainingSeconds.toString().length == 1 ? '0'+remainingSeconds : remainingSeconds;
    return minutes + ':' + formattedSongSeconds;
  }

  renderSongs() {
    const {details} = this.props;

    if (!details || (details && !details.tracks)) {
      return null;
    };

    const tracks = details.tracks.items;

    let result = [];

    tracks.forEach((track) => {
      result.push(
        <tr key={track.id}>
          <th>{track.track_number}</th>
          <td>{track.name}</td>
          <td>{track.explicit ? <span className="label label-danger">Explicit</span> : ' '}</td>
          <td>{this.formatSongDuration(track.duration_ms)}</td>
        </tr>
      );
    });

    return result;
  }
  render() {
    const {details} = this.props;
    return (
      <div className="col-md-9 col-sm-9">
        <h1>Album tracks</h1>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th> </th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSongs()}
          </tbody>
        </table>
      </div>
    );
  }
}