<template>
  <div v-if="data">
    <app-card>
      <el-row class="record-card">
        <el-col :span="6" class="record" v-for="(item, index) in data.statRecord" :key="index">
          <div class="record-icon"><i :class="[item.icon]"></i></div>
          <div class="record-data">
            <div class="record-data-title">{{ item.title }}</div>
            <div class="record-data-value">{{ item.value }}</div>
          </div>
        </el-col>
      </el-row>
    </app-card>
    <app-card title="概览数据">
      <div class="overview">
        <div class="overview-item" v-for="(item, index) in data.statOverview" :key="index">
          <v-chart
            class="overview-item-chart"
            :options="{
              tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255,255,255,0.8)',
                textStyle: { color: '#333333' }
              },
              series: [
                {
                  type: 'pie',
                  radius: ['50%', '70%'],
                  label: { normal: { show: false } },
                  labelLine: { normal: { show: false } },
                  data: [item.value, 100 - item.value]
                }
              ],
              color: ['#5093FF', '#F5F5F5'],
            }" >
          </v-chart>
          <div class="overview-item-title">{{ item.title }}</div>
          <div>销售占比</div>
        </div>
      </div>
    </app-card>
    <el-row>
      <el-col :span="12">
        <app-card title="店铺会员" style="margin-right: 10px">
          <div class="member">
            <v-chart autoresize
              class="member-chart"
              :options="{
                color: ['#5093FF'],
                tooltip : {
                  trigger: 'axis',
                },
                grid: {
                  left: '0%',
                  right: '0%',
                  bottom: '0%',
                  containLabel: true
                },
                xAxis: [
                  {
                    type: 'category',
                    data: data.statMember.text,
                    axisLine: { show: false },
                    axisTick: {
                        alignWithLabel: true
                    }
                  }
                ],
                yAxis: [
                  {
                    type : 'value',
                    axisLine: { show: false },
                    splitLine: { lineStyle: { type: 'dotted' } },
                  }
                ],
                series: [
                  {
                    type:'bar',
                    barWidth: '40%',
                    data: data.statMember.data
                  }
                ]
            }"></v-chart>
          </div>
        </app-card>
      </el-col>
      <el-col :span="12">
        <app-card title="本周销售" style="margin-left: 10px">
          <div class="sale">
            <v-chart :options="{
              visualMap: {
                show: false,
                min: 0,
                max: 100,
                inRange: {
                  color: ['#5093FF', '#A5F2FF'],
                  symbolSize: [0, 10]
                }
              },
              tooltip: {
                trigger: 'axis'
              },
              xAxis: [{
                data: data.statSale.text,
                axisLine: { show: false },
              }],
              yAxis: [{
                type : 'value',
                axisLine: { show: false },
                splitLine: { lineStyle: { type: 'dotted' } },
              }],
              grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: true
              },
              series: [{
                type: 'line',
                symbol: 'circle',
                symbolSize: 4,
                data: data.statSale.data,
                smooth: true
              }],
          }" class="sale-chart" autoresize></v-chart>
          </div>
        </app-card>
      </el-col>
    </el-row>
    <app-card title="流量统计">
      <div class="flow">
        <app-selector :props="flowArray" @changeData="changeFlowData"/>
        <div class="flow-data">
          <div class="flow-data-item" v-for="(item, index) in currentFlowData" :key="index">
            <div class="flow-data-item-title">{{ data.statFlow.dataText[index] }}</div>
            <div class="flow-data-item-value">{{ item }}</div>
          </div>
        </div>
        <v-chart :options="{
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
            axisLine: { show: false },
            data: data.statFlow.chartText
          },
          yAxis: {
            axisLine: { show: false },
            splitLine: { lineStyle: { type: 'dotted' } },
            type: 'value'
          },
          color: ['#5093FF', '#31C25B'],
          series: [{ data: data.statFlow.chartData[0], type: 'line', name: flowArray[0] }, { data: data.statFlow.chartData[1], type: 'line', name: flowArray[1] }]
        }" class="flow-chart" autoresize/>
      </div>
    </app-card>
    <el-row>
      <el-col :span="12">
        <app-card title="活跃页面" style="margin-right: 10px" >
          <el-table :show-header="false" :data="data.statActivePage" class="active-page">
            <el-table-column prop="url"></el-table-column>
            <el-table-column prop="v0"></el-table-column>
            <el-table-column prop="v1">
              <template v-slot="props">
                <el-progress :percentage="props.row.v1" :stroke-width="10"></el-progress>
              </template>
            </el-table-column>
          </el-table>
        </app-card>
      </el-col>
      <el-col :span="12">
        <app-card title="浏览最多" style="margin-left: 10px">
          <el-table :show-header="false" :data="data.statMostViewed" class="most-view">
            <el-table-column prop="icon">
              <template v-slot="props">
                <i :class="[props.row.icon, 'most-view-icon']"/>
              </template>
            </el-table-column>
            <el-table-column prop="type"></el-table-column>
            <el-table-column prop="value"></el-table-column>
            <el-table-column prop="chart">
              <v-chart :options="{
                xAxis: {
                    show: false,
                    type: 'category',
                },
                yAxis: {
                    show: false,
                },
                series: [{
                    data: [230, 332, 801, 634, 990, 630, 820],
                    type: 'line',
                    symbol: 'none'
                }],
                color: '#5093FF'
              }" class="most-view-chart"></v-chart>
            </el-table-column>
          </el-table>
        </app-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Http, { URL_STAT_CENTER } from '../../service'

@Component
export default class StatCenter extends Vue {
  data: any = null
  flowArray = ['近三个月', '近半年', '近一年']
  currentFlowData = []

  created () {
    this.updateData()
  }

  updateData () {
    Http.get(URL_STAT_CENTER, {}).then((response) => {
      this.data = response.extra
      this.changeFlowData(0)
    })
  }

  changeFlowData (index: number) {
    this.currentFlowData = this.data.statFlow.data[index]
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_global.scss';

.record {
  display: flex;
  align-items: center;
  padding: 20px;

  &-card {
    min-width: 900px;
  }

  &-icon {
    font-size: 28px;
    width: 48px;
    height: 48px;
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
      font-size: 14px;
      color: $light-font-color;
    }
    &-value {
      font-size: 14px;
      margin-top: 10px;
    }
  }
}

.overview {
  display: flex;
  text-align: center;

  &-item {
    flex: 1;

    &-chart {
      height: 200px;
      width: 200px;
      display: inline-block;
    }

    &-title {
      font-size: 14px;
      color: $light-light-font-color;
      margin-bottom: 10px;
    }
  }
}

.member {
  text-align: center;

  &-chart {
    display: inline-block;
    width: 100%;
    height: 400px;
  }
}

.sale {
  text-align: center;

  &-chart {
    display: inline-block;
    width: 100%;
    height: 400px;
  }
}

.flow {
  padding: 0 20px;

  &-data {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    &-item {
      text-align: center;

      &-title {
        font-size: 14px;
        margin-bottom: 10px;
      }
      &-value {
        font-size: 28px;
        font-weight: 500;
      }
    }
  }

  &-chart {
    min-width: 500px;
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
  }
}

$card-height: 400px;

.active-page {
  height: $card-height;
}

.most-view {
  height: $card-height;

  &-icon {
    font-size: 48px;
    color: $primary-color;
  }

  &-chart {
    width: 48px;
    height: 58px;
  }
}
</style>
