## SuperForm  (Improving)

## SuperForm

<!-- 由输入框、选择器、单选框、多选框等控件自动渲染组成，用以收集、校验、提交数据，用户只需要提供渲染表单组件的基本组元类型，标签名称，样式等属性，组件自动渲染 -->

### Common Examples
:::demo
```html
<template>
    <al-super-form :form="form" :form-data="formData" :label-width="100" :rules="rules" :isLoading="isLoading" :request-fn="handleSubmit" 
        @request-success="handleSuccess" @request-error="handleError" @request-end="handleEnd" @request="handleRequest">
        <template slot="button-group">
            <al-button type="info" @click="convertToJson">json结构化</al-button>
        </template>
    </al-super-form>
</template>
<script>
export default {
    data() {
        return {
            form: [
                {
                    key: "basic",
                    name: "basic",
                    title: "Basic",
                    isCollapsed: false,
                    rows: [
                        {
                            key: "basic-row1",
                            name: "basic-row1",
                            fields: [
                                {
                                    key: "title",
                                    name: "title",
                                    label: "title",
                                    type: "input",
                                    title: "title",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: {
                                        placeholder: "Please input title"
                                    },
                                    on: {
                                        change: (e) => this.titleChange(e)
                                    },
                                    slots: null
                                },
                                {
                                    key: "count",
                                    name: "count",
                                    label: "number",
                                    type: "number",
                                    title: "number",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null,
                                    class: "",
                                    style: ""
                                },
                                {
                                    key: "number",
                                    name: "number",
                                    label: "人数",
                                    type: "number",
                                    title: "人数",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "basic-row2",
                            name: "basic-row2",
                            fields: [
                                {
                                    key: "finished",
                                    name: "finished",
                                    label: "是否完成",
                                    type: "select",
                                    title: "是否完成",
                                    format: null,
                                    options: [{ text: "是", value: 1 }, { text: "否", value: 0 }],
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "user",
                                    name: "user",
                                    label: "申请人",
                                    type: "dialog",
                                    title: "申请人",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: [
                                        // {
                                        //     type: "tz-employee",
                                        //     component: null,
                                        //     props: {
                                        //         multiply: true
                                        //     },
                                        //     default: [],
                                        //     submit: (data: any) => this.selectEmployee("user", data)
                                        // }
                                    ]
                                },
                                {
                                    key: "total",
                                    name: "total",
                                    label: "总计",
                                    type: "text",
                                    title: "总计",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "basic-row3",
                            name: "basic-row3",
                            fields: [
                                {
                                    key: "isMarried",
                                    name: "isMarried",
                                    label: "婚否",
                                    type: "switch",
                                    title: "婚否",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "tag",
                                    name: "tag",
                                    label: "标签",
                                    type: "tag",
                                    title: "标签",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "autocomplete",
                                    name: "autocomplete",
                                    label: "建议输入框",
                                    type: "autocomplete",
                                    title: "建议输入框",
                                    format: null,
                                    options: [
                                        { value: "三全鲜食（北新泾店）", ext: "长宁区新渔路144号", key: "1" },
                                        { value: "Hot honey 首尔炸鸡（仙霞路）", ext: "上海市长宁区淞虹路661号", key: "2" },
                                        { value: "新旺角茶餐厅", ext: "上海市普陀区真北路988号创邑金沙谷6号楼113", key: "3" }, 
                                        { value: "泷千家(天山西路店)", ext: "天山西路438号", key: "4" },
                                        { value: "胖仙女纸杯蛋糕（上海凌空店）", ext: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101", key: "5" },
                                        { value: "贡茶", ext: "上海市长宁区金钟路633号", key: "6" },
                                        { value: "豪大大香鸡排超级奶爸", ext: "上海市嘉定区曹安公路曹安路1685号", key: "7" },
                                        { value: "茶芝兰（奶茶，手抓饼）", ext: "上海市普陀区同普路1435号", key: "8" },
                                        { value: "十二泷町", ext: "上海市北翟路1444弄81号B幢-107", key: "9" },
                                        { value: "星移浓缩咖啡", ext: "上海市嘉定区新郁路817号", key: "10" },
                                        { value: "阿姨奶茶/豪大大", ext: "嘉定区曹安路1611号", key: "11" },
                                        { value: "新麦甜四季甜品炸鸡", ext: "嘉定区曹安公路2383弄55号", key: "12" },
                                        { value: "Monica摩托主题咖啡店", ext: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F", key: "13" }
                                    ],
                                    on: {
                                        select: (data) => this.autocompleteChange(data)
                                    },
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "basic-row4",
                            name: "basic-row4",
                            fields: [
                                {
                                    key: "radio",
                                    name: "radio",
                                    label: "单选",
                                    type: "radio",
                                    title: "单选",
                                    format: null,
                                    options: [
                                        { text: "男", value: 0 },
                                        { text: "女", value: 1 },
                                        { text: "未知", value: 2, attrs: { disabled: true } }
                                    ],
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "checkbox",
                                    name: "checkbox",
                                    label: "多选",
                                    type: "checkbox",
                                    title: "多选",
                                    format: null,
                                    options: [
                                        { text: "男", value: 0 },
                                        { text: "女", value: 1 },
                                        { text: "未知", value: 2, attrs: { disabled: true } }
                                    ],
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "basic-row5",
                            name: "basic-row5",
                            fields: [
                                {
                                    key: "rate",
                                    name: "rate",
                                    label: "打分",
                                    type: "rate",
                                    title: "打分",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "rate_value",
                                    name: "rate_value",
                                    label: "评分",
                                    type: "rate",
                                    title: "评分",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: {
                                        disabled: true,
                                        "show-score": true
                                    },
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "basic-row6",
                            name: "basic-row6",
                            fields: [
                                {
                                    key: "slider",
                                    name: "slider",
                                    label: "滑块",
                                    type: "slider",
                                    title: "滑块",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "password",
                                    name: "password",
                                    label: "密码",
                                    type: "password",
                                    title: "密码",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "basic-row7",
                            name: "basic-row7",
                            fields: [
                                {
                                    key: "shell",
                                    name: "shell",
                                    label: "超级外壳",
                                    type: "shell",
                                    title: "超级外壳",
                                    format: null,
                                    options: null,
                                    cols: 3,
                                    attrs: null,
                                    slots: [
                                        {
                                            // type: "tz-area-cascader",
                                            // component: null,
                                            // props: {},
                                            // default: ["中国", "陕西", "西安"],
                                            // on: {
                                            //     change: (data) => this.changeShell(data)
                                            // }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    key: "dateandtimeandrange",
                    name: "dateandtimeandrange",
                    title: "日期时间及范围",
                    isCollapsed: false,
                    rows: [
                        {
                            key: "dateandtimeandrange-row1",
                            name: "dateandtimeandrange-row1",
                            fields: [
                                {
                                    key: "year",
                                    name: "year",
                                    label: "年份",
                                    type: "year",
                                    title: "年份",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "month",
                                    name: "month",
                                    label: "月份",
                                    type: "month",
                                    title: "月份",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "date",
                                    name: "date",
                                    label: "日期",
                                    type: "date",
                                    title: "日期",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "dateandtimeandrange-row2",
                            name: "dateandtimeandrange-row2",
                            fields: [
                                {
                                    key: "dates",
                                    name: "dates",
                                    label: "多个日期",
                                    type: "dates",
                                    title: "多个日期",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "datetime",
                                    name: "datetime",
                                    label: "日期时间",
                                    type: "datetime",
                                    title: "日期时间",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "time",
                                    name: "time",
                                    label: "时间",
                                    type: "time",
                                    title: "时间",
                                    format: null,
                                    options: {
                                        start: "08:00",
                                        step: "02:00",
                                        end: "19:00"
                                    },
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "dateandtimeandrange-row3",
                            name: "dateandtimeandrange-row3",
                            fields: [
                                {
                                    key: "daterange",
                                    name: "daterange",
                                    label: "日期范围",
                                    type: "daterange",
                                    title: "日期范围",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "datetimerange",
                                    name: "datetimerange",
                                    label: "时间和日期范围",
                                    type: "datetimerange",
                                    title: "时间和日期范围",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "timerange",
                                    name: "timerange",
                                    label: "时间范围",
                                    type: "timerange",
                                    title: "时间范围",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        },
                        {
                            key: "dateandtimeandrange-row4",
                            name: "dateandtimeandrange-row4",
                            fields: [
                                {
                                    key: "week",
                                    name: "week",
                                    label: "周",
                                    type: "week",
                                    title: "周",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                },
                                {
                                    key: "monthrange",
                                    name: "monthrange",
                                    label: "月份范围",
                                    type: "monthrange",
                                    title: "月份范围",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        }
                    ]
                },
                {
                    key: "grid",
                    name: "grid",
                    title: "动态列表",
                    isCollapsed: false,
                    rows: [
                        {
                            key: "grid-row1",
                            name: "grid-row",
                            fields: [
                                {
                                    key: "dynamic-grid",
                                    name: "dynamic-grid",
                                    label: "薪酬项",
                                    type: "grid",
                                    title: "薪酬项",
                                    format: null,
                                    options: {
                                        remote: "/api/Employees/GridQueryEmployees",
                                        schema: [
                                            {
                                                field: "RowNumber",
                                                title: "序号",
                                                width: "8%",
                                                filterable: false,
                                                sortable: false,
                                                editable: false,
                                                menu: false,
                                                type: "number",
                                                index: 0
                                            },
                                            {
                                                field: "Name",
                                                title: "名称",
                                                filterable: true,
                                                sortable: true,
                                                editable: false,
                                                menu: true,
                                                type: "string",
                                                width: "20%",
                                                index: 1
                                            },
                                            {
                                                field: "Code",
                                                title: "编号",
                                                filterable: true,
                                                sortable: true,
                                                editable: false,
                                                menu: true,
                                                type: "string",
                                                width: "10%",
                                                index: 2
                                            },
                                            {
                                                field: "CompanyTypeName",
                                                title: "所属公司",
                                                filterable: true,
                                                sortable: true,
                                                editable: false,
                                                menu: true,
                                                type: "string",
                                                width: "30%",
                                                index: 3
                                            },
                                            {
                                                field: "OrganizationName",
                                                title: "所属机构",
                                                filterable: true,
                                                sortable: true,
                                                editable: false,
                                                menu: true,
                                                type: "string",
                                                width: "30%",
                                                index: 4
                                            }
                                        ]
                                    },
                                    cols: 3,
                                    attrs: null,
                                    slots: null
                                }
                            ]
                        }
                    ]
                },
                {
                    key: "remark",
                    name: "remark",
                    title: "备注信息",
                    isCollapsed: false,
                    rows: [
                        {
                            key: "remark-row1",
                            name: "remark-row1",
                            fields: [
                                {
                                key: "content",
                                name: "content",
                                label: "内容",
                                type: "textarea",
                                title: "内容",
                                format: null,
                                options: null,
                                cols: 3,
                                attrs: null,
                                slots: null
                                }
                            ]
                        },
                        {
                            key: "remark-row2",
                            name: "remark-row2",
                            fields: [
                                {
                                    key: "button",
                                    name: "button",
                                    label: "按钮",
                                    type: "button",
                                    title: "提交",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: {
                                        type: "primary"
                                    },
                                    slots: null,
                                    class: "",
                                    on: {
                                        click: () => {}
                                    }
                                },
                                {
                                    key: "button1",
                                    name: "button1",
                                    label: "按钮",
                                    type: "button",
                                    title: "提交",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: {
                                        type: "success"
                                    },
                                    slots: null,
                                    class: "",
                                    on: {
                                        click: () => {}
                                    }
                                },
                                {
                                    key: "button2",
                                    name: "button2",
                                    label: "按钮",
                                    type: "button",
                                    title: "提交",
                                    format: null,
                                    options: null,
                                    cols: 1,
                                    attrs: {
                                        type: "info"
                                    },
                                    slots: null,
                                    class: "",
                                    on: {
                                        click: () => {}
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            formData: {
                title: null,
                content: null,
                count: 100,
                number: 0.5,
                user: null,
                userId: null,
                total: 50,
                finished: 1,
                isMarried: true,
                shell: ["中国", "陕西", "西安"],
                time: "",
                tag: ["标签1", "标签2"],
                radio: 1,
                checkbox: [],
                date: "2019-08-22",
                datetime: "2019-08-22 16:12:55",
                rate: 0,
                rate_value: 3.7,
                slider: 50,
                password: "111111",
                year: "2019",
                month: "2019-08",
                daterange: "",
                monthrange: "",
                datetimerange: "",
                dates: "2019-08-22",
                week: "",
                timerange: "",
                autocomplete: "",
                autocompleteId: ""
            },
            rules: {
                title: [{ required: true, message: "请输入标题", trigger: "blur" }],
                content: [{ required: true, message: "请输入内容", trigger: "blur" }],
                finished: [{ required: true, message: "请选择是否完成", trigger: "blur" }],
                user: [{ required: true, message: "请选择申请人", trigger: "blur" }],
                time: [{ required: true, message: "请选择时间", trigger: "blur" }]
            },
            isLoading: false
        }
    },
    methods: {
        titleChange(e) {},
        autocompleteChange(data) {
            this.formData.autocompleteId = data.key;
        },
        changeShell(data) {
            Vue.set(this.formData, "shell", data);
        },
        selectEmployee(name, value) {
            // if (value && value.length) {
            // Vue.set(this.formData, name, value.map((x: any) => x.Name).join("；"));
            // Vue.set(
            //     this.formData,
            //     name + "Id",
            //     value.map((x: any) => x.Id).join("；")
            // );
            // } else {
            // Vue.set(this.formData, name, value.Name);
            // Vue.set(this.formData, name + "Id", value.Id);
            // }

            // //修改默认值
            // var fields = getFormDesc(this.form);
            // var field = fields.filter(x => x.key === name)[0];

            // if (field) {
            // field.slots[0].default = value.map((x: any) => {
            //     return { Id: x.Id, Name: x.Name };
            // });
            // }
        },
        handleSubmit(data) {
            this.$message.success(JSON.stringify(data));
            return Promise.resolve(data);
        },
        handleSuccess(response) {
            this.$message.success("创建成功");
        },
        handleError(response) {
            this.$message.success("创建失败");
        },
        handleEnd(response) {
            this.$message.success("处理结束");
        },
        handleRequest(response) {
            this.isLoading = true;
            this.$message.success("自定义处理");
        },
        convertToJson() {
            // this.form_json = this.form;
            // this.isDisplay = true;
        }
    }
};

</script>
```
:::

