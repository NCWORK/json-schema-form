(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    factory((root.jsf = {}));
  }
}(this, function (exports) {
  'use strict';

  var types = ['string', 'number', 'integer', 'boolean', 'array', 'object', 'null'];
  
  function merge(schema, form, options) {
    
  }

  function generate(schema, form, options) {
    schema = JSON.parse(schema);
    return generators['generate' + type(schema)](schema, options);
  }

  function type(o) {
    var t = o.type && types.indexOf(o.type) > -1 ? o.type : 'object';
    return t.slice(0,1).toUpperCase() + t.slice(1);
  }

  var generators = {
    generateNull: function(schema, form, options) {
    },
    generateObject: function(schema, form, options) {
      return { fieldset: { fields: [] } };
    }
  };

  exports.version = '0.0.0';
  exports.generate = generate;

}));
