# color-avg

Find the mean of mulitple hex color codes!

## Installation:

`npm i color-average`

## Usage:

```Javascript
const coloravg = require('color-average');

// can accept hsl, hex, rgb and css color codes
const avg = coloravg('FFFFFF', 'cyan', 'rgb(255, 0, 0)' , '#ff0000');

console.log('Hex:', avg.toHex());
// logs average in hex
```
