import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {Link} from 'react-router';
import {ALBUM_PLACEHOLDER} from '../../src/constants/Config';

const ARTIST_FIXTURE = require('../fixtures/artists').artists.items[0];
ARTIST_FIXTURE.genres = ['electric-rock'];
import ArtistCard from '../../src/components/ArtistCard';

function setup(data) {
  let props = {
    artist: data.artist || {}
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<ArtistCard {...props} />);
  let output = renderer.getRenderOutput();
  return {
    props,
    output,
    renderer
  };
}

describe('ArtistCard fully populated component', () => {

  it('renders the component', () => {

    const {output} = setup({artist: ARTIST_FIXTURE});
    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-2');
    expect(output.props.children).to.be.an('object');

    const thumbnail = output.props.children;
    expect(thumbnail.type).to.equal('div');
    expect(thumbnail.props.className).to.equal('thumbnail');
    expect(thumbnail.props.children).to.be.an('array');

    const [image, caption] = thumbnail.props.children;

    expect(image.type).to.equal('img');
    expect(image.props.src).to.equal(ARTIST_FIXTURE.images[0].url);
    expect(image.props.className).to.equal('img-responsive center-block fxd-img');

    expect(caption.type).to.equal('div');
    expect(caption.props.className).to.equal('caption');
    expect(caption.props.children).to.be.an('array');
    expect(caption.props.children).to.have.length(3);

    const [header, list, link] = caption.props.children;

    expect(header.type).to.equal('h4');
    expect(header.props.className).to.equal("");
    expect(header.props.children).to.equal(ARTIST_FIXTURE.name);

    expect(list.type).to.equal('ul');
    expect(list.props.children).to.be.an('array');
    expect(list.props.children).to.have.length(2);

    expect(link.type).to.equal(Link);
    expect(link.props.to).to.equal(`/artist/${ARTIST_FIXTURE.id}`);
    expect(link.props.className).to.equal('btn btn-default btn-xs');
    expect(link.props.role).to.equal('button');
    expect(link.props.children).to.equal('More Info');
  });

  it('has an artist prop props', () => {

    const {props} = setup({artist: ARTIST_FIXTURE});

    expect(props).to.not.be.empty;
    expect(props.artist).to.equal(ARTIST_FIXTURE);
  });
});

describe('Artist Card minimal-data component', () => {
  it('renders the component', () => {
    const {output} = setup({artist: {url: ''}});

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-2');
    expect(output.props.children).to.be.an('object');

    const thumbnail = output.props.children;
    expect(thumbnail.type).to.equal('div');
    expect(thumbnail.props.className).to.equal('thumbnail');
    expect(thumbnail.props.children).to.be.an('array');

    const [image, caption] = thumbnail.props.children;

    expect(image.type).to.equal('img');
    expect(image.props.src).to.equal(ALBUM_PLACEHOLDER);
    expect(image.props.className).to.equal('img-responsive center-block fxd-img');

    expect(caption.type).to.equal('div');
    expect(caption.props.className).to.equal('caption');
    expect(caption.props.children).to.be.an('array');
    expect(caption.props.children).to.have.length(3);

    const [header, list, link] = caption.props.children;

    expect(header).to.equal(null);

    expect(list.type).to.equal('ul');
    expect(list.props.children).to.be.an('array');
    expect(list.props.children).to.have.length(2);

      const [popularityItem, genreItem] = list.props.children;
      expect(popularityItem).to.equal(null);
      expect(genreItem).to.equal(null);

    expect(link).to.equal(null);
  });

  it('has an artist property in props', () => {
    const {props} = setup({artist: {url: ''}});

    expect(props).to.have.property('artist');
    expect(props.artist).to.be.defined;
  });
});