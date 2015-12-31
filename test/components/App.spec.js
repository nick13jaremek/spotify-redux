import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import {App} from '../../src/components/App';
import NavigationBar from '../../src/components/NavigationBar';
import Index from '../../src/components/Index';
import Footer from '../../src/components/Footer';

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

    expect(output).to.be.an('object');
    expect(output.type).to.equal('div');

    const children = output.props.children;
    expect(children).to.be.an('array');
    expect(children).to.have.length(3);
    expect(children[0].type).to.equal(NavigationBar);
    expect(children[1].type).to.equal(Index);
    expect(children[2].type).to.equal(Footer);
  });

  it('has no props', () => {
    const { props } = setup();
    expect(props).to.be.empty;
  });
});