import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import AlbumCard from '../../src/components/AlbumCard';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<AlbumCard {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('AlbumCard component', () => {

  it('renders the component', () => {

  });

  it('has not props', () => {

  });

});