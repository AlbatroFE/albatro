## Table 动态表格（正在完善）

用于动态展示多条结构类似的数据，可对数据进行自定义操作。

### 基本用法

基础的表格展示用法。

:::demo 当`al-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
<template>
  <al-table :fetchUrl="fetchUrl" :columns="columns" :pageSize="pageSize" :queryParameters="queryParameters" :error-fn="onError">
  </al-table>
</template>

<script>
  export default {
    data() {
      return {
        fetchUrl: '/api/employee/GridQueryEmployees',
        columns: [

        ],
        pageSize: 10,
        queryParameters: {

        },
      }
    },
    methods: {
        onError(e) {
            console.error(e);
        }
    }
  }
</script>
```
:::

### Table Attributes

### Table Events

### Table Methods

### Table Slot