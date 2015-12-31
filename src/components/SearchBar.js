import React, {Component} from 'react';

export default class SearchBar extends Component {

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
                    <input type="text" className="form-control" placeholder="E.g. Leonard Cohen" />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Go!</button>
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