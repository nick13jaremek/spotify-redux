import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const ARTIST_FIXTURE = require('../fixtures/artists').artists.items[0];
const ALBUMS_FIXTURE = require('../fixtures/albums').items;

import ArtistAlbums from '../../src/components/ArtistAlbums';
import AlbumCard from '../../src/components/AlbumCard';

function setup(data) {
  let props = {
    artist: data.artist || null,
    albums: data.albums || null
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<ArtistAlbums {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('ArtistAlbums default component', () => {

  it('renders the component', () => {
    const {output} = setup({});

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-9 col-sm-9 padded');
    expect(output.props.children).to.be.an('object');

    const placeholder = output.props.children;

    expect(placeholder.type).to.equal('div');
    expect(placeholder.props.children).to.be.a('string');
    expect(placeholder.props.children).to.equal('No albums');

  });

  it('has no props', () => {
    const {props} = setup({});
    expect(props).to.have.property('artist');
    expect(props.artist).to.be.null;
    expect(props).to.have.property('albums');
    expect(props.albums).to.be.null;
  });

});

describe('ArtistAlbums populated component', () => {

  it('renders the component', () => {
    const {output} = setup({artist: ARTIST_FIXTURE, albums: ALBUMS_FIXTURE});

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-9 col-sm-9 padded');
    expect(output.props.children).to.be.an('array');
    expect(output.props.children).to.have.length(14)

    const rows = output.props.children;

    rows.forEach((row) => {
      expect(row.type).to.equal('div');
      expect(row.props.className).to.equal('row equal');
      expect(row.props.children).to.be.an('array');
      expect(row.props.children).to.have.length(3);
    });
  });

  it('has no props', () => {
    const {props} = setup({artist: ARTIST_FIXTURE, albums: ALBUMS_FIXTURE});
    expect(props).to.have.property('artist');
    expect(props.artist).to.equal(ARTIST_FIXTURE);
    expect(props).to.have.property('albums');
    expect(props.albums).to.equal(ALBUMS_FIXTURE);
  });

});