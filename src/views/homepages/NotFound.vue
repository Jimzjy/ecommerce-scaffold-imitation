<template>
  <div id="not-found">
    <img src="../../assets/img/not-found.png" class="icon"/>
    <div>
      <div class="title">抱歉你访问的页面不存在</div>
      <div class="text">您要找的页面没有找到，请返回<router-link :to="{ name: 'dashboard' }">首页</router-link>继续浏览</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/assets/_global.scss';

#not-found {
  height: 500px;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;

  .icon {
    height: 260px;
    width: 260px;
    margin-right: 40px;
  }

  .title {
    font-size: 24px;
  }

  .text {
    margin: 20px 0;

    a {
      color: $primary-color;
    }
  }
}

</style>
