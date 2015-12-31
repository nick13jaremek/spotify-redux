import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import SearchBar from '../../src/components/SearchBar';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<SearchBar {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('SearchBar component', () => {

  it('renders the component', () => {

    const {output} = setup();

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('container');
    expect(output.props.children).to.be.an('object');

    let row = output.props.children;
    expect(row.type).to.equal('div');
    expect(row.props.className).to.equal('row');
    expect(row.props.children).to.be.an('object');

    let column = row.props.children;
    expect(column.type).to.equal('div');
    expect(column.props.children).to.be.an('object');

    let jumbotron = column.props.children;
    expect(jumbotron.type).to.equal('div');
    expect(jumbotron.props.className).to.equal('jumbotron text-center');
    expect(jumbotron.props.children).to.be.an('array');
    expect(jumbotron.props.children).to.have.length(6);

    let [header, form, ...breaks] = jumbotron.props.children;

    expect(header.type).to.equal('h2');
    expect(header.props.children).to.be.a('string');
    expect(header.props.children).to.equal('Start searching for artists here');

    expect(form.type).to.equal('form');
    expect(form.props.children).to.be.an('object');
    let formContent = form.props.children;

    expect(formContent.type).to.equal('div');
    expect(formContent.props.className).to.equal('col-md-6 col-md-offset-3');
    expect(formContent.props.children).to.be.an('object');

    let formInput = formContent.props.children;
    expect(formInput.type).to.equal('div');
    expect(formInput.props.className).to.equal('input-group input-group-lg');
    expect(formInput.props.children).to.be.an('array');
    expect(formInput.props.children).to.have.length(2);

    let [formInputField, formInputButton] = formInput.props.children;
    expect(formInputField.type).to.equal('input');
    expect(formInputField.props.className).to.equal('form-control');
    expect(formInputField.props.type).to.equal('text');
    expect(formInputField.props.placeholder).to.equal('E.g. Leonard Cohen');

    expect(formInputButton.type).to.equal('span');
    expect(formInputButton.props.className).to.equal('input-group-btn');
    expect(formInputButton.props.children).to.be.an('object');
    let button = formInputButton.props.children;
    expect(button.type).to.equal('button');
    expect(button.props.className).to.equal('btn btn-default');
    expect(button.props.type).to.equal('button');
    expect(button.props.children).to.be.a('string');
    expect(button.props.children).to.equal('Go!');
  });
});