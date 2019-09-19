<template>
  <div class="al-table">
         <slot name="toolbar" v-bind:dataSource="dataSource" class="k-toolbar k-grid-toolbar k-grid-top"/>

         <el-table :row-class-name="rowClass" v-loading="loading" :data="dataSource" style="width: 100%" :highlight-current-row="true" :border="true"
                   :stripe="true" tooltip-effect="dark">
             <slot>
                <el-table-column v-for="col in dynamicColumns.filter(x => x.field)" :key="col.field" :prop="col.field" :fixed="col.fixed"
                                :label="col.title" :width="col.width" :min-width="150" show-overflow-tooltip align="center">
                  <template slot-scope="scope">
                      <el-input v-if="(col.editable && scope.row['RowEditable'] === undefined) || (col.editable && scope.row['RowEditable'])" v-model="scope.row[col.field]" size="medium" />
                          <span v-else>{{toFormat(col.format, scope.row[col.field])}}</span>
                  </template>
                </el-table-column>
                <el-table-column v-for="col in dynamicColumns.filter(x => x.command)" :key="col.name" :label="col.title"
                                  :width="col.width" >
                    <template slot-scope="scope">
                      <el-button v-for="comd in col.command.filter(x=> x.visible(scope.row))" :key="comd.name" size="mini" @click="comd.click(scope.row)"
                                    :class="comd.className" :icon="comd.iconClass" style="margin-right: 5px !important;"></el-button>
                    </template>
                </el-table-column>
             </slot>
         </el-table>
         <div class="al-pagination text-right">
             <slot name="pagination" v-bind:dataSource="dataSource">
               <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" @prev-click="prevClick"
                            @next-click="nextClick" :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
                            :total="total">
              </el-pagination>
             </slot>
         </div>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

