<template>
  <div v-if="data">
    <app-card title="实时概况">
      <el-row>
        <el-col :span="12" class="realtime" v-for="(item, index) in data.realtime" :key="index">
          <div class="realtime-icon"><i :class="[item.icon]"></i></div>
          <div v-for="(itemData, dataIndex) in item.data" :key="dataIndex" class="realtime-data">
            <div class="realtime-data-title">{{ itemData.title }}</div>
            <div class="realtime-data-value">{{ itemData.value }}</div>
            <div class="realtime-data-last">昨日:&nbsp;&nbsp;{{ itemData.last }}</div>
          </div>
        </el-col>
      </el-row>
    </app-card>
    <app-card title="重要提醒">
      <el-row>
        <el-col :span="12" class="notifications" v-for="(item, index) in data.notifications" :key="index">
          <div class="notifications-title">{{ item.title }}</div>
          <div class="notifications-content">
            <div v-for="(itemData, dataIndex) in item.data" :key="dataIndex" class="notifications-content-data">
              <span class="notifications-content-data-title">{{ itemData.title }}:&nbsp;&nbsp;&nbsp;</span>
              <span class="notifications-content-data-value">{{ itemData.value }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </app-card>
    <app-card title="常用功能">
      <el-row>
        <el-col :span="8" class="functions" v-for="(item, index) in data.functions" :key="index">
          <i class="el-icon-s-management functions-icon"/>
          <a class="functions-value" href="javascript:void(0)">{{ item }}</a>
        </el-col>
      </el-row>
    </app-card>
    <app-card title="销售业绩">
      <div class="sale-data">
        <app-selector :props="saleArray" @changeData="changeSaleData"/>
        <div class="sale-data-data">
          <div class="sale-data-data-item" v-for="(item, index) in currentSaleData" :key="index">
            <div class="sale-data-data-item-title">{{ item.title }}</div>
            <div class="sale-data-data-item-value">{{ item.value }}</div>
          </div>
        </div>
        <v-chart :options="saleChart" class="sale-data-chart" autoresize/>
      </div>
    </app-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Http, { URL_DASHBOARD } from '../../service'

@Component
export default class Dashboard extends Vue {
  data: any = null
  saleArray = ['门店', '网店', '全店']
  currentSaleData = []
  saleChart = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0.8)',
      textStyle: { color: '#333333' }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01', '11/01', '12/01']
    },
    yAxis: {
      type: 'value'
    },
    color: ['#5093FF', '#31C25B'],
    series: [{ data: [], type: 'line', name: '门店' }, { data: [], type: 'line', name: '网店' }]
  }

  created () {
    this.updateData()
  }

  updateData () {
    Http.get(URL_DASHBOARD, {}).then((response) => {
      this.data = response.extra
      this.saleChart.series[0].data = this.data.saleData[0].chartData
      this.saleChart.series[1].data = this.data.saleData[1].chartData
      this.changeSaleData(0)
    })
  }

  changeSaleData (index: number) {
    this.currentSaleData = this.data.saleData[index].data
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_global.scss';

$min-width: 500px;

.realtime {
  display: flex;
  align-items: center;
  min-width: $min-width;
  padding: 20px;

  &-icon {
    font-size: 34px;
    width: 58px;
    height: 58px;
    color: $primary-color;
    background: adjust-color($primary-color, $lightness: 30%);
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
  }

  &-data {
    flex: 1;

    &-title {
      font-size: 12px;
      color: $light-font-color;
    }
    &-value {
      font-size: 24px;
      margin: 10px 0;
    }
    &-last {
      font-size: 12px;
      color: $light-light-font-color;
    }
  }
}

.notifications {
  padding: 20px;
  min-width: $min-width;

  &-title {
    font-size: 14px;
    margin-bottom: 10px;
  }

  &-content {
    font-size: 13px;
    display: flex;
    flex-flow: row wrap;

    &-data {
      margin-bottom: 10px;
      flex-basis: 33%;

      &-title {
        color: $light-light-font-color;
      }
      &-value {
        color: $primary-color;
      }
    }
  }
}

.functions {
  padding: 20px;
  display: flex;
  align-items: center;

  &-icon {
    font-size: 32px;
    color: $primary-color;
    margin-right: 10px;
  }

  &-value {
    font-size: 14px;
  }
}

.sale-data {
  padding: 0 20px;

  &-data {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    &-item {
      &-title {
        font-size: 14px;
        margin-bottom: 10px;
      }
      &-value {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }

  &-chart {
    min-width: $min-width;
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
  }
}
</style>
