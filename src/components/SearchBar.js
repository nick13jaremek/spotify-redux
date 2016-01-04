import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {getArtists} from '../actions/artists';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    const {dataType} = this.props;
    this.searchItems = this.searchItems.bind(this, dataType);
  }
  searchItems(itemType) {
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    console.log('Search items', itemType);
    if (itemType === 'artists') {
      const artistName = ReactDOM.findDOMNode(this.refs.artistName).value;
      dispatch(getArtists(artistName));
    }
  }

  render() {
    console.log('Searchbar', this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
              <h2>Start searching for artists here</h2>
              <form>
                <div className="col-md-6 col-md-offset-3">
                  <div className="input-group input-group-lg">
                    <input ref="artistName" type="text" className="form-control" placeholder="E.g. Leonard Cohen" />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button" onClick={this.searchItems}>Go!</button>
                    </span>
                  </div>
                </div>
              </form>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}