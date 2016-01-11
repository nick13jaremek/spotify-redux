import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import ArtistAlbums from '../../src/components/ArtistAlbums';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<ArtistAlbums {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('ArtistAlbums component', () => {

  it('renders the component', () => {

  });

  it('has not props', () => {

  });

});