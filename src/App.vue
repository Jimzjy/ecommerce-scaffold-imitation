<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/_global.scss";

body {
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: $font-color;

  a {
    color: #606266;
    text-decoration: none;

    &:hover {
      color: $primary-color;
      cursor: pointer;
    }
  }
}

</style>
