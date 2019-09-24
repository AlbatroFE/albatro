## Message 消息提示

常用于主动操作后的反馈提示。

### 基础用法

从顶部出现，3 秒后自动消失。

:::demo Albatro 注册了一个`$messages`方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

```html
<template>
  <al-button :plain="true" @click="open">打开消息提示</al-button>
  <al-button :plain="true" @click="open1">10秒后消失提示</al-button>
  <al-button :plain="true" @click="close">手动调用关闭</al-button>
</template>

<script>
  export default {
    data() {
      return {
        msg: null
      }
    },
    methods: {
      open() {
        this.$messages.show('这是一条消息提示');
      },

      open1() {
        this.msg = this.$messages.show('这是一条消息提示', "success", false, 10000);
      },

      close() {        
        this.msg.close()
      }
    }
  }
</script>
```
:::

### 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo 当需要自定义更多属性时，Message.show也可以接收一个类型为参数。比如，设置`type`字段可以定义不同的状态，默认为`info`。此时正文内容以`message`的值传入。同时，我们也为 AlMessage 的各种 type 注册了方法，可以在不传入`type`字段的情况下像`open4`那样直接调用。
```html
<template>
  <al-button :plain="true" @click="open3">警告</al-button>
  <al-button :plain="true" @click="open2">成功</al-button>
  <al-button :plain="true" @click="open1">消息</al-button>
  <al-button :plain="true" @click="open4">错误</al-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$messages.info('这是一条消息提示');
      },
      open2() {
        this.$messages.success('恭喜你，这是一条成功消息');
      },

      open3() {
        this.$messages.warning('警告哦，这是一条警告消息');
      },

      open4() {
        this.$messages.error('错了哦，这是一条错误消息');
      }
    }
  }
</script>
```
:::

### 可关闭

可以添加关闭按钮。

:::demo 默认的 AlMessage 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用`showClose`字段。此外，和 Notification 一样，Message 拥有可控的`duration`，设置`0`为不会被自动关闭，默认为 3000 毫秒。
```html
<template>
  <al-button :plain="true" @click="open1">消息</al-button>
  <al-button :plain="true" @click="open2">成功</al-button>
  <al-button :plain="true" @click="open3">警告</al-button>
  <al-button :plain="true" @click="open4">错误</al-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$messages.show('这是一条消息提示',"info",true);
      },

      open2() {
        this.$messages.success('恭喜你，这是一条成功消息',true);
      },

      open3() {
        this.$messages.warning('警告哦，这是一条警告消息',true);
      },

      open4() {
       this.$messages.error('错了哦，这是一条错误消息',true);
      }
    }
  }
</script>
```
:::

### 全局方法

Albatro 为 Vue.prototype 添加了全局方法 $messages。因此在 vue instance 中可以采用本页面中的方式调用 `AlMessage`。

### 单独引用

单独引入 `Message`：

```javascript
import { AlMessage } from 'albatro-ui';
```

此时调用方法为 `AlMessage.show("message","success")`。我们也为每个 type 定义了各自的方法，如 `AlMessage.success("message")`。并且可以调用 `AlMessage.closeAll()` 手动关闭所有实例。

### show 通用消息提示
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string | — | — |
| type | 类型 | string | success/warning/info/error | info |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |

### success 消息提示
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string | — | — |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |


### error 消息提示
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string | — | — |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |

### info 消息提示
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string | — | — |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |


### warning 消息提示
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string | — | — |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |

### 方法
| 方法名 | 说明 |
| ---- | ---- |
| closeAll | 关闭所有 Message |
| close | 调用 `AlMessage` 或 `this.$message.` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。 |