import { Form, FormItem, Input, Row, Col, Collapse, CollapseItem, InputNumber, Pagination, Tooltip, Loading, Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { GridColumnSchema, FieldTypeEnum, GridModelSchemaType } from "../../super-form/src/schema/GridSchema";
import { encodeQueryData, IUrlParameterSchema } from "../../super-form/src/extension/TzCommonFunc";
import { CustomDataSource } from "../../super-form/src/extension/TzCustomSearch";
import { TzFetch } from "../../super-form/src/extension/TzFetch";
import { TzMessageConst, TzConst } from "../../super-form/src/extension/TzCommonConst";
import "../../super-form/src/extension/DateExtensions";
import "../../super-form/src/extension/StringExtensions";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(InputNumber);
Vue.use(Pagination);
Vue.use(Tooltip);
Vue.use(Loading);

@Component({
    name: "AlTableDynamic",
    props: ["fetchUrl", "columns", "pageSize", "value", "queryParameters"]
})
export default class AlTableDynamic extends Vue {
    @Prop({ default: "", type: String }) fetchUrl!: string;
    @Prop({ default: [], type: [] }) columns!: GridColumnSchema[];
    @Prop({ default: [], type: [] }) value!: any[];
    @Prop({ default: 10, type: Number }) pageSize!: number;
    @Prop() queryParameters!: IUrlParameterSchema;

    currentPage: number = 1;
    schemaModelFields: any = {};

    customDataSource: CustomDataSource = {
        fetchUrl: this.remoteUrl,
        local: this.value != null && this.value.length > 0,
        model: this.value,
        request: {
            page: 1,
            pageSize: this.pageSize ? this.pageSize : 10,
            sort: [
                // {
                //   field: "Name",
                //   dir: "asc"
                // }
            ]
        },
        total: 0,
        dataSource: [],
        loading: false,
        filter: function (filter: any) {
            if (filter) {
                this.request.filter = filter;
            }

            if (this.local) {
                if (this.model) {
                    this.total = this.model.length;

                    //todo: filter
                    let data = this.model.filter((value, i) => {
                        let flag = false;
                        if (filter && filter.filters) {
                            let filters = filter.filters as any[];
                            if (filters.length > 0) {
                                filters.forEach((v, i) => {
                                    if ((value[v.field] as string).indexOf(v.value) > -1) {
                                        flag = true;
                                    }
                                });
                            } else {
                                flag = true;
                            }
                        } else {
                            flag = true;
                        }

                        if (flag) {
                            return value;
                        } else {
                            return null;
                        }
                    });

                    //todo: sort
                    if (this.request.sort && this.request.sort.length > 0) {
                        data = data.sort(
                            (x, y) =>
                                (x[this.request.sort[0].field] > y[this.request.sort[0].field]
                                    ? 1
                                    : -1) * (this.request.sort[0].dir === "asc" ? 1 : -1)
                        );
                    }

                    let skip = (this.request.page - 1) * this.request.pageSize;
                    let end = skip + this.request.pageSize;
                    end = data.length > end ? end : data.length;
                    this.dataSource = data.slice(skip, end);

                    this.onDataBinding(this.dataSource);
                }
            } else {
                this.loading = true;
                TzFetch.Post(this.fetchUrl, this.request, false)
                    .then((data: any) => {
                        if (data) {
                            this.dataSource = data.Data;
                            this.total = data.Total;
                            this.onDataBinding(this.dataSource);
                        } else {
                            this.dataSource = [];
                            this.total = 0;
                        }

                        this.loading = false;
                    }).catch(e => {
                        Message.error(TzMessageConst.DATA_FAIL_MESSAGE)
                        this.loading = false;
                    });
            }
        },
        onDataBinding(data: any) {
            var page = this.request.page;
            var pageSize = this.request.pageSize;
            data.forEach((ele: any, i:number) => {
                ele.RowNumber = (page - 1) * pageSize + i + 1;
            });
        }
    };

    get dataSource() {
        return this.customDataSource.dataSource;
    }

    get loading() {
        return this.customDataSource.loading;
    }

    get total() {
        return this.customDataSource.total;
    }

    get remoteUrl() {
       return this.queryParameters ? `${this.fetchUrl}?${encodeQueryData(this.queryParameters)}`: this.fetchUrl;
    }

    get dynamicColumns() {
        this.schemaModelFields = {};
        this.columns
            .filter(x => !String.isNullOrEmpty(x.field))
            .forEach((e, i) => {
                if (e.field === TzConst.RowNumber) {
                    e.width = e.width === undefined ? '60' : e.width;
                    e.filterable = false;
                    e.sortable = false;
                    e.menu = false;
                    e.type = FieldTypeEnum.Number;
                    e.index = -1;
                }                

                let value: GridModelSchemaType = {
                    filterable: e.filterable,
                    sortable: e.sortable,
                    editable: e.editable,
                    nullable: true,
                    type: e.type
                };

                this.schemaModelFields[e.field as string] = value;
            });

        this.$nextTick(() => {
            if (this.value) {
                this.customDataSource.model = this.value;
            }

            this.customDataSource.filter();
        });
        
        return this.columns;
    }

    toFormat(formatter: Function | string | undefined | null, data: string) {
        if(typeof formatter === 'function') {
          return formatter(data)
        }if(typeof formatter === 'string') {
          return formatter;
        } else {
          return data;
        }
    }

    rowClass(data: any){
        if(!String.isNullOrEmpty(data.row.RowClass)){
            return data.row.RowClass;
        }
    }

    handleSizeChange(n:number) {
        console.log(`每页 ${n} 条`);
        this.$emit("sizeChanged", { page: n });
    }

    handleCurrentChange(n:number) {
        console.log(`当前页: ${n}`);
        this.currentPage = n;
        this.customDataSource.request.page = n;
        this.customDataSource.filter();
        this.$emit("currentChange", { page: n });
    }

    prevClick() {
        console.log(`prevClick`);
        this.$emit("prevClick");
    }

    nextClick() {
        console.log(`nextClick`);        
        this.$emit("nextClick");
    }

    @Watch("fetchUrl", { immediate: true, deep : true })
    onFetchUrlChanged(newVal: string, oldVal: string, ) {
      this.onRequest();
    }

    @Watch("columns", { immediate: true, deep : true })
    onColumnsChanged(newVal: string, oldVal: string, ) {
      this.onRequest();
    }

    @Watch("queryParameters", { immediate: true, deep : true })
    onFetchUrlParametersChanged(newVal: IUrlParameterSchema, oldVal: IUrlParameterSchema, ) {
      this.onRequest();
    }

    onRequest() {
        this.customDataSource.fetchUrl = this.fetchUrl + "?" + encodeQueryData(this.queryParameters);
        this.customDataSource.filter();
    }
    
    onReRequest(queryParameters: IUrlParameterSchema, isClearSearch: boolean = true) {
        this.customDataSource.fetchUrl = this.fetchUrl + "?" + encodeQueryData(queryParameters);
        if (isClearSearch) {
            this.customDataSource.filter({});
        } else {
            this.customDataSource.filter();
        }
    }
}

</script>
