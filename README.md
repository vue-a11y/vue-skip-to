# vue-skip-to

> Helps people who only use the keyboard to jump to what matters most

- [Installation](##installation)
- [Usage](##usage)
- [Props](##props)
- [Custom styling](##custom-styling)
- [Running tests](##running-tests)
- [About](##about)
- [Contributing](##contributing)

The population grows very fast nowadays and with that the number of visually impaired increases as well. Did you know that we have over 350 million visually impaired people in the world?

However, we are responsible for doing our utmost to make our applications usable and accessible to everyone.

"Skip to content" or "skip to a section" of your site is one of the most common accessibility techniques today, but not as used as it should be.

This pattern is detailed in the Techniques for WCAG 2.0 in notes [G1](https://www.w3.org/TR/WCAG20-TECHS/G1.html) and [G124](https://www.w3.org/TR/WCAG20-TECHS/G124.html), and also served as the inspiration for creating this component.

[Check out the live demo!](https://vue-skip-to.surge.sh)

## Installation

```shell
// npm
npm install -S @vue-a11y/skip-to

// yarn
yarn add @vue-a11y/skip-to
```

## Usage

### Vue SFC

```javascript
// main.js

import Vue from 'vue'
import VueSkipTo from '@vue-a11y/skip-to'

Vue.use(VueSkipTo)

new Vue({
  //...
})
```

```vue
// App.vue

<template>
  <div id="app">
    <VueSkipTo to="#main" label="Skip to main content" />

    <!-- header, navigation, and more -->

    <main id="main">
      <!-- content -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
  components: {
    Logo,
    VueSkipTo,
  },
  //...
}
</script>
```

#### Skip-to list

To use multiple links, simply pass an array into the `to` prop with the following shape:

```js
[
  {
    "anchor": "<STRING>", // destination id
    "label": "<STRING>" // link text
  }
  //...
]
```

```vue
// App.vue

<template>
  <div id="app">
    <vue-skip-to
      list-label="Skip to"
      :to="[
        { anchor: '#main', label: 'Main content' },
        { anchor: '#footer', label: 'Footer' },
      ]"
    ></vue-skip-to>

    <!-- header, navigation, and more -->

    <main id="main"></div>

    <footer id="footer"></div>
  </div>
</template>
```

### In HTML files

```html
<!--omitted -->
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/@vue-a11y/skip-to"></script>
</head>
<body>
  <div id="app">
    <vue-skip-to to="#main"></vue-skip-to>

    <!-- header, navigation, and more -->

    <main id="main">
      <!-- content -->
    </main>
  </div>

  <script>
    new Vue({
      el: "#app"
    })
  </script>
</body>
</html>
```

## Props

| Prop         | Data Type       | required | Description                                                       | Default                |
| ------------ | --------------- | -------- | ----------------------------------------------------------------- | ---------------------- |
| `to`         | String \| Array | false    | Destination ID or [array of destination objects](###skip-to-list) | '#main'                |
| `label`      | String          | false    | Skip link text content                                            | 'Skip to main content' |
| `list-label` | String          | false    | Skip link list label text                                         | 'Skip to'              |

## Custom styling

Override the default styles by targeting the following:

```css
.vue-skip-to {
}
.vue-skip-to__link {
}
.vue-skip-to__nav {
}
.vue-skip-to__nav-list {
}
.vue-skip-to__nav-list-item {
}
```

## Running tests

```shell
git clone https://github.com/vue-a11y/vue-skip-to.git
npm install
npm run dev
npm run test:e2e
```

Or run Cypress on interactive mode

```shell
npm run test:e2e:open
```

## About

This component was inspired by [this article](http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/).

- This component working in all modern browsers and IE9;
- Ensures that the target element receives focus, even if it is not a tag that naturally receives focus as the tag `input` and `a`. In this case, the `div` are also given the focus and the `tabindex` attribute with the value of `-1`;
- Add focus to the destination, even when the address bar already has the corresponding hash;

## Contributing

- From typos in documentation to coding new features;
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

Follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Thank you**
