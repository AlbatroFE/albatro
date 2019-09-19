<template>
    <tz-grid-dynamic :transport_read_url="transport_read_url" :columns="columns">
    </tz-grid-dynamic>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import TzGridDynamic from "~/grid/src/grid.vue";

@Component({
    props: ["desc"],
    components: {
        TzGridDynamic
    }
})
export default class TzSuperGrid extends Vue {
    @Prop() desc!: any;
    
    get transport_read_url() {
        return this.desc.options.remote;
    }

    get columns() {
        return this.desc.options.schema;
    }
}
</script>
