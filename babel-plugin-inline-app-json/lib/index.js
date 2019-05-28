'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      MemberExpression: function MemberExpression(treePath) {
        var node = treePath.node;
        if (t.isCallExpression(node.object) && t.isIdentifier(node.object.callee, { name: 'require' }) && t.isLiteral(node.object.arguments[0]) && node.object.arguments[0].value.match(/app\.json$/)) {
          var srcPath = _path2.default.resolve(this.file.opts.filename);
          var realPath = _path2.default.join(srcPath, '..', node.object.arguments[0].value);
          var jsonStr = _json2.default.parse(_fs2.default.readFileSync(realPath, { encoding: 'UTF-8' }));
          // let pkg = require(path.join(srcPath, '..', node.object.arguments[0].value));
          var value = jsonStr[node.property.name];
          treePath.replaceWith(t.expressionStatement(t.valueToNode(value)));
        }
      }
    }
  };
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _json = require('json5');

var _json2 = _interopRequireDefault(_json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }