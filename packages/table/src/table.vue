<template>
  <div class="al-table">
    <slot
      name="toolbar"
      v-bind:dataSource="dataSource"
      class="k-toolbar k-grid-toolbar k-grid-top"
    />

    <el-table
      :row-class-name="rowClass"
      v-loading="loading"
      :data="dataSource"
      style="width: 100%"
      :highlight-current-row="true"
      :border="true"
      :stripe="true"
      tooltip-effect="dark"
    >
      <slot>
        <el-table-column
          v-for="col in dynamicColumns.filter(x => x.field)"
          :key="col.field"
          :prop="col.field"
          :fixed="col.fixed"
          :label="col.title"
          :width="col.width"
          :min-width="150"
          show-overflow-tooltip
          align="center"
        >
          <template slot-scope="scope">
            <el-input
              v-if="(col.editable && scope.row['RowEditable'] === undefined) || (col.editable && scope.row['RowEditable'])"
              v-model="scope.row[col.field]"
              size="medium"
            />
            <span v-else>{{toFormat(col.format, scope.row[col.field])}}</span>
          </template>
        </el-table-column>
        <el-table-column
          v-for="col in dynamicColumns.filter(x => x.command)"
          :key="col.name"
          :label="col.title"
          :width="col.width"
        >
          <template slot-scope="scope">
            <el-button
              v-for="comd in col.command.filter(x=> x.visible(scope.row))"
              :key="comd.name"
              size="mini"
              @click="comd.click(scope.row)"
              :class="comd.className"
              :icon="comd.iconClass"
              style="margin-right: 5px !important;"
            ></el-button>
          </template>
        </el-table-column>
      </slot>
    </el-table>
    <div class="al-pagination text-right">
      <slot name="pagination" v-bind:dataSource="dataSource">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="prevClick"
          @next-click="nextClick"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total"
        ></el-pagination>
      </slot>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Input, Pagination, Tooltip, Loading, Message } from "element-ui";

import {
  GridColumnSchema,
  FieldTypeEnum,
  GridModelSchemaType
} from "packages/utils/schema/GridSchema";
import {
  encodeQueryData,
  IUrlParameterSchema
} from "packages/utils/extension/TzCommon";
import { CustomDataSource } from "packages/utils/extension/TzCustomSearch";
import { TzFetch } from "packages/utils/extension/TzFetch";
import { TzMessageConst, TzConst } from "packages/utils/extension/TzCommon";
import "packages/utils/extension/StringExtensions";

Vue.use(Tooltip);
Vue.use(Loading);
Vue.use(Input);
Vue.use(Pagination);

@Component({
  name: "AlTable",
  props: ["fetchUrl", "columns", "pageSize", "queryParameters", "errorFn"]
})
export default class AlTable extends Vue {
  @Prop({ default: "", type: String }) private fetchUrl!: string;
  @Prop({ default: [], type: [] }) private columns!: GridColumnSchema[];
  @Prop({ default: 10, type: Number }) private pageSize!: number;
  @Prop() private queryParameters!: IUrlParameterSchema;
  @Prop() private errorFn!: Function;

  currentPage: number = 1;
  schemaModelFields: any = {};

  customDataSource: CustomDataSource = {
    fetchUrl: this.remoteUrl,
    local: false,
    model: [],
    request: {
      page: 1,
      pageSize: this.pageSize ? this.pageSize : 10
    },
    onError: this.errorFn,
    total: 0,
    dataSource: [],
    loading: false,
    filter: function(filter: any) {
      if (filter) {
        this.request.filter = filter;
      }

      if (this.fetchUrl) {
        this.loading = true;
        TzFetch.Post(this.fetchUrl, this.request, false)
          .then((data: any) => {
            if (data) {
              this.model = data.Data;
              this.dataSource = data.Data;
              this.total = data.Total;
              this.onDataBinding(this.dataSource);
            } else {
              this.dataSource = [];
              this.total = 0;
            }

            this.loading = false;
          })
          .catch(err => {
            this.loading = false;
            this.onError(err);
          });
      }
    },
    onDataBinding(data: any) {
      var page = this.request.page;
      var pageSize = this.request.pageSize;
      data.forEach((ele: any, i: number) => {
        ele.RowNumber = (page - 1) * pageSize + i + 1;
      });
    }
  };

  created() {
    if (!this.fetchUrl) {
      this.errorFn("the fetch url is not empty");
    }
  }

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
    var query_url_parameters = encodeQueryData(this.queryParameters);
    return query_url_parameters ? `${this.fetchUrl}?${query_url_parameters}` : this.fetchUrl;
  }

  get dynamicColumns() {
    this.schemaModelFields = {};
    this.columns
      .filter(x => !String.isNullOrEmpty(x.field))
      .forEach((e, i) => {
        if (e.field === TzConst.RowNumber) {
          e.width = e.width === undefined ? "60" : e.width;
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
      this.customDataSource.filter();
    });

    return this.columns;
  }

  private toFormat(
    formatter: Function | string | undefined | null,
    data: string
  ) {
    if (typeof formatter === "function") {
      return formatter(data);
    } else if (typeof formatter === "string") {
      return formatter;
    } else {
      return data;
    }
  }

  private rowClass(data: any) {
    if (!String.isNullOrEmpty(data.row.RowClass)) {
      return data.row.RowClass;
    }
  }

  private handleSizeChange(n: number) {
    console.log(`每页 ${n} 条`);
    this.$emit("sizeChanged", { page: n });
  }

  private handleCurrentChange(n: number) {
    console.log(`当前页: ${n}`);
    this.currentPage = n;
    this.customDataSource.request.page = n;
    this.customDataSource.filter();
    this.$emit("currentChange", { page: n });
  }

  private prevClick() {
    console.log(`prevClick`);
    this.$emit("prevClick");
  }

  private nextClick() {
    console.log(`nextClick`);
    this.$emit("nextClick");
  }

  @Watch("fetchUrl", { immediate: true, deep: true })
  onFetchUrlChanged(newVal: string, oldVal: string) {
    this.onRequest();
  }

  @Watch("columns", { immediate: true, deep: true })
  onColumnsChanged(newVal: string, oldVal: string) {
    this.onRequest();
  }

  @Watch("queryParameters", { immediate: true, deep: true })
  onFetchUrlParametersChanged(
    newVal: IUrlParameterSchema,
    oldVal: IUrlParameterSchema
  ) {
    this.onRequest();
  }

  private onRequest() {
    var query_url_parameters = encodeQueryData(this.queryParameters);
    this.customDataSource.fetchUrl = query_url_parameters ? `${this.fetchUrl}?${query_url_parameters}` : this.fetchUrl;
    this.customDataSource.filter();
  }

  onReRequest(
    queryParameters: IUrlParameterSchema,
    isClearSearch: boolean = true
  ) {
    var query_url_parameters = encodeQueryData(this.queryParameters);
    this.customDataSource.fetchUrl = query_url_parameters ? `${this.fetchUrl}?${query_url_parameters}` : this.fetchUrl;
    
    if (isClearSearch) {
      this.customDataSource.filter({});
    } else {
      this.customDataSource.filter();
    }
  }
}
</script>
