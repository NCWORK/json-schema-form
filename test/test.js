var schema = require('../schema.json')
  , jsf = require('../json-schema-form');

console.log(jsf.generate(JSON.stringify(schema), {}, {}));

