## Quick start

This part walks you through the process of using Albatro in a webpack project.

<!-- ### Use vue-cli@3

We provide an [Element plugin](https://github.com/AlbatroUI/vue-cli-plugin-element) for vue-cli@3, which you can use to quickly build an Element-based project. -->

<!-- ### Use Starter Kit

We provide a general [project template](https://github.com/AlbatroUI/element-starter) for you. For Laravel users, we also have a [template](https://github.com/AlbatroUI/element-in-laravel-starter). You can download and use them directly.

If you prefer not to use them, please read the following. -->

### Import Albatro

You can import Albatro entirely, or just import what you need. Let's start with fully import.

#### Fully import

In main.js:

```javascript
import Vue from "vue";
import AlbatroUI from "albatro-ui";
import "quickstart-ui/lib/theme-albatro/index.css";
import App from "./App.vue";

Vue.use(AlbatroUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

The above imports Albatro entirely. Note that CSS file needs to be imported separately.

#### On demand

With the help of [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), we can import components we actually need, making the project smaller than otherwise.

First, install babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Then edit .babelrc:

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "albatro-ui",
        "styleLibraryName": "theme-albatro"
      }
    ]
  ]
}
```

Next, if you need Button and SuperForm, edit main.js:

```javascript
import Vue from "vue";
import { Button, SuperForm } from "albatro-ui";
import App from "./App.vue";

Vue.component(Button.name, Button);
Vue.component(SuperForm.name, SuperForm);
/* or
 * Vue.use(Button)
 * Vue.use(SuperForm)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

Full example (Component list reference [components.json](https://github.com/AlbatroFE/albatro/blob/master/components.json))

```javascript
import Vue from "vue";
import {
  Button,
  SuperForm
} from "albatro-ui";

Vue.use(Button);
Vue.use(SuperForm);

```

### Global config

When importing Albatro, you can define a global config object. For now this object has two properties: `size` and `zIndex`. The property `size` sets the default size for all components and the property `zIndex` sets the initial z-index (default: 2000) for modal boxes:

Fully import Albatro

```js
import Vue from "vue";
import Albatro from "albatro-ui";
Vue.use(Albatro, { size: 'small', zIndex: 3000 });
```

Partial import Albatro

```js
import Vue from "vue";
import { Button } from "albatro-ui";

Vue.prototype.$ALBATRO = { size: 'small', zIndex: 3000 };
Vue.use(Button);
```

With the above config, the default size of all components that have size attribute will be 'small', and the initial z-index of modal boxes is 3000.

### Start coding

Now you have implemented Vue and Albatro to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.

<!-- ### Use Nuxt.js

We can also start a project using [Nuxt.js](https://nuxtjs.org/):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div> -->
