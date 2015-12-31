import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import Footer from '../../src/components/Footer';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<Footer {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Footer component', () => {

  it('renders the component', () => {
    let {output} = setup();

    expect(output.type).to.equal('footer');
    expect(output.props.className).to.equal('navbar-inverse navbar-fixed-bottom');
    expect(output.props.children).to.be.an('object');

    let list = output.props.children;
    expect(list.type).to.equal('ul');
    expect(list.props.className).to.equal('nav navbar-nav');
    expect(list.props.children).to.be.an('object');

    let listItem = list.props.children;
    expect(listItem.type).to.equal('li');
    expect(listItem.props.children).to.be.an('object');

    let listItemText = listItem.props.children;
    expect(listItemText.type).to.equal('a');
    expect(listItemText.props.href).to.equal('https://github.com/nick13jaremek');
    expect(listItemText.props.children).to.be.a('string');
    expect(listItemText.props.children).to.equal('Created by Nick M. Jaremek');
  });

  it('has no props', () => {
    let {props} = setup();
    expect(props).to.be.empty;
  });
});