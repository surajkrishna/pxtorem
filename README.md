[![Build Status](https://travis-ci.org/surajkrishna/pxtorem.svg?branch=master)](https://travis-ci.org/surajkrishna/pxtorem)

[![Coverage Status](https://coveralls.io/repos/github/surajkrishna/pxtorem/badge.svg?branch=master)](https://coveralls.io/github/surajkrishna/pxtorem?branch=master)

# pxtorem

=====================

A small library that convert pixel to rem

## Installation

`npm install @surajkrishna/pxtorem`

## Usage

Common JS
var pxtorem = required('@surajkrishna/pxtorem');

Modules
import pxtorem from "@surajkrishna/pxtorem";

inside styled component css/js file
`font-size: ${pxtorem(24)}`

Output should be `font-size: 1.5rem`

## Test

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
