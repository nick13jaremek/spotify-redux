import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import {App} from '../../src/components/App';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<App {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('App component', () => {

  it('renders the component', () => {
    const { output } = setup();
    expect(output.type).to.equal('div');
    expect(output.props.children).to.be.a('string');
    expect(output.props.children).to.equal('Hello Yelp!');
  });

  it('has no props', () => {
    const { props } = setup();
    expect(props).to.be.empty;
  });
});