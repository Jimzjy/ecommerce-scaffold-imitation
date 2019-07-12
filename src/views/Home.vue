<template>
  <div>
    <header class="header">
      <router-link :to="{ name: 'dashboard' }">
        <img src="../assets/img/logo.png" class="logo" />
      </router-link>
      <div class="right">
        <a class="header-button" v-for="(item, index) in headerButtons" :key="index" :href="item.to">
          <i :class="[item.iconClass, 'icon']" />
          <span class="text">{{ item.text }}</span>
        </a>
        <el-dropdown>
          <div class="user">
            <div>
              <img class="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURcHBwb+/v7+/v76+vujo6OHh4cnJydTU1IOqnXYAAAADdFJOUxPppyMYpxkAAAD6SURBVEjH7dfbDYIwFAbguoHRCYwTKLcBOIUBaHQAIAxQwvwSEQpyaH/FFxP+5y89vacV4uQBOQix86DsxRmDV3HE4EV4YDa4QQRWSjYILKnNzQ0jekY7Yd3B1AVDeiV3wKCHsQPWPUwdkIbYYWSgtsLAwMwKfQNjFCZWWPwBhEcNz+NoZfLfrLXZPYkD+gtd/H6H97UT5+EK0FPY1ZbABaDYygysuTEvtqg9sI9AiyV/o8xgRNj0DLtHaiuszOahxgJLGueeL8Gpa8vnPHx30yEZGKo5lBwMiEnGwIKDKQMVB+UaSGzWwO2psMGPIfxgh78A8KcC/aY8ACmMo3JtJ3ljAAAAAElFTkSuQmCC"/>
            </div>
            <div class="name">
              <div>JIM</div>
              <div>ZJY</div>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting"><router-link :to="{ name: 'setting' }">设置</router-link></el-dropdown-item>
            <el-dropdown-item icon="el-icon-coordinate" @click.native="onLogoutClick">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <div class="main">
      <div class="aside">
        <el-menu :default-active="$route.name" router>
          <el-menu-item v-for="(item) in navMenu" :key="item.to" :index="item.to">
            <i :class="[item.iconClass]"></i>
            <span slot="title">{{ item.text }}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content" v-loading="loading">
        <div class="container"><router-view /></div>
        <div class="footer">
          <img class="logo" src="../assets/img/logo.png"/>
          <a :href="repoAddress" class="text">Source Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { LinkButton } from '@/models'
import Http, { URL_LOGOUT } from '../service'
import { mapState } from 'vuex'
import { REPO_ADDRESS } from '../consts'

@Component({
  computed: mapState(['loading'])
})
export default class Home extends Vue {
  headerButtons: Array<LinkButton> = [
    { iconClass: 'el-icon-service', text: '反馈', to: REPO_ADDRESS },
    { iconClass: 'el-icon-help', text: '帮助', to: REPO_ADDRESS }
  ]

  navMenu: Array<LinkButton> = [
    { iconClass: 'el-icon-pie-chart', text: '概况', to: 'dashboard' },
    { iconClass: 'el-icon-data-line', text: '数据', to: 'statcenter' },
    { iconClass: 'el-icon-sell', text: '交易', to: 'trade' },
    { iconClass: 'el-icon-shopping-bag-2', text: '商品', to: 'goods' },
    { iconClass: 'el-icon-notebook-1', text: '订单', to: 'orderlist' },
    { iconClass: 'el-icon-user', text: '客户', to: 'customer' },
    { iconClass: 'el-icon-setting', text: '设置', to: 'setting' }
  ]

  repoAddress = REPO_ADDRESS

  onLogoutClick () {
    Http.post(URL_LOGOUT, {}).then((data) => {
      if (data) {
        this.$router.push({ name: 'login' })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_global.scss";

$header-height: 62px;
$defalut-space: 20px;

.header {
  height: $header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 $defalut-space;

  .logo {
    margin-left: 10px;
    height: calc(#{$header-height} - 5px);
  }

  .right {
    display: flex;
    align-items: center;

    .header-button {
      margin-right: 46px;
      display: flex;
      align-items: center;

      .icon {
        font-size: 23px;
        margin-right: 5px;
      }
    }

    .user {
      display: flex;
      align-items: center;
      cursor: pointer;

      .avatar {
        height: 40px;
        width: 40px;
        margin-right: 10px;
      }

      .name {
        font-size: 13px;
        color: #999999;
        line-height: 14px;
      }
    }
  }
}

.main {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  min-height: 100vh;

  .aside {
    padding-top: $defalut-space;
    width: 120px;
  }

  .content {
    padding: $defalut-space;
    width: 100%;
    background: #F5F5F5;

    .footer {
      padding: $defalut-space 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        filter: grayscale(100%);
        opacity: .3;
        height: 50px;
      }

      .text {
        font-size: 14px;
        color: $light-font-color;
      }
    }
  }
}

</style>
