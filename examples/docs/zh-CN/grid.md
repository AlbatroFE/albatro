## Grid 动态列表

用于动态展示多条结构类似的数据，可对数据进行自定义操作。

### 基本用法

基础的表格展示用法。

:::demo 当`al-grid`元素中注入`fetchUrl`,`columns`等属性后，Table 可自动获取数据并自动填充数据。
```html
<template>
  <al-grid :fetchUrl="fetchUrl" :columns="columns" :pageSize="pageSize" :queryParameters="queryParameters" :error-fn="onError" jsonp :id-key="'ProductID'">
    <template slot="toolbar" slot-scope="dataSource">
      <div style="text-align:right;margin: 0px 0px 20px 0px;">
        <el-button type="success" @click="submit(dataSource)">提交</el-button>
      </div>
    </template>
  </al-grid>
</template>

<script>
    
  export default {
    data() {
      return {
        fetchUrl: 'https://demos.telerik.com/kendo-ui/service/Products',
        pageSize: 10,
        queryParameters: {
          
        },
      }
    },
    methods: {
        onError(e) {
            console.error(e);
        },
        edit(data) {
          this.$dialog.alert('编辑：'+ data.ProductName)
        },
        detail(data) {
          this.$dialog.alert('查看：'+ data.ProductName)
        },
        submit(data) {
          console.log("data:" + JSON.stringify(data.dataSource.kendoDataSource.data(), null, '  '))
          this.$messages.info("信息已打印，請查看控制台", true)
        }
    },
    computed: {
      commands() {
        var commands = [
              {
                  name: "Detail",
                  text: "",
                  title: "編輯",
                  className: "al-grid--menu al-grid--menu--mini al-grid--menu-detail",
                  click: this.detail,
                  visible: function(dataItem) { return dataItem },
                  iconClass: "el-icon-view"
              },
              {
                  name: "Edit",
                  text: "",
                  title: "編輯",
                  className: "al-grid--menu al-grid--menu--mini al-grid--menu-edit",
                  click: this.edit,
                  visible: function(dataItem) { return dataItem && dataItem.UnitsInStock > 6 },
                  iconClass: "el-icon-edit"
              }
          ];

          return commands;
      },
      columns() {
        return [
          {
            field: "RowNumber",
            title: "序号",
            width: "120px",
            filterable: false,
            sortable: false,
            editable: false,
            type: "number",
            menu:false,
            format: null,
            commmand: null,
            index: 0,
            hidden: false,
            values: null
          }, 
          {
            field: "ProductID",
            title: "商品ID",
            width: "250px",
            filterable: true,
            sortable: true,
            editable: false,
            type: "string",
            menu: true,
            format: null,
            commmand: null,
            index: 1,
            hidden: true,
            values: null
          }, 
          {
            field: "ProductName",
            title: "商品名称",
            width: "250px",
            filterable: true,
            sortable: true,
            editable: false,
            type: "string",
            menu: true,
            format: null,
            commmand: null,
            index: 1,
            hidden: false,
            values: null
          },          
          {
            field: "UnitPrice",
            title: "单价",
            filterable: true,
            sortable: true,
            editable: false,
            type: "number",
            menu:true,
            format: "￥{0:N3}",
            commmand: null,
            index: 0,
            hidden: false,
            values: null
          },          
          {
            field: "UnitsInStock",
            title: "库存量",
            filterable: true,
            sortable: true,
            editable: true,
            type: "number",
            menu:true,
            format: null,
            commmand: null,
            index: 2,
            hidden: false,
            values: null
          },          
          {
            field: "Discontinued",
            title: "停产",
            filterable: true,
            sortable: true,
            editable: false,
            type: "string",
            menu:true,
            format: null,
            commmand: null,
            index: 3,
            hidden: false,
            values: null
          },          
          {
            title: "操作",            
            filterable: false,
            sortable: false,
            editable: false,
            type: "command",
            menu:false,
            command: this.commands,
            //command: [{ name: "edit", visible: function(dataItem) { return true } }],
            width: "15%",            
            index: 99
          }
        ]
      }
    },
  }
</script>

```
:::

### Grid Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| fetchUrl | 请求数据的远程地址 | string | — | — |
| columns | 显示的表格列，包括 | array | — | — |
| pageSize | 分页，每页显示数据数量  | number | — | 10 |
| queryParameters | 请求地址参数，例如token  | 键值对，参考IUrlParameterSchema | — | — |
| error-fn | 请求错误的回调  | Function | — | — |
| jsonp | 是否以jsonp跨域方式请求数据, 注意：此方式访问数据不支持服务器端分页，过滤等  | boolean | — | false |
| id-key | 作为id的键名称  | string | — | id |
| height | grid列表高度  | string | '450'/'450px'/'30em'/'auto' | '450' |

### Grid Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| on-request-before-send | 请求发送之前触发 | 每页条数 |

### Grid Slot
| name | 说明 |
|------|--------|
| toolbar | Table 表头之前显示的内容，例如显示提交按钮等操作按钮等，slot-scope="dataSource"为当前表格所有列数据 |

### GridColumnSchema

| 属性      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| field | 列对应字段名称 | string | — | — |
| title | 列对应字段显示名 | array | — | — |
| width | 列宽度  | string | — | — |
| filterable | 是否可过滤  | boolean | — | false |
| sortable | 是否可排序  | boolean | — | false |
| editable | 是否可编辑 | boolean | — | false |
| type | 列对应数据类型 | string | /string/number/date/enums/command | — |
| menu | 是否显示列头菜单，目前暂时不能用，后续支持 | — | false |
| format | 格式化函数，例如金额 | Function | — | — |
| command | 每行数据后可操作的行为定义，当type为command时有效 | GridCommand[] | — | — |
| index | 列显示顺序 | number | — | — |
| hidden | 是否隐藏列 | boolean | — | false |
| values | 当type为enums枚举时，设置有效，枚举对应显示名称，暂时不支持，后续完善 | | — | — |


:::tip
以上所有属性中请勿填写特殊字符，例如$符号。特殊字符可能会导致渲染模板失败。
:::

### GridCommand

| 属性      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 操作的key，例如edit,delete | string | — | — |
| title | 操作的名称，暂时无用，但是请设置以区分，后续将完善在不显示图标情况下，以此值填充 | string | — | — |
| click | 操作处理函数  | Function | — | — |
| visible | 操作是否显示处理函数  | Function，回调函数参数为当前行的数据 | — | — |
| iconClass | 图标class  | string | — | — |
| className | 操作class  | string | — | — |
| index | 操作显示顺序 | number | — | — |