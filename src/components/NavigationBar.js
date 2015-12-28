import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class NavigationBar extends Component {

  render() {
    return (
      <Navbar fixedTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Spotify-Redux</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}><span>A React-redux Spotify feed panel</span></NavItem>
        </Nav>
      </Navbar>
    );
  }
}