### Form Attributes

| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| form | 表单元素 |  | TzSuperFormGroup[] | — |
| formData   | 表单数据对象 | object      |                  —                |  — |
| rules    | 表单验证规则 | object | — | — |
| isLoading    | 提交状态 | boolean | — | false |
| isHideSubmitBtn | 是否隐藏submit按钮 | boolean | — | false |
| isHideBackBtn | 是否隐藏back按钮 | boolean | — | false |
| submitBtnText | 提交按钮文本 | string | —  | '提交' |
| backBtnText | 返回按钮文本 | string | —  | '返回' |
| labelWidth | 标签宽度 | string | — | '120px' |
| single    | 是否单组，即不分组，默认为false，即form属性默认分组（至少有一个分组） | boolean | — | false |
| isCustomHandleRequest    | 是否自定义处理请求 | boolean | — | false |
| isAutoHandlePost    | 是否自动提交，设置action有效 | boolean | — | false |
| action    | 提交地址 | string | — | — |


### Form Events
| 事件名称 | 说明    | 回调参数  |
|--------- |-------- |---------- |
| request-fn | 内部自动处理请求回调函数，即由外部处理函数自行处理请求 | 自动提交，则为请求响应数据；非自动提交，则为表单数据 |
| request-success | 默认提交成功触发 | 由request-fn处理后的数据 |
| request-error | 默认提交失败触发 | 错误信息 |
| request-end | 默认提交结束触发 | — |
| request | 自定义处理函数 | 表单数据|


