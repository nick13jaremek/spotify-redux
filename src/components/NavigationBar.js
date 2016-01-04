import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Router, Link} from 'react-router';
import history from '../constants/History';

const ACTIVE = {active: 'active'};
//TODO: break NavigationBar component into smaller components so that testing is simpler
export default class NavigationBar extends Component {

  /*
   * Router and Link components allow to set an ACTIVE state for an item of the Navigation bar by setting the 'activeStyle'
   * prop. This prop will bet set for the item whose 'to' prop patch matches agains the browser path.
   */
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Spotify-Redux</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="#"><span>A React-Redux Spotify feed panel</span></a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li role="presentation"><Link to="/artists" activeStyle={ACTIVE}>Artists</Link></li>
              <li role="presentation"><Link to="/albums" activeStyle={ACTIVE}>Albums</Link></li>
              <li role="presentation"><Link to="/songs" activeStyle={ACTIVE}>Songs</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}