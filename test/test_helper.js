/*
* This file creates a mock HTML DOM which is used to add test components.
* It also adds to the global namespace standard functions of the 'document' and 'window' objects to access them
* in an easier manner.
*/

import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>'); // HTML DOM to use during tests.
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => { // Add to the global namespace the functions of the window object
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);
