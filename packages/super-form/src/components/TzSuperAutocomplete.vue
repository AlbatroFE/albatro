<template>
    <el-autocomplete v-model="inputValue" :fetch-suggestions="querySearchAsync" @select="handleSelect" style="width: 100%" :placeholder="'请输入' + desc.title">
        <template slot-scope="{ item }">
            <div style="text-overflow: ellipsis;overflow: hidden;">{{ item.value }}</div>
            <span style="font-size: 12px;color: #b4b4b4;" v-if="item.ext">{{ item.ext }}</span>
        </template>
    </el-autocomplete>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { Button, Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { TzFetch } from "../extension/TzFetch";
import kendoHelper from "../extension/KendoExtensions";
Vue.use(Button)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperAutocomplete extends Vue {
    @Prop() desc!: any
    @Prop() value!: any

    inputValue: string = ''

    handleSelect(item: any) {
        this.SetTag(item);
    }

    createFilter(queryString: any) {
        return (data:any) => {
            return ((data.value && data.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0) || (data.ext && data.ext.toLowerCase().indexOf(queryString.toLowerCase()) === 0));
        };
    }

    querySearch(queryString:any, cb:any) {
        var options = this.desc.options && this.desc.options.length ? this.desc.options : [];
        var results = queryString ? options.filter(this.createFilter(queryString)) : options;
        cb(results);
    }

    querySearchAsync(queryString:any, cb:any) {

        if (this.desc.options) {
            if (Array.isArray(this.desc.options)) {
                //local
                this.querySearch(queryString, cb);
            }
            else {
                //remote                
                var map = this.desc.options.map
                var request = this.desc.options.schema_meta_key.indexOf("Enum") > -1 ? { key: this.desc.options.schema_meta_key } : kendoHelper.onRequest(this.desc.options.schema, queryString)
                TzFetch.Post(this.desc.options.remote, request, false).then((data: any) => {
                    if (data && data.Data && data.Data.length) {
                        var results = data.Data.map((x:any) => { return { value: x[map["value"]], ext: x[map["ext"]], key: x[map["key"]] } });
                        cb(results);
                    } else {
                        cb([]);
                    }
                }).catch((e:any) => {
                    cb([]);
                    Message.error("???????????")
                });
            }
        } else {
            cb([]);
        }
    }

    private SetTag(item: any) {
        this.$emit('change', item.value)
        this.$emit('select', item)
    }
}
</script>
