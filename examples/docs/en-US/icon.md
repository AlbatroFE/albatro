## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `al-icon-iconName`.

:::demo

```html
<i class="al-icon-edit"></i>
<i class="al-icon-share"></i>
<i class="al-icon-delete"></i>
<el-button type="primary" icon="al-icon-search">Search</el-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'al-icon-' + name"></i>
      <span class="icon-name">{{'al-icon-' + name}}</span>
    </span>
  </li>
</ul>