### Form Group Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| key | 分组标识 | string | — | — |
| name | 分组名称 | string | — | — |
| title | 分组名称 | string | — | — |
| isCollapsed | 是否收起 | boolean | — | false |
| rows | 行 | TzSuperFormRow[] | — | — |


### Form Row Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| key | 行标识 | string | — | — |
| name | 行名称 | string | — | — |
| fields | 字段 | TzSuperFormField[] | — | — |


### Form Field Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| key | 字段标识 | string | — | — |
| name | 字段名称 | string | — | — |
| label | 字段标签名称 | string | — | — |
| type | 字段类型 | string | 具体参考本文开头的例子，基本涵盖所有类型 | — |
| title | 字段名称 | string | — | — |
| options | 选项 | any |  | — |
| cols | 占用列数量 | number | 1,2,3 | 1 |
| attrs | 绑定字段元素的属性，最终通过v-bind传递,具体属性参考element-ui文档 | any | — | — |
| slots | 绑定slots | [] | — | — |
| class | 绑定class | string | — | — |
| style | 绑定style | string | — | — |
| on | 绑定事件，最终通过v-on传递，具体参考element-ui文档 | any | — | — |
<!-- | valueFormatter | 行名称 | string | — | — | -->


### Form Field Option Attributes (Autocomplete Basic)
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| value | 值 | string | — | — |
| key | 健 | string | — | — |
| ext | 附加文字或说明文字 | string | — | — |


