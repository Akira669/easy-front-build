'use strict';

const templateHTML = `<!DOCTYPE html>\n<html lang="en" >\n<head>\n<meta charset="utf-8">\n<title>Example of Fetch</title>\n</head>\n<body>\n<h1></h1></body><script type="text/javascript" src = "testFile.js" ></script></html>`;

const templateCSS = `${name}{\n}`;
const templateJS = `(function ${name} () {\n\t}();`;

const templateTEST = 'use strict';

const core = require('../lib/${name}.js');
const helper = require('./sinonObjects/${name}.sinon.js');

test('case test', () => {

    // @TODO case test here !

});
`

const templateSINON = `const sinon = require('sinon');
const dummy = {};

const mock = sinon.mock(object);
//@TODO actions here!

mock.verify();

mock.restore();

const spy = sinon.spy(object,  'function${name}');
//@TOD functions watcher here!

spy.restore();
const stub = sinon.stub(object,  'function${name}').callsFake(() => {
    //@TODO the overwrite behavior
});

// @TODO assertions or expects here!
stub.restore();`

module.exports = {templateHTML, templateCSS, templateJS,templateTEST ,templateSINON };
