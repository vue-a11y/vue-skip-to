# vue-skip-to
It helps people who only use the keyboard to jump to what matters most

The population grows very fast nowadays and with that the number of visually impaired increases as well. Did you know that we have over 350 million visually impaired people in the world?

However, we are responsible for doing our utmost to make our applications usable and accessible to everyone.

"Skip to content" or "skip to a section" of your site is one of the most common accessibility techniques today, but not as used as it should be.

In addition to being a technique recommended by WCAG 2.0, that's where this component was inspired.
https://www.w3.org/TR/WCAG20-TECHS/G1.html  
https://www.w3.org/TR/WCAG20-TECHS/G124.html

## Install
#### NPM
```shell
npm install -S vue-skip-to
```

#### Yarn
```shell
yarn add vue-skip-to
```

## How to use
In your `main.js`
```javascript
import Vue from 'vue'
import VueSkipTo from 'vue-skip-to'

Vue.use(VueSkipTo)
```

In your `App.vue`
```vue
<template>
  <div id="app">
    <vue-skip-to to="#main" text="Skip to main content" />

    <logo :src="require('@/assets/logo.png')" />
    <h1 data-va="main header">{{ msg }}</h1>
    ...
    <div id="main" role="main">
      <!-- My content -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'app'
  components: {
    Logo
  },
  //...
}
</script>
```

## Using with HTML files
```html
<!--omitted -->
<body>
  <div id="app">
    <vue-skip-to to="#main"></vue-skip-to>

    <!-- my header, navigation, and more -->

    <div id="main" role="main">
      <!-- My content -->
    </div>
  </div>

  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vue-skip-to"></script>
  <script>
    Vue.use(VueSkipTo)
    new Vue({
      el: "#app"
    })

  </script>
</body>
</html>
```

## Check live demo
https://vue-skip-to.surge.sh


## Props
Prop            | Data Type  | required  | Description            | Default
--------------- | ---------- | --------- | ---------------------- | -------------
`to`            | String     | false     | Set destination ID     | #main
`text`          | String     | false     | Text content of link   | Skip to main content
`tabindex`      | String     | false     | Specifies the tab order   | null


## Custom style
You can style the link through the selector `.vue-skip-to`

## Feature
Inspired by this article, to know more, access the link:  
http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/

- This component working in all modern browsers and IE9;
- Ensures that the target element receives focus, even if it is not a tag that naturally receives focus as the tag `input` and `a`. In this case, the `div` are also given the focus and the `tabindex` attribute with the value of `-1`;
- Add focus to the destination, even when the address bar already has the corresponding hash;

## Run the tests

```shell
git clone https://github.com/vue-a11y/vue-skip-to.git vue-skip-to
npm install
npm run dev
npm run test
```

Or run Cypress on interactive mode
```shell
npm run test:open
```

## Roadmap
https://github.com/vue-a11y/vue-skip-to/issues/1

## Contributing
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

If you want a faster communication, find me on [@ktquez](https://twitter.com/ktquez)
And follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Thank you**
