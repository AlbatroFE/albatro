## 快速上手

本节将介绍如何在项目中使用 Albatro。

### 引入 Albatro

你可以引入整个 Albatro，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Albatro。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import App from "./App.vue";

import AlbatroUI from "albatro-ui";
import 'albatro-ui/lib/theme-albatro/index.css';

Vue.use(AlbatroUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Albatro 的引入。需要注意的是，样式文件需要单独引入。
<!-- 
#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

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

接下来，如果你只希望引入部分组件，比如 Button 和 SuperForm，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import { Button, SuperForm } from "albatro-ui";
import App from "./App.vue";

Vue.component(Button.name, Button);
Vue.component(SuperForm.name, SuperForm);
/* 或写为
 * Vue.use(Button)
 * Vue.use(SuperForm)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 [components.json](https://github.com/AlbatroFE/albatro/blob/master/components.json) 为准）

```javascript
import Vue from "vue";
import {
  Button,
  SuperForm
} from "albatro-ui";

Vue.use(Button);
Vue.use(SuperForm);
```

### 全局配置

在引入 Albatro 时，可以传入一个全局配置对象。该对象目前支持 `size` 与 `zIndex` 字段。`size` 用于改变组件的默认尺寸，`zIndex` 设置弹框的初始 z-index（默认值：2000）。按照引入 Albatro 的方式，具体操作如下：

完整引入 Albatro ：

```js
import Vue from "vue";
import Albatro from "albatro-ui";
Vue.use(Albatro, { size: 'small', zIndex: 3000 });
```

按需引入 Albatro ：

```js
import Vue from "vue";
import { Button } from "albatro-ui";

Vue.prototype.$ALBATRO = { size: 'small', zIndex: 3000 };
Vue.use(Button);
```

按照以上设置，项目中所有拥有 `size` 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。 -->

### 开始使用

至此，一个基于 Vue 和 Albatro 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

