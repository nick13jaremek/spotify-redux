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
    const {output} = setup();

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('col-md-9 col-sm-8');
    expect(output.props.children).to.be.an('array');
    expect(output.props.children).to.have.length(2);

    const [header, text] = output.props.children;

    expect(header.type).to.equal('h1');
    expect(header.props.className).to.equal('page-header');
    expect(header.props.children).to.be.a('string');
    expect(header.props.children).to.equal('Dashboard');

    expect(text.type).to.equal('p');
    expect(text.props.children).to.be.a('string');
    expect(text.props.children).to.equal('This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.')
  });

  it('has not props', () => {
    const {props} = setup();
    expect(props).to.be.empty;
  });

});