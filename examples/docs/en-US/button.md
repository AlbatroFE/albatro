## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<al-row>
  <al-button>Default</al-button>
  <al-button type="primary">Primary</al-button>
  <al-button type="success">Success</al-button>
  <al-button type="info">Info</al-button>
  <al-button type="warning">Warning</al-button>
  <al-button type="danger">Danger</al-button>
</al-row>

<al-row>
  <al-button plain>Plain</al-button>
  <al-button type="primary" plain>Primary</al-button>
  <al-button type="success" plain>Success</al-button>
  <al-button type="info" plain>Info</al-button>
  <al-button type="warning" plain>Warning</al-button>
  <al-button type="danger" plain>Danger</al-button>
</al-row>

<al-row>
  <al-button round>Round</al-button>
  <al-button type="primary" round>Primary</al-button>
  <al-button type="success" round>Success</al-button>
  <al-button type="info" round>Info</al-button>
  <al-button type="warning" round>Warning</al-button>
  <al-button type="danger" round>Danger</al-button>
</al-row>

<al-row>
  <al-button icon="al-icon-search" circle></al-button>
  <al-button type="primary" icon="al-icon-edit" circle></al-button>
  <al-button type="success" icon="al-icon-check" circle></al-button>
  <al-button type="info" icon="al-icon-message" circle></al-button>
  <al-button type="warning" icon="al-icon-star-off" circle></al-button>
  <al-button type="danger" icon="al-icon-delete" circle></al-button>
</al-row>
```
:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<al-row>
  <al-button disabled>Default</al-button>
  <al-button type="primary" disabled>Primary</al-button>
  <al-button type="success" disabled>Success</al-button>
  <al-button type="info" disabled>Info</al-button>
  <al-button type="warning" disabled>Warning</al-button>
  <al-button type="danger" disabled>Danger</al-button>
</al-row>

<al-row>
  <al-button plain disabled>Plain</al-button>
  <al-button type="primary" plain disabled>Primary</al-button>
  <al-button type="success" plain disabled>Success</al-button>
  <al-button type="info" plain disabled>Info</al-button>
  <al-button type="warning" plain disabled>Warning</al-button>
  <al-button type="danger" plain disabled>Danger</al-button>
</al-row>
```
:::

### Text Button

Buttons without border and background.

:::demo
```html
<al-button type="text">Text Button</al-button>
<al-button type="text" disabled>Text Button</al-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<al-button type="primary" icon="al-icon-edit"></al-button>
<al-button type="primary" icon="al-icon-share"></al-button>
<al-button type="primary" icon="al-icon-delete"></al-button>
<al-button type="primary" icon="al-icon-search">Search</al-button>
<al-button type="primary">Upload<i class="al-icon-upload al-icon-right"></i></al-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<al-button-group>` to group your buttons.

```html
<al-button-group>
  <al-button type="primary" icon="al-icon-arrow-left">Previous Page</al-button>
  <al-button type="primary">Next Page<i class="al-icon-arrow-right al-icon-right"></i></al-button>
</al-button-group>
<al-button-group>
  <al-button type="primary" icon="al-icon-edit"></al-button>
  <al-button type="primary" icon="al-icon-share"></al-button>
  <al-button type="primary" icon="al-icon-delete"></al-button>
</al-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<al-button type="primary" :loading="true">Loading</al-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<al-row>
  <al-button>Default</al-button>
  <al-button size="medium">Medium</al-button>
  <al-button size="small">Small</al-button>
  <al-button size="mini">Mini</al-button>
</al-row>
<al-row>
  <al-button round>Default</al-button>
  <al-button size="medium" round>Medium</al-button>
  <al-button size="small" round>Small</al-button>
  <al-button size="mini" round>Mini</al-button>
</al-row>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |