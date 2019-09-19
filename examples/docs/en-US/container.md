## Container
Container components for scaffolding basic structure of the page:

`<al-container>`: wrapper container. When nested with a `<al-header>` or `<al-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<al-header>`: container for headers.

`<al-aside>`: container for side sections (usually a side nav).

`<al-main>`: container for main sections.

`<al-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<al-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<al-container>`.
:::

### Common layouts

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
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `al-header` or `al-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |