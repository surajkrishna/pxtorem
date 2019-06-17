"use strict";

var expect = require("chai").expect;
var pxtorem = require("../index");

describe("#pxtorem", function() {
  it("should convert 16 px to rem equivalent", function() {
    var result = pxtorem(16);
    expect(result).to.equal("1.00rem");
  });

  it("should convert 24 px to rem equivalent", function() {
    var result = pxtorem(24);
    expect(result).to.equal("1.50rem");
  });

  it("should convert empty input to 0", function() {
    var result = pxtorem("");
    expect(result).to.equal(0);
  });
});
