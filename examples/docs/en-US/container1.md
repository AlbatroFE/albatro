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

<!-- ### Example

:::demo
```html
<al-container style="height: 500px; border: 1px solid #eee">
  <al-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <al-menu :default-openeds="['1', '3']">
      <al-submenu index="1">
        <template slot="title"><i class="al-icon-message"></i>Navigator One</template>
        <al-menu-item-group>
          <template slot="title">Group 1</template>
          <al-menu-item index="1-1">Option 1</al-menu-item>
          <al-menu-item index="1-2">Option 2</al-menu-item>
        </al-menu-item-group>
        <al-menu-item-group title="Group 2">
          <al-menu-item index="1-3">Option 3</al-menu-item>
        </al-menu-item-group>
        <al-submenu index="1-4">
          <template slot="title">Option4</template>
          <al-menu-item index="1-4-1">Option 4-1</al-menu-item>
        </al-submenu>
      </al-submenu>
      <al-submenu index="2">
        <template slot="title"><i class="al-icon-menu"></i>Navigator Two</template>
        <al-menu-item-group>
          <template slot="title">Group 1</template>
          <al-menu-item index="2-1">Option 1</al-menu-item>
          <al-menu-item index="2-2">Option 2</al-menu-item>
        </al-menu-item-group>
        <al-menu-item-group title="Group 2">
          <al-menu-item index="2-3">Option 3</al-menu-item>
        </al-menu-item-group>
        <al-submenu index="2-4">
          <template slot="title">Option 4</template>
          <al-menu-item index="2-4-1">Option 4-1</al-menu-item>
        </al-submenu>
      </al-submenu>
      <al-submenu index="3">
        <template slot="title"><i class="al-icon-setting"></i>Navigator Three</template>
        <al-menu-item-group>
          <template slot="title">Group 1</template>
          <al-menu-item index="3-1">Option 1</al-menu-item>
          <al-menu-item index="3-2">Option 2</al-menu-item>
        </al-menu-item-group>
        <al-menu-item-group title="Group 2">
          <al-menu-item index="3-3">Option 3</al-menu-item>
        </al-menu-item-group>
        <al-submenu index="3-4">
          <template slot="title">Option 4</template>
          <al-menu-item index="3-4-1">Option 4-1</al-menu-item>
        </al-submenu>
      </al-submenu>
    </al-menu>
  </al-aside>
  
  <al-container>
    <al-header style="text-align: right; font-size: 12px">
      <al-dropdown>
        <i class="al-icon-setting" style="margin-right: 15px"></i>
        <al-dropdown-menu slot="dropdown">
          <al-dropdown-item>View</al-dropdown-item>
          <al-dropdown-item>Add</al-dropdown-item>
          <al-dropdown-item>Delete</al-dropdown-item>
        </al-dropdown-menu>
      </al-dropdown>
      <span>Tom</span>
    </al-header>
    
    <al-main>
      <al-table :data="tableData">
        <al-table-column prop="date" label="Date" width="140">
        </al-table-column>
        <al-table-column prop="name" label="Name" width="120">
        </al-table-column>
        <al-table-column prop="address" label="Address">
        </al-table-column>
      </al-table>
    </al-main>
  </al-container>
</al-container>

<style>
  .al-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .al-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
``` 
:::-->

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