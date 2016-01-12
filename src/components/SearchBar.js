import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {getArtists} from '../actions/artists';
import {setSearchBarValue} from '../actions/inputs';

import {connect} from 'react-redux';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    const {dataType} = this.props;
    this.searchItems = this.searchItems.bind(this, dataType);
    this.setInputFieldValue = this.setInputFieldValue.bind(this);
  }

  setInputFieldValue(event) {
    const {dispatch} = this.props;
    dispatch(setSearchBarValue(event.target.value));
  }

  searchItems(itemType) {
    const value = this.props.value;
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    if (itemType === 'artists') {
      dispatch(getArtists(value));
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
              <h2>Start searching for artists here</h2>
              <form>
                <div className="col-md-6 col-md-offset-3">
                  <div className="input-group input-group-lg">
                    <input ref="artistName" type="text" className="form-control" placeholder="E.g. Leonard Cohen" onChange={this.setInputFieldValue} />
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