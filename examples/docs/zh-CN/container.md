## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<al-container>`：外层容器。当子元素中包含 `<al-header>` 或 `<al-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<al-header>`：顶栏容器。

`<al-aside>`：侧边栏容器。

`<al-main>`：主要区域容器。

`<al-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<al-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<al-container>`。
:::

### 常见页面布局

:::demo
```html
<al-container>
  <al-header>Header</al-header>
  <al-main>Main</al-main>
</al-container>

<al-container>
  <al-header>Header</al-header>
  <al-main>Main</al-main>
  <al-footer>Footer</al-footer>
</al-container>

<al-container>
  <al-aside width="200px">Aside</al-aside>
  <al-main>Main</al-main>
</al-container>

<al-container>
  <al-header>Header</al-header>
  <al-container>
    <al-aside width="200px">Aside</al-aside>
    <al-main>Main</al-main>
  </al-container>
</al-container>

<al-container>
  <al-header>Header</al-header>
  <al-container>
    <al-aside width="200px">Aside</al-aside>
    <al-container>
      <al-main>Main</al-main>
      <al-footer>Footer</al-footer>
    </al-container>
  </al-container>
</al-container>

<al-container>
  <al-aside width="200px">Aside</al-aside>
  <al-container>
    <al-header>Header</al-header>
    <al-main>Main</al-main>
  </al-container>
</al-container>

<al-container>
  <al-aside width="200px">Aside</al-aside>
  <al-container>
    <al-header>Header</al-header>
    <al-main>Main</al-main>
    <al-footer>Footer</al-footer>
  </al-container>
</al-container>

<style>
  .al-header, .al-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .al-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .al-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .al-container {
    margin-bottom: 40px;
  }
  
  .al-container:nth-child(5) .al-aside,
  .al-container:nth-child(6) .al-aside {
    line-height: 260px;
  }
  
  .al-container:nth-child(7) .al-aside {
    line-height: 320px;
  }
</style>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `al-header` 或 `al-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |