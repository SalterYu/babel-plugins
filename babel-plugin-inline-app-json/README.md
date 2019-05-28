# babel-plugin-inline-app-json

Only used in miniapp

Transform your app.json module to js value.

For example: 

Input:
```json
{
  "tabBar": {
    "backgroundColor": "red",
    "borderStyle": "white",
    "color": "blue",
    "selectedColor": "green",
    "list": [
      {
        "pagePath": "pathToA",
        "iconPath": "imgs/a.png",
        "selectedIconPath": "imgs/a-selected.png",
        "text": "a"
      },
      {
        "pagePath": "pathToB",
        "iconPath": "imgs/b.png",
        "selectedIconPath": "imgs/b-selected.png",
        "text": "b"
        /* annotation */
      },
      {
        "pagePath": "pathToC",
        "iconPath": "imgs/c.png",
        "selectedIconPath": "imgs/c-selected.png",
        "text": "c"
      },
      {
        "pagePath": "pathToD",
        "iconPath": "imgs/d.png",
        "selectedIconPath": "imgs/d-selected.png",
        "text": "d"
      }
    ]
  }
}
```

```js
var tabBar = require('./app.json').tabBar;
```

Output:
```js
const tabBar = {
  backgroundColor: 'red',
  borderStyle: 'white',
  color: 'blue',
  selectedColor: 'green',
  list: [{
    pagePath: 'pathToA',
    iconPath: 'imgs/a.png',
    selectedIconPath: 'imgs/a-selected.png',
    text: 'a'
  }, {
    pagePath: 'pathToB',
    iconPath: 'imgs/b.png',
    selectedIconPath: 'imgs/b-selected.png',
    text: 'b'
  }, {
    pagePath: 'pathToC',
    iconPath: 'imgs/c.png',
    selectedIconPath: 'imgs/c-selected.png',
    text: 'c'
  }, {
    pagePath: 'pathToD',
    iconPath: 'imgs/d.png',
    selectedIconPath: 'imgs/d-selected.png',
    text: 'd'
  }]
};
```

## Installation

```sh
$ npm install babel-plugin-inline-app-json
```

## Usage

```js
const plugin = require('babel-plugin-inline-app-json').default
// import plugin from 'babel-plugin-inline-app-json' 

const res = babel.transform(code, {
  plugins: [plugin]
})

console.log(res.code)
```

### Via `.babelrc`

```json
{
  "plugins": ["inline-app-json"]
}
```

### Via CLI

```sh
$ babel --plugins inline-app-json script.js
```

### Via Node API

```js
require('babel-core').transform('code', {
  plugins: ['inline-app-json']
});
```

Thanks for this plugin: 
<a href="https://github.com/andrewimm/babel-plugin-inline-package-json">
babel-plugin-inline-package-json
</a>