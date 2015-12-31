import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {Map, List} from 'immutable';
import {Artists} from '../../src/components/Artists';

const ARTISTS_FIXTURES = require('../fixtures/artists').artists.items;

function setup(items) {
  let props = {
    dispatch: function() {},
    artists: {
      items: items,
      isFetching: false
    }
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<Artists {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Artists default component', () => {

  it('renders the component', () => {

    const {output} = setup([]);

    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.empty;

  });

  it('has not props', () => {
    const {props} = setup([]);

    expect(props).to.not.be.empty;
    expect(props.dispatch).to.be.a('function');
    expect(props.artists).to.be.an('object');
    expect(props.artists).to.have.property('isFetching');
    expect(props.artists.isFetching).to.be.falsy;
    expect(props.artists).to.have.property('items');
    expect(props.artists.items).to.be.an('array');
    expect(props.artists.items).to.be.empty;
  });
});

describe('Artists populated component', () => {

    it('renders children when having data', () => {

    });

    it('has props with artist items', () => {
      const {props} = setup(ARTISTS_FIXTURES);

      expect(props).to.not.be.empty;
      expect(props.dispatch).to.be.a('function');
      expect(props.artists).to.be.an('object');
      expect(props.artists).to.have.property('isFetching');
      expect(props.artists.isFetching).to.be.falsy;
      expect(props.artists).to.have.property('items');
      expect(props.artists.items).to.be.an('array');
      expect(props.artists.items).to.have.length(ARTISTS_FIXTURES.length);
    });

});