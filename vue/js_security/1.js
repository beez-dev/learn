//strict mode
// reduce edge cases of the language


// 'use strict';

// const x = {};
// Object.defineProperty(x, 'foo', {
//     value: 10,
//     writable: false
// })

// console.log(x.foo);
// x.foo = 11;
// console.log(x.foo)

'use strict';

const app = require('express')();
const fs = require('fs');

const page = fs.read