const code = `const tabBar = require('./app.json').tabBar`
const babel = require('babel-core')
const plugin = require('../lib/index').default


const res = babel.transform(code, {
  plugins: [plugin]
})


console.log(res.code)
