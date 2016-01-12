import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import {Link} from 'react-router';

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

    // nav
    // --div container
    // ----div header
    // ------Link
    // ----div collapse
    // ------ul
    // ------ul

    // Navbar root
    expect(output.type).to.equal('nav');
    expect(output.props.className).to.equal('navbar navbar-inverse navbar-fixed-top');
    expect(output.props.children).to.be.an('object');

    // Navbar container
    let container = output.props.children;

    expect(container.type).to.equal('div');
    expect(container.props.className).to.equal('container-fluid');
    expect(container.props.children).to.be.an('array');
    expect(container.props.children).to.have.length(2);

    let [header, collapse] = container.props.children;

    // Navbar Header
    expect(header.type).to.equal('div');
    expect(header.props.className).to.equal('navbar-header');
    expect(header.props.children).to.be.an('object');

    // Navbar Header Brand
    let brand = header.props.children;
    expect(brand.type).to.equal(Link);
    expect(brand.props.children).to.be.a('string');

    // Navbar Header Brand text
    let brandText = brand.props.children;
    expect(brandText).to.equal('Spotify-Redux');

    // Navbar collapse
    expect(collapse.type).to.equal('div');
    expect(collapse.props.className).to.equal('collapse navbar-collapse')
    expect(collapse.props.children).to.be.an('array');
    expect(collapse.props.children).to.have.length(2);

    let [titleItem, selector] = collapse.props.children;

    // Navbar title item
    expect(titleItem.type).to.equal('ul');
    expect(titleItem.props.children).to.be.an('object');
    let title = titleItem.props.children;
    expect(title.type).to.equal('li');
    expect(title.props.children).to.be.an('object');
    let titleText = title.props.children;
    expect(titleText.type).to.equal('a');
    expect(titleText.props.children).to.be.an('object');
    expect(titleText.props.children.type).to.equal('span');
    expect(titleText.props.children.props.children).to.be.a('string');
    expect(titleText.props.children.props.children).to.equal('A React-Redux Spotify feed panel');

    // Selector
    expect(selector.type).to.equal('ul');
    expect(selector.props.className).to.equal('nav navbar-nav navbar-right');
    expect(selector.props.children).to.be.an('array');
    expect(selector.props.children).to.have.length(2);

    let [artists, albums] = selector.props.children;

    // Artists
    expect(artists.type).to.equal('li');
    expect(artists.props.role).to.equal('presentation');
    expect(artists.props.children).to.be.an('object');
    let artistsLink = artists.props.children;
    expect(artistsLink.type).to.equal(Link);
    expect(artistsLink.props.to).to.equal('/artists');
    expect(artistsLink.props.children).to.be.a('string');
    expect(artistsLink.props.children).to.equal('Artists');

    // Albums
    expect(albums.type).to.equal('li');
    expect(albums.props.role).to.equal('presentation');
    expect(albums.props.children).to.be.an('object');
    let albumsLink = albums.props.children;
    expect(albumsLink.type).to.equal(Link);
    expect(albumsLink.props.to).to.equal('/albums');
    expect(albumsLink.props.children).to.be.a('string');
    expect(albumsLink.props.children).to.equal('Albums');
  });

  it('has no props', () => {
    const { props } = setup();
    expect(props).to.be.empty;
  });
});