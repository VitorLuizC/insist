# `@bitty/insistence`

[![Build status][travis-badge]][travis]

Insistently runs a callback and only resolves the promise when its result is truthy.

![][image]

## Install

Install using NPM or Yarn.

```sh
# Using NPM
npm install @bitty/insistence --save

# Using Yarn
yarn add @bitty/insistence
```

There's also an UMD version on unpkg.

```html
<script src="https://unpkg.com/@bitty/insistence"></script>
```

## Usage

```js
import insistence from 'insistence'

insistence(() => window.readyState === 'complete')
  .then(() => {
    // It's only resolved when window.readyState is 'complete'.
  })
```

## License

Released under MIT license. You can see it [here][license].

<!-- Links -->

[license]: ./LICENSE
[image]: https://i.pinimg.com/originals/fb/91/44/fb9144fc1389ba226b99ef2d96838f1c.gif
[travis]: https://travis-ci.org/VitorLuizC/insistence
[travis-badge]: https://travis-ci.org/VitorLuizC/insistence.svg?branch=master
