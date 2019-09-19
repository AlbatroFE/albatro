<template>
  <div>
            <al-row>
                <al-col :span="24"><div class="grid-content bg-purple-dark"></div></al-col>
            </al-row>
            <al-row>
                <al-col :span="12"><div class="grid-content bg-purple"></div></al-col>
                <al-col :span="12"><div class="grid-content bg-purple-light"></div></al-col>
            </al-row>
            <al-row>
                <al-col :span="8"><div class="grid-content bg-purple"></div></al-col>
                <al-col :span="8"><div class="grid-content bg-purple-light"></div></al-col>
                <al-col :span="8"><div class="grid-content bg-purple"></div></al-col>
            </al-row>
            <al-row>
                <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
                <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
                <al-col :span="6"><div class="grid-content bg-purple"></div></al-col>
                <al-col :span="6"><div class="grid-content bg-purple-light"></div></al-col>
            </al-row>
            <al-row>
                <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
                <al-col :span="4"><div class="grid-content bg-purple-light"></div></al-col>
                <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
                <al-col :span="4"><div class="grid-content bg-purple-light"></div></al-col>
                <al-col :span="4"><div class="grid-content bg-purple"></div></al-col>
                <al-col :span="4"><div class="grid-content bg-purple-light"></div></al-col>
            </al-row>
        </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Play extends Vue {
}

</script>

<style lang="scss">

.al-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.al-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.al-header,
.al-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.al-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.al-main {
  background-color: #fff;
  color: #333;
  text-align: center;
}

body > .al-container {
  margin-bottom: 40px;
  width: 100%
}

</style>