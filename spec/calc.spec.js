/*
 * File         :   calc.spec.js
 * Description  :   Calculator tests.
 * ------------------------------------------------------------------------------------------------ */
var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var setProcessArgs = require('./helpers/setProcessArgs');

describe('calc app', function () {
  beforeEach(function () {
    // reset module cache.
    var resolvedName = require.resolve('../calc');
    delete require.cache[resolvedName];

    sinon.spy(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  it('should add two numbers together', function () {
    setProcessArgs(3, '+', 4);
    require('../calc');

    expect(console.log).to.have.been.calledWith(7);
  });

  it('should add not accept non-numerical strings', function () {
    setProcessArgs('+', 4);

    expect(function () { require('../calc'); }).to.throw();
  });


  it('should subtract two numbers', function () {
    setProcessArgs(8, '-', 5);
    require('../calc');

    expect(console.log).to.have.been.calledWith(3);
  });
});