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
    expect(output.props.className).to.equal('container');
    expect(output.props.children).to.be.an('object');

    let jumbotron = output.props.children;
    expect(jumbotron.type).to.equal('div');
    expect(jumbotron.props.className).to.equal('jumbotron');
    expect(jumbotron.props.children).to.be.an('array');
    expect(jumbotron.props.children).to.have.length(3);

    let [header, paragraphOne, paragraphTwo] = jumbotron.props.children;

    expect(header.type).to.equal('h1');
    expect(header.props.children).to.be.a('string');
    expect(header.props.children).to.equal('Welcome to Spotify-Redux!');

    expect(paragraphOne.type).to.equal('p');
    expect(paragraphOne.props.children).to.be.a('string');
    expect(paragraphOne.props.children).to.equal('This is a sample application programmed using the React-Redux ' +
      'library, accompanied by several more components such as Webpack or React-Router.');

    expect(paragraphTwo.type).to.equal('p');
    expect(paragraphTwo.props.children).to.be.a('string');
    expect(paragraphTwo.props.children).to.equal('This web application uses the Spotify Web API to fetch artists, ' +
      'albums or songs. Click on any of the buttons on the navigation bar and start having fun!');
  });

  it('has not props', () => {
    const {props} = setup();

    expect(props).to.be.empty;
  });
});