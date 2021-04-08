# [@vue-a11y/vue-skip-to](https://github.com/vue-a11y/vue-skip-to/tree/next)

---
🔥 HEADS UP! You are in the Vue 3 compatible branch, [check the branch for Vue 2 support](https://github.com/vue-a11y/vue-skip-to).

---

> Helps people who only use the keyboard to jump to what matters most

- [Installation](##installation)
- [Usage](##usage)
- [Props](##props)
- [Custom styling](##custom-styling)
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
npm install -S @vue-a11y/skip-to@next

// yarn
yarn add @vue-a11y/skip-to@next
```

## Usage

### Vue SFC

```javascript
// main.js

import { createApp } from 'vue'
import App from './App.vue'
import VueSkipTo from '@vue-a11y/skip-to'
import '@vue-a11y/skip-to/dist/style.css'

createApp(App)
  .use(VueSkipTo)
  .mount('#app')
```

```vue
// App.vue

<template>
    <VueSkipTo to="#main" label="Skip to main content" />

    <!-- header, navigation, and more -->

    <main id="main">
      <!-- content -->
    </main>
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

To use multiple links, set an array into the `to` prop with the following shape:

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
</template>
```

### In HTML files

```html
<!--omitted -->
  <script src="https://unpkg.com/vue@next"></script>
  <script src="https://unpkg.com/@vue-a11y/skip-to@next"></script>
  <link href="https://unpkg.com/@vue-a11y/skip-to@next/dist/style.css" rel="stylesheet">
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
    Vue.createApp({})
      .use(VueSkipTo.default)
      .mount('#app')
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

## Support route change

[@vue-a11y/skip-to](https://github.com/vue-a11y/vue-skip-to/tree/next) checks if you are using the vue-router, watches changes to `$route.path` and send focus to the vue-skip-to wrapper.

**Recommendation:** To make more sense, use the VueSkipTo component right after the root element of your app.

Read more about accessible routing:
- [Improved accessible routing in Vue.js (updated)](https://marcus.io/blog/improved-accessible-routing-vuejs)
- [What we learned from user testing of accessible client-side routing techniques with Fable Tech Labs](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/)

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
