<template>
  <div id="login">
    <div class="background-wrapper"></div>
    <div class="content">
      <div class="description">
        <div class="title">电商管理系统</div>
        <p class="text">多数据可视化展示的电商管理系统</p>
        <p class="text">一起解构数字世界，碰撞科技创新思想</p>
      </div>
      <div class="login-card">
        <div class="title">登录</div>
        <el-form :model="loginForm" ref="loginForm" :rules="loginFormRules">
          <el-form-item prop="username">
            <el-input placeholder="用户名" prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" prefix-icon="el-icon-lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
        </el-form>
        <el-checkbox>记住账号</el-checkbox>
        <div>
          <el-button class="login-button" type="primary" @click="onLoginClick" :loading="loading">登录</el-button>
        </div>
        <div class="register">用户名: admin 密码: passwd</div>
      </div>
    </div>
    <footer class="footer">
      <a :href="repoAddress">帮助</a>
      <a :href="repoAddress">隐私</a>
      <a :href="repoAddress">条款</a>
      <div class="copyright">Jimzjy</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Http, { URL_LOGIN, TOKEN_NAME } from '@/service'
import { REPO_ADDRESS } from '@/consts'

@Component
export default class Login extends Vue {
  @Prop({ default: 'dashboard' }) readonly to!: string

  loginForm = {
    username: '',
    password: ''
  }
  loginFormRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }
  loading = false
  repoAddress = REPO_ADDRESS

  onLoginClick () {
    const form: any = this.$refs.loginForm
    form.validate((valid: any) => {
      if (valid) {
        this.loading = true
        Http.post(URL_LOGIN, {
          username: this.loginForm.username,
          password: this.loginForm.password
        }).then((data) => {
          this.loading = false
          if (data) {
            localStorage.setItem(TOKEN_NAME, data.extra)
            Http.setToken(data.extra)
            this.$router.replace({ name: this.to })
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_global.scss';

#login {
  background: url('../assets/img/login-background.jpg') 0 / cover;
  height: 100vh;
  width: 100vw;

  .background-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: hsla(0,0%,100%,.3);
  }
}

.content {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 600px;

  .login-card {
    width: 350px;
    padding: 40px;
    background: white;
    border-radius: 6px;

    .title {
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .login-button {
      margin: 20px 0;
      width: 100%;
    }

    .register {
      font-size: 14px;
      text-align: center;
      color: adjust-color($color: $primary-color, $lightness: 10%);
    }
  }

  .description {
    .title {
      font-size: 48px;
      font-weight: bold;
    }
  }
}

.footer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(0, -50%);
  margin-bottom: 20px;

  & > a {
    font-size: 14px;
    margin: 20px;
    color: adjust-color($color: $primary-color, $lightness: -10%);
  }

  .copyright {
    text-align: center;
    color: white;
    font-size: 14px;
    margin-top: 10px;
  }
}

</style>
