import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import ArtistMainDetails from '../../src/components/ArtistMainDetails';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<ArtistMainDetails {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('ArtistMainDetails component', () => {

  it('renders the component', () => {

  });

  it('has not props', () => {

  });

});