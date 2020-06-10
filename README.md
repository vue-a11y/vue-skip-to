# vue-skip-to

> Helps people who only use the keyboard to jump to what matters most

## About

The population grows very fast nowadays and with that the number of visually impaired increases as well. Did you know that we have over 350 million visually impaired people in the world?

However, we are responsible for doing our utmost to make our applications usable and accessible to everyone.

"Skip to content" or "skip to a section" of your site is one of the most common accessibility techniques today, but not as used as it should be.

This pattern is detailed in the Techniques for WCAG 2.0 in notes [G1](https://www.w3.org/TR/WCAG20-TECHS/G1.html) and [G124](https://www.w3.org/TR/WCAG20-TECHS/G124.html), and also served as the inspiration for creating this component.

## Install

### NPM

```shell
npm install -S @vue-a11y/skip-to
```

### Yarn

```shell
yarn add @vue-a11y/skip-to
```

## How to use

### Vue SFC

```javascript
// main.js

import Vue from 'vue'
import VueSkipTo from '@vue-a11y/skip-to'

Vue.use(VueSkipTo)

new Vue({
  //... options
})
```

```vue
// App.vue
<template>
  <div id="app">
    <VueSkipTo to="#main" text="Skip to main content" />

    <logo :src="require('@/assets/logo.png')" />
    <h1 data-va="main header">{{ msg }}</h1>

    <!-- header, navigation, and more -->

    <div id="main" role="main">
      <!-- My content -->
    </div>
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

```json
[
  {
    anchor: '<STRING>',  // destination id
    label: '<STRING>',   // link text
  },
  //...
]
```

```vue
// App.vue
<template>
  <div id="app">
    <vue-skip-to
      title-list="Skip to"
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

    <!-- my header, navigation, and more -->

    <div id="main" role="main">
      <!-- My content -->
    </div>
  </div>

  <script>
    new Vue({
      el: "#app"
    })
  </script>
</body>
</html>
```

## Live demo

[https://vue-skip-to.surge.sh](https://vue-skip-to.surge.sh)

## Props

Prop            | Data Type       | required  | Description                                     | Default
--------------- | --------------- | --------- | ----------------------------------------------- | -------------
`to`            | String | Array  | false     | Destination ID or [array of destination objects](###skip-to-list)  | #main
`label`         | String          | false     | Skip link text content                          | Skip to main content
`titleList`     | String          | false     | Skip link list label text                       | Skip to

## Custom style

You can style the link through the selector `.vue-skip-to`.

## Feature

Inspired by [this article](http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/).

- This component working in all modern browsers and IE9;
- Ensures that the target element receives focus, even if it is not a tag that naturally receives focus as the tag `input` and `a`. In this case, the `div` are also given the focus and the `tabindex` attribute with the value of `-1`;
- Add focus to the destination, even when the address bar already has the corresponding hash;

## Run the tests

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

## Contributing

- From typos in documentation to coding new features;
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

Follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Thank you**
