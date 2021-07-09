# animation-react-styles

> animation library for react

[![NPM](https://img.shields.io/npm/v/animation-react-styles.svg)](https://www.npmjs.com/package/animation-react-styles) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save animation-react-styles
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'animation-react-styles'
import 'animation-react-styles/dist/index.css'
import { Slide } from 'animation-react-styles'

class Example extends Component {
  render() {
    return <Slide direction='InLeft' duration={number} />
  }
}
```

```jsx
import React, { Component } from 'react'

import MyComponent from 'animation-react-styles'
import 'animation-react-styles/dist/index.css'
import { Fade } from 'animation-react-styles'

class Example extends Component {
  render() {
    return <Fade direction='OutLeft' duration={number} />
  }
}
```

## License

MIT © [JairPrada](https://github.com/JairPrada)
