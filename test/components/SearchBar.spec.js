import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

import ReactTestUtils from 'react-addons-test-utils';
import shallowTestUtils from "react-shallow-testutils";
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from '../../src/constants/ActionTypes';

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

import SearchBar from '../../src/components/SearchBar';

//TODO: mock the HTTP request to the API endpoints with nock

function setup(options) {

  options.dataType = (options && options.dataType) ? options.dataType : 'stuff';
  options.dispatch = (options && options.dispatch) ? options.dispatch : function() {}

  let props = {
    dataType: options.dataType,
    dispatch: options.dispatch
  };

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

    const {output} = setup({});

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

  it('has props defined', () => {
    const {props} = setup({});

    expect(props.dataType).to.be.a('string');
    expect(props.dataType).to.equal('stuff');
    expect(props.dispatch).to.be.a('function');
  });

  it('dispatches \'artists\' search action on button click', () => {

    const store = mockStore({
      artists: Map({
        isFetching: false,
        items: []
      }),
      inputs: Map({
        input: ''
      })
    }, [{type: actions.SET_INPUT_VALUE, value: 'Muse'}, {type: actions.REQUEST_ARTISTS}]); // Check that two actions are dispatched

    const spy = new sinon.spy(store, 'dispatch');

    const {output} = setup({dispatch: store.dispatch, dataType: 'artists'});
    const input = shallowTestUtils.findAllWithType(output, 'input')[0];
    input.props.onChange({target: {value: 'Muse'}});

    const button = shallowTestUtils.findAllWithType(output, 'button')[0];
    button.props.onClick();
    expect(spy).to.have.been.calledTwice;
  });

  it('dispatches an action to extract the input field value', () => {
    const store = mockStore({
      artists: Map({
        isFetching: false,
        items: []
      }),
      inputs: Map({
        input: ''
      })
    }, [{type: actions.SET_INPUT_VALUE, value: 'Muse'}]); // Only one action should be dispatched

    const spy = new sinon.spy(store, 'dispatch');

    const {output} = setup({dispatch: store.dispatch, dataType: 'stuff'}); // The dataType 'stuff' doest not trigger any dispatch action
    const input = shallowTestUtils.findAllWithType(output, 'input')[0];
    input.props.onChange({target: {value: 'Muse'}});

    const button = shallowTestUtils.findAllWithType(output, 'button')[0];
    button.props.onClick();
    expect(spy).to.have.been.calledOnce; // The only 'dispatch' action should be the one related to the 'setArtistName' function
  });
});