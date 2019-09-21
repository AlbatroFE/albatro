## Layout

Quickly and easily create layouts with the basic 24-column.

### Basic layout

Create basic grid layout using columns.

:::demo With `row` and `col`, we can easily manipulate the layout using the `span` attribute.
```html
<al-row>
  <al-col :span="24"><div class="grid-content bg-purple-dark"></div></al-col>
</al-row>
<al-row>
  <al-col :span="12"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="12"><div class="grid-content bg-purple-light"></div></al-col>
</al-row>
<al-row>
  <al-col :span="8"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="8"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="8"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
</al-row>
<al-row>
  <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="4"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="4"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="4"><div class="grid-content bg-purple-light"></div></al-col>
</al-row>

```
:::

### Column spacing

Column spacing is supported.

:::demo Row provides `gutter` attribute to specify spacings between columns, and its default value is 0.
```html
<al-row :margin="20">
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>

```
:::

### Hybrid layout

Form a more complex hybrid layout by combining the basic 1/24 columns.

:::demo
```html
<al-row :margin="20">
  <al-col :span="16"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="8"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row :margin="20">
  <al-col :span="8"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="8"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row :margin="20">
  <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="16"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
</al-row>

```
:::

### Column offset

You can specify column offsets.

:::demo You can specify the number of column offset by setting the value of `offset` attribute of Col.

```html
<al-row :margin="20">
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row :margin="20">
  <al-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row :margin="20">
  <al-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>

```
:::

### Alignment

Use the flex layout to make flexible alignment of columns.

:::demo You can enable flex layout by setting `type` attribute to 'flex', and define the layout of child elements by setting `horizontal-align` attribute with start, center, end, space-between or space-around.
```html
<al-row flex class="row-bg">
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row flex class="row-bg" horizontal-align="center">
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row flex class="row-bg" horizontal-align="end">
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row flex class="row-bg" horizontal-align="space-between">
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>
<al-row flex class="row-bg" horizontal-align="space-around">
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
</al-row>

```
:::

### Responsive Layout

Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg and xl.

:::demo
```html
<al-row :margin="10">
  <al-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></al-col>
  <al-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></al-col>
  <al-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></al-col>
  <al-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></al-col>
</al-row>

```

:::
### Row Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tag | custom element tag | string | * | div |
| margin | grid spacing | number | — | 0 |
| flex | determine whether it's a flex layout mode, works in modern browsers | boolean | — | false |
| horizontal-align | horizontal alignment of flex layout | string | start/end/center/space-around/space-between | start |
| vertical-align | vertical alignment of flex layout | string | top/middle/bottom | top |

### Col Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | number of column the grid spans | number | — | 24 |
| offset | number of spacing on the left side of the grid | number | — | 0 |
| xs | `<768px` Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | — | — |
| sm | `≥768px` Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | — | — |
| md | `≥992px` Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | — | — |
| lg | `≥1200px` Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | — | — |
| xl | `≥1920px` Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | — | — |
| tag | custom element tag | string | * | div |


