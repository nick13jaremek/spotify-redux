import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import shallowTestUtils from "react-shallow-testutils";

import AlbumMainDetails from '../../src/components/AlbumMainDetails';
import {ALBUM_PLACEHOLDER} from '../../src/constants/Config';

const ALBUM_FIXTURE = require('../fixtures/album');

function setup(data) {

  let props = {
    details: data.album || [], // Default is an empty array because that is the structure of the empty object obtained from the store
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<AlbumMainDetails {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('AlbumMainDetails emtpy component', () => {

  it('renders the component without data', () => {
    const {output} = setup({});

    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.an('object');

    const emptyChild = output.props.children;
    expect(emptyChild.type).to.equal('div');
  });

  it('has no props', () => {
    const {props} = setup({});

    expect(props).to.have.property('details');
    expect(props.details).to.be.an('array');
    expect(props.details).to.be.empty;
  });
});

describe('AlbumMainDetails populated component', () => {
  it('renders the component populated with ALL data', () => {
    let albumData = ALBUM_FIXTURE;
    albumData.genres = ['electro-rock']; // This is provide a non-empty genres property

    const {output} = setup({album: albumData});

    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.an('object');

    const detailsColumn = output.props.children;
    expect(detailsColumn.type).to.equal('div');
    expect(detailsColumn.props.className).to.equal('col-md-3 col-sm-4');
    expect(detailsColumn.props.children).to.be.an('array');
    expect(detailsColumn.props.children).to.have.length(2);

    const [thumbnail, listGroup] = detailsColumn.props.children;

    expect(thumbnail.type).to.equal('div');
    expect(thumbnail.props.className).to.equal('thumbnail');
    expect(thumbnail.props.children).to.be.an('object');

      const image = thumbnail.props.children;
      expect(image.type).to.equal('img');
      expect(image.props.className).to.equal('img-responsive center-block fxd-img');
      expect(image.props.src).to.equal(ALBUM_FIXTURE.images[0].url);

    expect(listGroup.type).to.equal('ul');
    expect(listGroup.props.className).to.equal('list-group');
    expect(listGroup.props.children).to.be.an('array');
    expect(listGroup.props.children).to.have.length(6);

    const [nameItem, artistsItem, releaseDateItem, genreItem, popularityItem, numberOfTracksItem] = listGroup.props.children;

      validateListItem(nameItem, {
        label: {
          type: 'b',
          contentType: 'string',
          contentValue: 'Name: '
        }, value: {
          type: 'span',
          contentType: 'string',
          contentValue: ALBUM_FIXTURE.name
        }});

      validateListItem(artistsItem, {
        label: {
          type: 'b',
          contentType: 'string',
          contentValue: 'Artist(s): '
        }, value: {
          type: 'span',
          contentType: 'string',
          contentValue: ALBUM_FIXTURE.artists[0].name
        }
      });

      validateListItem(releaseDateItem, {
        label: {
          type: 'b',
          contentType: 'string',
          contentValue: 'Release Date: '
        },
        value: {
          type: 'span',
          contentType: 'string',
          contentValue: ALBUM_FIXTURE.release_date
        }
      });

      validateListItem(genreItem, {
        label: {
          type: 'b',
          contentType: 'string',
          contentValue: 'Genre: '
        },
        value: {
          type: 'span',
          contentType: 'string',
          contentValue: ALBUM_FIXTURE.genres[0]
        }
      });

      validateListItem(popularityItem, {
        label: {
          type: 'b',
          contentType: 'string',
          contentValue: 'Popularity: '
        },
        value: {
          type: 'span',
          contentType: 'number',
          contentValue: ALBUM_FIXTURE.popularity
        }
      });

      validateListItem(numberOfTracksItem, {
        label: {
          type: 'b',
          contentType: 'string',
          contentValue: 'Tracks: '
        },
        value: {
          type: 'span',
          contentType: 'number',
          contentValue: ALBUM_FIXTURE.tracks.total
        }
      });
  });

  it('renders the component with image placeholder', () => {
    const {output} = setup({album: {url: 'stuff'}});

    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.an('object');

      const detailsColumn = output.props.children;
      expect(detailsColumn.type).to.equal('div');
      expect(detailsColumn.props.className).to.equal('col-md-3 col-sm-4');
      expect(detailsColumn.props.children).to.be.an('array');
      expect(detailsColumn.props.children).to.have.length(2);

        const [thumbnail, listGroup] = detailsColumn.props.children;

        expect(thumbnail.type).to.equal('div');
        expect(thumbnail.props.className).to.equal('thumbnail');
        expect(thumbnail.props.children).to.be.an('object');

          const image = thumbnail.props.children;
          expect(image.type).to.equal('img');
          expect(image.props.className).to.equal('img-responsive center-block fxd-img');
          expect(image.props.src).to.equal(ALBUM_PLACEHOLDER);

        expect(listGroup.type).to.equal('ul');
        expect(listGroup.props.className).to.equal('list-group');
        expect(listGroup.props.children).to.have.length(6);

          const [nameItem, artistsItem, releaseDateItem, genreItem, popularityItem, numberOfTracksItem] = listGroup.props.children;
            expect(nameItem).to.equal(null);
            expect(artistsItem).to.equal(null);
            expect(releaseDateItem).to.equal(null);
            expect(genreItem).to.equal(null);
            expect(popularityItem).to.equal(null);
            expect(numberOfTracksItem).to.equal(null);
  });

  it('has album details in the props', () => {
    let albumData = ALBUM_FIXTURE;
    const {props} = setup({album: albumData});

    expect(props).to.have.property('details');
    expect(props.details).to.be.an('object');
    expect(props.details).to.equal(ALBUM_FIXTURE);
  });
});


/*
* This function validates a list item like <li className=list-group-item">...</li>
* Params:
*   item: the <li> object to validate.
*   expectedValues: an object with two keys (label, value), each one containing
*   two properties (type, content)
*
*   Example expectedValues object:
*   {
*     label: {
*       type: 'b',
*       contentType: 'string',
*       contentValue: 'Tracks: '
*
*     }
*     value: {
*       type: 'span',
*       contentType: 'number',
*       contentValue: 11
*     }
*   }
* */
function validateListItem(item, expected) {
  expect(item.type).to.equal('li');
  expect(item.props.className).to.equal('list-group-item');
  expect(item.props.children).to.be.an('array');
  expect(item.props.children).to.have.length(2);

  const [itemLabel, itemValue] = item.props.children;
  expect(itemLabel.type).to.equal(expected.label.type);
  expect(itemLabel.props.children).to.be.a(expected.label.contentType);
  expect(itemLabel.props.children).to.equal(expected.label.contentValue);
  expect(itemValue.type).to.equal(expected.value.type);
  expect(itemValue.props.children).to.be.a(expected.value.contentType);
  expect(itemValue.props.children).to.equal(expected.value.contentValue);
}