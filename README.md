# `@bitty/insist`

Insistently runs a callback and only resolves the promise when its result is truthy.

![][image]

## Install

Install using NPM or Yarn.

```sh
# Using NPM
npm install @bitty/insist --save

# Using Yarn
yarn add @bitty/insist
```

There's also an UMD version on unpkg.

```html
<script src="https://unpkg.com/@bitty/insist"></script>
```

## Usage

```js
import insist from '@bitty/insist'

insist(() => window.readyState === 'complete')
  .then(() => {
    // It's only resolved when window.readyState is 'complete'.
  })
```

## License

Released under MIT license. You can see it [here][license].

<!-- Links -->

[license]: ./LICENSE
[image]: https://i.pinimg.com/originals/fb/91/44/fb9144fc1389ba226b99ef2d96838f1c.gif
