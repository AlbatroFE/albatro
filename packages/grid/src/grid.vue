<template>
  <div class="al-grid">
    <kendo-datasource
      v-if="jsonp"
      ref="remoteDataSource"
      :type="'jsonp'"
      :transport-read="readData"
      :transport-read-data-type="'jsonp'"
      :transport-read-type="'POST'"
      :schema-model-id="idKey"
      :transport-parameter-map="parameterMap"
      transport-read-content-type="application/json"
      :schema-model-fields="schemaModelFields"
      :page-size="pageSize"
      :server-paging="false"
      :server-operation="true"
      :server-sorting="false"
      :server-filtering="false"
      :server-aggregates="true"
      :request-start="requestStart"
      @error="onError"
    ></kendo-datasource>

    <kendo-datasource
      v-else
      ref="remoteDataSource"
      :type="'json'"
      :transport-read="readData"
      :transport-read-data-type="'json'"
      :transport-read-type="'POST'"
      :schema-model-id="idKey"
      :schema-data="'Data'"
      :transport-parameter-map="parameterMap"
      transport-read-content-type="application/json"
      :schema-total="'Total'"
      :schema-model-fields="schemaModelFields"
      :page-size="pageSize"
      :server-paging="true"
      :server-operation="true"
      :server-sorting="true"
      :server-filtering="true"
      :server-aggregates="true"
      :request-start="requestStart"
      @error="onError"
    ></kendo-datasource>

    <slot
      name="toolbar"
      v-bind:dataSource="dataSource"
      class="k-toolbar k-grid-toolbar k-grid-top"
    />

    <kendo-grid
      :height="height"
      :filterable="true"
      :sortable="true"
      :data-source-ref="'remoteDataSource'"
      :selectable="true"
      :pageable="true"
      :pageable-always-visible="true"
      :pageable-refresh="true"
      :columnMenu="true"
      :resizable="true"
      :dataBinding="onDataBinding"
      :dataBound="onDataBound"
      :editable="false"
      :columns="dynamicColumns"
    ></kendo-grid>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";

import { GridInstaller } from "@progress/kendo-grid-vue-wrapper";
import { DataSourceInstaller } from "@progress/kendo-datasource-vue-wrapper";

import "@progress/kendo-ui/js/cultures/kendo.culture.zh-CN.js";
import "@progress/kendo-ui/js/messages/kendo.messages.zh-CN.js";
kendo.culture("zh-CN");

import {
  encodeQueryData,
  IUrlParameterSchema
} from "packages/utils/extension/TzCommon";
import {
  GridModelSchema,
  GridModelSchemaType,
  GridColumnSchema,
  FieldTypeEnum
} from "packages/utils/schema/GridSchema";
import KendoExtension from "packages/utils/extension/KendoExtensions";
import "packages/utils/extension/StringExtensions";

Vue.use(GridInstaller);
Vue.use(DataSourceInstaller);

@Component({
  name: "AlGrid"
})
export default class AlGrid extends Vue {
  @Prop({ default: "", type: String }) private fetchUrl!: string;
  @Prop() private columns!: GridColumnSchema[];
  @Prop({ default: 10, type: Number }) private pageSize!: number;
  @Prop() private queryParameters!: IUrlParameterSchema;
  @Prop(Function) private errorFn!: Function;
  @Prop(Boolean) private jsonp!: boolean;
  @Prop({ default: "id", type: String }) private idKey!: string;
  @Prop({ default: '450', type: String }) private height!: string;

  schemaModelField: GridModelSchema = {};
  dataSource: any = {};

  kendoHelper: KendoExtension = new KendoExtension((kendo as any).jQuery);

  get schemaModelFields() {
    this.schemaModelField = {};
    this.columns
      .filter(x => !String.isNullOrEmpty(x.field))
      .forEach((e, i) => {
        let value: GridModelSchemaType = {
          filterable: e.filterable,
          sortable: e.sortable,
          editable: e.editable,
          nullable: true,
          type: e.type
        };

        this.schemaModelField[e.field as string] = value;
      });

    return this.schemaModelField;
  }

  get dynamicColumns() {
    this.columns
      .filter(x => x.type === FieldTypeEnum.Command)
      .forEach((cl, i) => {
        if (cl.command && cl.command.length) {
          cl.command.forEach(c => {
            var click = c.click;
            c.click = e => {
              var data = this.kendoHelper.getRowData(e);
              click(data);
            };
          });
        } else if (cl.command) {
          var click = (cl.command as any).click;
          if(click) {
            (cl.command as any).click = (e: any) => {
              var data = this.kendoHelper.getRowData(e);
              click(data);
            };
          }
        }
      });

    return this.columns;
  }

  get readData() {
    return { url: this.fetchUrl, beforeSend: this.onBeforeSend };
  }

  private onDataBinding(e: any) {
    this.kendoHelper.onDataBinding(e);
  }

  private onDataBound(e: any) {
    this.kendoHelper.onDataBound(e);
    this.dataSource = this.$refs.remoteDataSource;
  }

  private parameterMap(data: any, type: any) {
    var json = JSON.stringify(data);
    return json;
  }

  private onBeforeSend(xhr: any) {
    this.kendoHelper.onBeforeSend(xhr).then(() => {
      this.$emit("on-request-before-send", xhr);
    });
  }

  private onError(err: any) {
    if (this.errorFn) {
      this.errorFn(err);
    }
  }

  private requestStart(e: any) {
    var params = encodeQueryData(this.queryParameters);
    e.sender.options.transport.read.url =
      this.fetchUrl + (params ? "?" + params : "");
  }

  onRefresh(param?: any) {
    var dataSource: any = this.$refs.remoteDataSource;
    if (dataSource && dataSource.kendoDataSource) {
      dataSource.kendoDataSource.read(param);
    }
  }
}
</script>
