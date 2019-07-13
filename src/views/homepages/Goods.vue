<template>
  <div v-if="data">
    <app-card title="ABC">
      <div class="inputs">
        <div v-for="(item, index) in inputs" :key="index" class="inputs-item">
          <div class="inputs-item-label">{{ item.label }}</div>
          <el-input :placeholder="item.placeholder" v-model="inputsData[index]"></el-input>
        </div>
      </div>
      <div class="form-button">
        <el-button type="primary" size="small" @click="onSearchClick">搜索</el-button>
        <el-button size="small" @click="onResetClick">重置</el-button>
      </div>
      <el-table :data="tableData">
        <el-table-column v-for="(item, index) in data.header" :key="index"
          :prop="item"
          :label="item">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="100" @current-change="onPageChange" @prev-click="onPageChange" @next-click="onPageChange">
        </el-pagination>
      </div>
    </app-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Http, { URL_GOODS, URL_COMMON_DATA } from '../../service'

@Component
export default class Goods extends Vue {
  data: any = null

  inputs = [
    { label: 'A', placeholder: '请输入内容' },
    { label: 'B', placeholder: '请输入内容' },
    { label: 'C', placeholder: '请输入内容' },
    { label: 'D', placeholder: '请输入内容' },
    { label: 'E', placeholder: '请输入内容' }
  ]
  inputsData = ['', '', '', '', '', '']

  tableData: Array<any> = []

  created () {
    this.updateData()
  }

  updateData () {
    Http.get(URL_COMMON_DATA, {}).then((response) => {
      this.data = response.extra.commonData
      this.tableData = []
      for (let i = 0; i < 10; i++) {
        this.tableData.push(this.data.data)
      }
    })
  }

  onSearchClick () {
    this.updateData()
  }

  onResetClick () {
    for (let index in this.inputsData) {
      this.$set(this.inputsData, index, '')
    }
  }

  onPageChange () {
    this.updateData()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_global.scss';

.inputs {
  display: flex;
  flex-wrap: wrap;

  &-item {
    display: flex;
    align-items: center;
    flex-basis: 33%;
    box-sizing: border-box;
    padding: 5px 20px;

    &-label {
      color: $light-font-color;
      margin-right: 20px;
    }
  }
}

.form-button {
  margin: 20px 0;
  text-align: center;
}

.pagination {
  text-align: center;
  margin: 20px 0;
}
</style>
