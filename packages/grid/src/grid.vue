<template>
    <div class="al-grid">
        <kendo-datasource ref="remoteDataSource" :type="'json'" :transport-read="readData" :transport-read-data-type="'json'"
            :transport-read-type="'POST'" :schema-model-id="'id'" :schema-data="'Data'" :transport-parameter-map="parameterMap" transport-read-content-type="application/json"
            :schema-total="'Total'" :schema-model-fields="schemaModelFields" :page-size="10" :server-paging="true" :server-operation="true" :server-sorting="true" :server-filtering="true" :server-aggregates="true"
            :request-start="requestStart" @error="onError">
        </kendo-datasource>

        <slot name="toolbar" v-bind:dataSource="dataSource" class="k-toolbar k-grid-toolbar k-grid-top"/>

        <kendo-grid :height="445" :filterable="true" :sortable="true" :data-source-ref="'remoteDataSource'" :selectable="true" 
            :pageable="true" :pageable-always-visible="true" :pageable-refresh="true" :columnMenu="true" :resizable="true"
            :dataBinding="onDataBinding" :dataBound="onDataBound" :editable="false" :columns="dynamicColumns" >
        </kendo-grid>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import "@progress/kendo-ui"
import '@progress/kendo-theme-default/dist/all.css'

import '@progress/kendo-ui/js/cultures/kendo.culture.zh-CN.js'
import '@progress/kendo-ui/js/messages/kendo.messages.zh-CN.js'

import { GridInstaller } from "@progress/kendo-grid-vue-wrapper"
import { DataSourceInstaller } from "@progress/kendo-datasource-vue-wrapper"
import { encodeQueryData, IUrlParameterSchema } from "../../super-form/src/extension/TzCommonFunc";
import "../../super-form/src/extension/StringExtensions";
import kendoHelper from "../../super-form/src/extension/KendoExtensions";
import { GridModelSchema, GridModelSchemaType, GridColumnSchema } from "../../super-form/src/schema/GridSchema";

kendo.culture("zh-CN")
Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)

@Component({
    props: ["transport_read_url", "columns", "querys", "errorFn"]
})
export default class AlGrid extends Vue {
    @Prop() transport_read_url!: string;
    @Prop() columns!: GridColumnSchema[];
    @Prop() querys!: IUrlParameterSchema;
    @Prop() errorFn!:  Function;

    schemaModelField: GridModelSchema = {};
    dataSource: any = {};

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
        return this.columns;
    }    
    
    get readData() {
        return { url: this.transport_read_url, beforeSend: this.onBeforeSend, }
    }

    onDataBinding(e: any) {
        kendoHelper.onDataBinding(e);
    }

    onDataBound(e: any) {
        kendoHelper.onDataBound(e);
        this.dataSource = this.$refs.remoteDataSource;
    }

    parameterMap(data: any, type: any) {
        var json = JSON.stringify(data);
        return json;
    }

    onBeforeSend(xhr: any) {
        kendoHelper.onBeforeSend(xhr);
    }

    onRefresh(param?: any) {
        kendoHelper.onRefresh(this.$refs.remoteDataSource, param)
    }

    onError(err: any) {
        if(this.errorFn) {
            this.errorFn(err);
        }
    }

    requestStart(e: any) {
        var params = encodeQueryData(this.querys);
        e.sender.options.transport.read.url = this.transport_read_url + (params ? "?" + params : '')
    }
}

</script>
