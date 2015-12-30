import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Index from '../../src/components/Index';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<Index {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Index component', () => {

  it('renders the component', () => {

    const {output} = setup();

    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.a('string');
    expect(output.props.children).to.equal('Index');
  });

  it('has not props', () => {
    const {props} = setup();

    expect(props).to.be.empty;
  });
});