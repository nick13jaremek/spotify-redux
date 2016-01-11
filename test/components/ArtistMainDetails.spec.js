import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import ArtistMainDetails from '../../src/components/ArtistMainDetails';

const ARTIST_FIXTURE = require('../fixtures/artists').artists.items[0];

function setup(data) {

  data.genres = ['electro-rock'];

  let props = {
    details: data
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<ArtistMainDetails {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('ArtistMainDetails empty component', () => {

  it('renders the component without data', () => {
    const {output} = setup([]);

    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.an('object');

    const emptyChild = output.props.children;
    expect(emptyChild.type).to.equal('div');
  });

  it('has no props', () => {
    const {props} = setup([]);

    expect(props).to.have.property('details');
    expect(props.details).to.be.an('array');
    expect(props.details).to.be.empty;
  });
});

describe('ArtistMainDetails populated component', () => {

  it('renders the component populated with ALL data', () => {
    const {output} = setup(ARTIST_FIXTURE);
    console.log('OUTPUT', output);
    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.an('object');

    const artistDetails = output.props.children;
    expect(artistDetails.props.className).to.equal('col-md-3 col-sm-4');
    expect(artistDetails.props.children).to.be.an('array');
    expect(artistDetails.props.children).to.have.length(2);

    const [thumbnail, list] = artistDetails.props.children;

    //===================THUMBNAIL=========================//
    expect(thumbnail.type).to.equal('div');
    expect(thumbnail.props.className).to.equal('thumbnail');
    expect(thumbnail.props.children).to.be.an('object');

    const image = thumbnail.props.children;
    expect(image.type).to.equal('img');
    expect(image.props.className).to.equal('img-responsive center-block fxd-img');
    expect(image.props.src).to.equal(ARTIST_FIXTURE.images[0].url);

    //=====================ARTIST DATA==========================//
    expect(list.type).to.equal('ul');
    expect(list.props.className).to.equal('list-group');
    expect(list.props.children).to.be.an('array');
    expect(list.props.children).to.have.length(4);

    const [name, genre, popularity, followers] = list.props.children;

    //==========================NAME==========================//
    expect(name.type).to.equal('li');
    expect(name.props.className).to.equal('list-group-item');
    expect(name.props.children).to.be.an('array');
    expect(name.props.children).to.have.length(2);

    const [nameLabel, nameValue] = name.props.children;

    expect(nameLabel.type).to.equal('b');
    expect(nameLabel.props.children).to.equal('Name: ');
    expect(nameValue.type).to.equal('span');
    expect(nameValue.props.children).to.equal(ARTIST_FIXTURE.name);

    //=========================GENRE=========================//
    expect(genre.type).to.equal('li');
    expect(genre.props.className).to.equal('list-group-item');
    expect(genre.props.children).to.be.an('array');
    expect(genre.props.children).to.have.length(2);

    const [genreLabel, genreValue] = genre.props.children;

    expect(genreLabel.type).to.equal('b');
    expect(genreLabel.props.children).to.equal('Genre: ');
    expect(genreValue.type).to.equal('span');
    expect(genreValue.props.children).to.equal(ARTIST_FIXTURE.genres[0]);

    //=======================POPULARITY=======================//
    expect(popularity.type).to.equal('li');
    expect(popularity.props.className).to.equal('list-group-item');
    expect(popularity.props.children).to.be.an('array');
    expect(popularity.props.children).to.have.length(2);

    const [popularityLabel, popularityValue] = popularity.props.children;

    expect(popularityLabel.type).to.equal('b');
    expect(popularityLabel.props.children).to.equal('Popularity: ');
    expect(popularityValue.type).to.equal('span');
    expect(popularityValue.props.children).to.equal(ARTIST_FIXTURE.popularity);

    //=======================FOLLOWERS=======================//
    expect(followers.type).to.equal('li');
    expect(followers.props.className).to.equal('list-group-item');
    expect(followers.props.children).to.be.an('array');
    expect(followers.props.children).to.have.length(2);

    const [followersLabel, followersValue] = followers.props.children;

    expect(followersLabel.type).to.equal('b');
    expect(followersLabel.props.children).to.equal('Followers: ');
    expect(followersValue.type).to.equal('span');
    expect(followersValue.props.children).to.equal(ARTIST_FIXTURE.followers.total);
  });
});