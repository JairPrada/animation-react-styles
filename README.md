# animation-react-styles

> Animation library for react

[![NPM](https://img.shields.io/npm/v/animation-react-styles.svg)](https://www.npmjs.com/package/animation-react-styles) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save animation-react-styles
```


## Usage
### Slide
  
```jsx
import React, { Component } from 'react'
import { Slide } from 'animation-react-styles'

const Example=()=> {
   return (
       <Slide direction='OutLeft' duration={number}>
          <h1>Animation OutLeft</h1>
       </Slide>
)}
```
### Fade
  
```jsx
import React, { Component } from 'react'
import { Fade } from 'animation-react-styles'

const Example=()=> {
   return (
   <Fade direction='OutLeft' duration={number}>
      <h1>Animation OutLeft</h1>
   </Fade>
   )
}
```
## Props



<div align="left">
  
| Component Slide|           Options         |  Type  | Default value | Is required |
|-------------------------|---------------------------|--------|---------------|-------------|
| Direction               | InLeft,InRight,InUp,InDown| String |       ""      |    true     |
| Duration                | Number > 1 is seconds     | number |        1      |    false    |

| Component Fade | Options                               | Type   | Default value | Is required |
|-------------------------|---------------------------------------|--------|---------------|-------------|
| Direction               | In,Out,OutLeft,OutRight,OutUp,OutDown | String |         ""    | true        |
| Duration                | Number > 1 is seconds                 | number |         1     | false       |

</div>


  




## License

MIT © [JairPrada](https://github.com/JairPrada)
