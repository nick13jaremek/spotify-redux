import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import NavigationBar from '../../src/components/NavigationBar';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<NavigationBar {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('NavigationBar component', () => {

  it('renders the component', () => {
    const { output } = setup();

    // Navbar
    expect(output.type).to.equal(Navbar);
    expect(output.props.children).to.be.an('array');
    expect(output.props.children).to.have.length(3);

    let [header, nav, selector] = output.props.children;

    // Navbar Header
    expect(header.type).to.equal(Navbar.Header);
    expect(header.props.children).to.be.an('object');

    // Navbar Header Brand
    let brand = header.props.children;
    expect(brand.type).to.equal(Navbar.Brand);
    expect(brand.props.children).to.be.an('object');

    // Navbar Header Brand text
    let brandText = brand.props.children;
    expect(brandText.type).to.equal('a');
    expect(brandText.props.children)
    expect(brandText.props.children).to.equal('Spotify-Redux');

    // Nav
    expect(nav.type).to.equal(Nav);
    expect(nav.props.children).to.be.an('object');

    // NavItem
    let navitem = nav.props.children;
    expect(navitem.type).to.equal(NavItem);
    expect(navitem.props.children).to.be.an('object');

    // NavItem span child
    let title = navitem.props.children;
    expect(title.type).to.equal('span');
    expect(title.props.children).to.be.a('string');
    expect(title.props.children).to.equal('A React-redux Spotify feed panel');

    // Selector
    expect(selector.type).to.equal(Nav);
    expect(selector.props.children).to.be.an('array');
    expect(selector.props.children).to.have.length(3);

    let [artists, albums, songs] = selector.props.children;
    expect(artists.type).to.equal(NavItem);
    expect(artists.props.eventKey).to.equal(1);
    expect(artists.props.children).to.equal('Artists');
    expect(albums.type).to.equal(NavItem);
    expect(albums.props.eventKey).to.equal(2);
    expect(albums.props.children).to.equal('Albums');
    expect(songs.type).to.equal(NavItem);
    expect(songs.props.eventKey).to.equal(3);
    expect(songs.props.children).to.equal('Songs');
  });

  it('has no props', () => {
    const { props } = setup();
    expect(props).to.be.empty;
  });
});