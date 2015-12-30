import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Albums from '../../src/components/Albums';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<Albums {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Albums component', () => {

  it('renders the component', () => {

    const {output} = setup();

    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.a('string');
    expect(output.props.children).to.equal('Selected Albums');
  });

  it('has not props', () => {
    const {props} = setup();

    expect(props).to.be.empty;
  });
});