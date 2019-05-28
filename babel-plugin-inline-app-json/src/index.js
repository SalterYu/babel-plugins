import path from 'path';
import fs from 'fs'
import json from 'json5'

export default function({types: t}) {
  return {
    visitor: {
      MemberExpression: function MemberExpression(treePath) {
        const node = treePath.node;
        if (t.isCallExpression(node.object) &&
          t.isIdentifier(node.object.callee, { name: 'require' }) &&
          t.isLiteral(node.object.arguments[0]) &&
          node.object.arguments[0].value.match(/app\.json$/)) {
          let srcPath = path.resolve(this.file.opts.filename);
          const realPath = path.join(srcPath, '..', node.object.arguments[0].value)
          const jsonStr = json.parse(fs.readFileSync(realPath, {encoding: 'UTF-8'}))
          // let pkg = require(path.join(srcPath, '..', node.object.arguments[0].value));
          let value = jsonStr[node.property.name];
          treePath.replaceWith(t.expressionStatement(t.valueToNode(value)));
        }
      }
    }
  }
}



