 ## Dialog 对话框
在当前页面状态不变的情况下，弹出对话框，承载其他页面或数据以便用户操作。

### 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

:::demo 调用`this.$dialog.alert`方法即可打开消息提示，它模拟了系统的 `alert`，无法通过按下 ESC 或点击框外关闭。此例中接收了三个参数，`message`，`title`和`confirmButtonText`。值得一提的是，窗口被关闭后，它默认会返回一个`Promise`对象便于进行后续操作的处理。若不确定浏览器是否支持`Promise`，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。
```html
<template>
  <al-button type="text" @click="open">点击打开 Message Box</al-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$dialog.alert('这是一段内容', '标题名称', '确定').then(() => {
            this.$messages.info(`确认操作`);
        });
      }
    }
  }
</script>
```
:::

### 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

:::demo 调用`this.$dialog.confirm`方法即可打开消息提示，它模拟了系统的 `confirm`。此例中接收了五个参数，`message`，`title`，`type`,`confirmButtonText`和`cancelButtonText`。`type`字段表明消息类型，可以为`success`，`error`，`info`和`warning`，无效的设置将会被忽略。注意，第二个参数`title`必须定义为`String`类型。在这里我们用了 Promise 来处理后续响应。

```html
<template>
  <al-button type="text" @click="open">点击打开 Message Box</al-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$dialog.confirm('此操作将永久删除该文件, 是否继续?', '提示', 'warning','确定','取消').then(() => {
          this.$messages.success('删除成功!');
        }).catch(() => {
          this.$messages.info('已取消删除');
        });
      }
    }
  }
</script>
```
:::

### 自定义

可自定义配置不同内容。

:::demo 调用`this.$dialog.show`方法即可打开自定义内容。本例直接调用`$dialog.show`方法，使用了`showConfirmButton，/showCancelButton`字段，用于显示确认/取消按钮。另外可使用`confirmButtonText/cancelButtonText`来自定义按钮文本。此例还使用了`beforeClose`属性，它的值是一个方法，会在 Dialog 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：`action`、实例本身和`done`方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加`loading`状态等；此时若需要关闭实例，可以调用`done`方法（若在`beforeClose`中没有调用`done`，则实例不会关闭）。

```html
<template>
  <al-button type="text" @click="open">点击打开 Message Box</al-button>
</template>

<script>
  export default {
    methods: {
        beforeClose(action, instance, done) {
            if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '执行中...';
                this.$dialog.confirm('是否关闭', '提示', 'warning','确定','取消').then(() => { 
                    instance.confirmButtonLoading = false; 
                    resolve();
                }).catch(() => { instance.confirmButtonLoading = false; 
                    reject();
                });
            } else {
                reject();
            }
      },
      open() {
        const h = this.$createElement;
        this.$dialog.show(h('p', null, [h('span', null, '内容可以是 '),h('i', { style: 'color: teal' }, 'VNode')]),'消息','确定','取消',true,true, (action, instance, done) => {
            if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '执行中...';
                setTimeout(() => {
                    done();
                    setTimeout(() => { instance.confirmButtonLoading = false; }, 300);
                }, 3000);
            } else {
                done();
            }
        }).then(action => {
            this.$messages.info('action: ' + action);
        }).catch(e => {
            this.$messages.info('取消操作');
        });
      }
    }
  }
</script>
```
:::

### 全局方法

如果你完整引入了 Albatro ，它会为 Vue.prototype 添加如下全局方法：$dialog。因此在 Vue instance 中可以采用本页面中的方式调用 `Dialog`。调用参数为：
- `$dialog.alert(message, title, confirmButtonText)`
- `$dialog.confirm(message, title, type, confirmButtonText, cancelButtonText)`
- `$dialog.show(message, title, confirmButtonText, cancelButtonText, showConfirmButton， showCancelButton, beforeClose)`

### 单独引用

如果单独引入 `Dialog`：

```javascript
import { AlDialog } from 'albatro-ui';
```

那么对应于上述四个全局方法的调用方法依次为：AlDialog.alert, AlDialog.confirm 和 AlDialog.show ，调用参数与全局方法相同。

### alert

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | — | — |
| message | 消息正文内容 | string | — | — |
| confirmButtonText | 确定按钮的文本内容 | string | — | 确定 |

### confirm

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | — | — |
| message | 消息正文内容 | string | — | — |
| type | 消息类型，用于显示图标 | string | success / info / warning / error | — |
| cancelButtonText | 取消按钮的文本内容 | string | — | 取消 |
| confirmButtonText | 确定按钮的文本内容 | string | — | 确定 |

### show

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | — | — |
| message | 消息正文内容 | VNode | — | — |
| beforeClose | 关闭前的回调，会暂停实例的关闭 | function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 Dialog 实例，可以通过它访问实例上的属性和方法；done 用于关闭 Dialog 实例 | — | — |
| showCancelButton | 是否显示取消按钮 | boolean | — | false |
| showConfirmButton | 是否显示确定按钮 | boolean | — | true |
| cancelButtonText | 取消按钮的文本内容 | string | — | 取消 |
| confirmButtonText | 确定按钮的文本内容 | string | — | 确定 |