### Form Field Option Attributes (Autocomplete Remote)
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| remote | 远程地址 | string | — | — |
| schema | 数据schema,例如 {  Id: { editable: false, nullable: true, filterable: false, type: "string" }, Name: { editable: false, nullable: true, filterable: true, type: "string" }, Code: { editable: false, nullable: true, filterable: true, type: "string" }, }| any | — | — |
| map | 业务数据转换对应，例如 { value: "Name", ext: "Code", key: "Id" } | string | — | — |


### Form Field Option Attributes (Radio & Checkbox)
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| text | 显示的文本 | string | — | — |
| value | 对应的值 | string/number/boolean | — | — |
| attrs | 属性 | any| — | — |


### Form Field Option Attributes (Date & Time)
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| start | 开始时间或日期 | string | — | — |
| step | 位移 | string | — | — |
| end | 截止时间或日期 | string| — | — |


### Form Field Option Attributes (Grid)
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| remote | 远程地址 | string | — | — |
| schema | 数据schema，例如：[{field: "RowNumber", title: "序号", width: "8%", filterable: false, sortable: false, editable: false, menu: false, type: "number", index: 0}],对应的字段表示：field: <字段key>, title: <字段显示名>, width: <占用宽度百分比>, filterable: <是否能过滤>, sortable: <是否能排序>, editable: <是否可编辑>, menu: <是否启用菜单>, type: <字段类型>, index: <显示顺序>} | [] | — | — |



