import React from 'react';
import {expect} from 'chai';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import {ALBUM_PLACEHOLDER} from '../../src/constants/Config';
const ALBUM_FIXTURE = require('../fixtures/albums').items[0];

import AlbumCard from '../../src/components/AlbumCard';

function setup(data) {
  let props = {
    album: data.album || {}
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<AlbumCard {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('AlbumCard no-data component', () => {

  it('renders the component', () => {
    const {output} = setup({});

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-2 col-sm-2');
    expect(output.props.children).to.be.an('object');

    const thumbnail = output.props.children;

    expect(thumbnail.type).to.equal('div');
    expect(thumbnail.props.className).to.equal('thumbnail');
    expect(thumbnail.props.children).to.be.an('array');
    expect(thumbnail.props.children).to.have.length(2);

    const [image, caption] = thumbnail.props.children;

    expect(image.type).to.equal('img');
    expect(image.props.className).to.equal('img-responsive center-block fxd-img');
    expect(image.props.src).to.equal(ALBUM_PLACEHOLDER);

    expect(caption.type).to.equal('div');
    expect(caption.props.className).to.equal('caption');
    expect(caption.props.children).to.be.an('object');

    const link = caption.props.children;
    expect(link.type).to.equal(Link);
    expect(link.props.className).to.equal('btn btn-default btn-md');
    expect(link.props.to).to.equal('album/undefined');
    expect(link.props.children).to.be.a('string');
    expect(link.props.children).to.equal('More Info');
  });

  it('has empty album in props', () => {
    const {props} = setup({});

    expect(props.album).to.be.empty;
  });
});

describe('AlbumCard populated component', () => {

  it('renders the component', () => {
    const {output} = setup({album: ALBUM_FIXTURE});

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-2 col-sm-2');
    expect(output.props.children).to.be.an('object');

    const thumbnail = output.props.children;

    expect(thumbnail.type).to.equal('div');
    expect(thumbnail.props.className).to.equal('thumbnail');
    expect(thumbnail.props.children).to.be.an('array');
    expect(thumbnail.props.children).to.have.length(2);

    const [image, caption] = thumbnail.props.children;

    expect(image.type).to.equal('img');
    expect(image.props.className).to.equal('img-responsive center-block fxd-img');
    expect(image.props.src).to.equal(ALBUM_FIXTURE.images[0].url);

    expect(caption.type).to.equal('div');
    expect(caption.props.className).to.equal('caption');
    expect(caption.props.children).to.be.an('object');

    const link = caption.props.children;
    expect(link.type).to.equal(Link);
    expect(link.props.className).to.equal('btn btn-default btn-md');
    expect(link.props.to).to.equal(`album/${ALBUM_FIXTURE.id}`);
    expect(link.props.children).to.be.a('string');
    expect(link.props.children).to.equal('More Info');
  });

  it('has an album in props', () => {
    const {props} = setup({album: ALBUM_FIXTURE});

    expect(props.album).to.equal(ALBUM_FIXTURE);
  });

});