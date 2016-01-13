import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const ALBUM_FIXTURE = require('../fixtures/album');

import AlbumSongs from '../../src/components/AlbumSongs';

function setup(data) {
  let props = {
    details: data.album || {},
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<AlbumSongs {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('AlbumSongs default component', () => {
  it('renders the component', () => {
    const {output} = setup({});

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-9 col-sm-9');
    expect(output.props.children).to.be.an('array');
    expect(output.props.children).to.have.length(2);

      const [header, table] = output.props.children;
      expect(header.type).to.equal('h1');
      expect(header.props.children).to.be.a('string');
      expect(header.props.children).to.equal('Album tracks');

      expect(table.type).to.equal('table');
      expect(table.props.className).to.equal('table table-stripped');
      expect(table.props.children).to.be.an('array');
      expect(table.props.children).to.have.length(2);

      const [tableHead, tableBody] = table.props.children;
      expect(tableHead.type).to.equal('thead');
      expect(tableHead.props.children).to.be.an('object');
        const tableHeadRow = tableHead.props.children;
        validateTableRow(tableHeadRow, {
          key: null,
          cell: {
            types: ['th', 'th', 'th', 'th'],
            values: ['#', 'Title', ' ', 'Duration']
          }
        });

      expect(tableBody.type).to.equal('tbody');
      expect(tableBody.props.children).to.equal(null);
  });

  it('has no album details', () => {
    const {props} = setup({});

    expect(props).to.have.property('details');
    expect(props.details).to.be.empty;
  });
});

describe('AlbumSongs fully-populated component', () => {
  it('renders the full component', () => {
    const {output} = setup({album: ALBUM_FIXTURE})

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-9 col-sm-9');
    expect(output.props.children).to.be.an('array');
    expect(output.props.children).to.have.length(2);

    const [header, table] = output.props.children;
    expect(header.type).to.equal('h1');
    expect(header.props.children).to.be.a('string');
    expect(header.props.children).to.equal('Album tracks');

    expect(table.type).to.equal('table');
    expect(table.props.className).to.equal('table table-stripped');
    expect(table.props.children).to.be.an('array');
    expect(table.props.children).to.have.length(2);

    const [tableHead, tableBody] = table.props.children;
    expect(tableHead.type).to.equal('thead');
    expect(tableHead.props.children).to.be.an('object');
    const tableHeadRow = tableHead.props.children;
    validateTableRow(tableHeadRow, {
      key: null,
      cell: {
        types: ['th', 'th', 'th', 'th'],
        values: ['#', 'Title', ' ', 'Duration']
      }
    });

    expect(tableBody.type).to.equal('tbody');
    expect(tableBody.props.children).to.be.an('array');
    expect(tableBody.props.children).to.have.length(ALBUM_FIXTURE.tracks.total);
  });

  it('has an album details in props', () => {
    const {props} = setup({album: ALBUM_FIXTURE});

    expect(props).to.have.property('details');
    expect(props.details).to.equal(ALBUM_FIXTURE);
  });
});

function validateTableRow(row, expected) {
  expect(row.type).to.equal('tr');

  if (expected.key) {
    expect(row.key).to.equal(expected.key);
  }

  expect(row.props.children).to.be.an('array');
  expect(row.props.children).to.have.length(4);

  let rows = row.props.children;
  let rowTypes = rows.map((row) => row.type);
  let rowValues = rows.map((row) => row.props.children);

  expect(rowTypes).to.deep.equal(expected.cell.types);
  expect(rowValues).to.deep.equal(expected.cell.values);
}