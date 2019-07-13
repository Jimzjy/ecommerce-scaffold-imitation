<template>
  <div>
    <app-card title="基本设置">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="英文名">
          <el-input v-model="form.ename"></el-input>
        </el-form-item>
        <el-form-item label="中文名">
          <el-input v-model="form.cname"></el-input>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="博客地址" prop="blog">
          <el-input v-model="form.blog"></el-input>
        </el-form-item>
        <el-form-item label="个人邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" @click="onSubmitClick" style="margin: 20px 10px;">提交</el-button>
    </app-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Http, { URL_SETTING } from '../../service'

@Component
export default class Setting extends Vue {
  form = {
    ename: '',
    cname: '',
    description: '',
    blog: '',
    email: ''
  }

  rules = {
    blog: [
      { required: true, message: '请填写博客地址', trigger: 'blur' }
    ],
    email: [
      { required: true, message: '请填写邮箱地址', trigger: 'blur' }
    ]
  }

  onSubmitClick () {
    const form: any = this.$refs.form
    form.validate((valid: any) => {
      if (valid) {
        Http.post(URL_SETTING, {}).then((response) => {})
      }
    })
  }
}
</script>

<style lang="scss" scoped>

.el-input {
  width: 50%;
}

</style>
