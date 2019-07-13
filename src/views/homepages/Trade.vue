<template>
  <div v-if="data">
    <app-card>
      <div class="stat">
        <div v-for="(item, index) in data.tradeStat" :key="index" class="stat-item">
          <div class="stat-item-title">{{ item.title }}</div>
          <span class="stat-item-value">{{ item.value.toLocaleString() }}</span>
        </div>
      </div>
    </app-card>
    <app-card title="交易概览">
      <div class="overview">
        <div class="overview-chart">
          <v-chart
            class="overview-chart-chart"
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
                  data: [data.tradeOverview.month.value, data.tradeOverview.year.value]
                }
              ],
              color: ['#5093FF', '#36CBCB'],
            }" >
          </v-chart>
          <div class="overview-chart-value">
            <div class="overview-chart-value-title">交易额(万元)</div>
            <div class="overview-chart-value-value">{{ data.tradeOverview.month.value.toLocaleString() }}</div>
          </div>
        </div>
        <div class="overview-data">
          <div>
            <div class="overview-data-title"><span class="overview-data-light"></span>本月交易额</div>
            <div class="overview-data-value"><span style="font-size: 32px; font-wight: 500">{{ data.tradeOverview.month.value.toLocaleString() }}</span><span style="margin-left: 5px">万元</span></div>
            <div class="overview-data-prop">环比&nbsp;&nbsp;&nbsp;{{ data.tradeOverview.month.prop }}%</div>
          </div>
          <div>
            <div class="overview-data-title"><span class="overview-data-light"></span>年度交易额</div>
            <div class="overview-data-value"><span style="font-size: 32px; font-wight: 500">{{ data.tradeOverview.year.value.toLocaleString() }}</span><span style="margin-left: 5px">万元</span></div>
            <div class="overview-data-prop">环比&nbsp;&nbsp;&nbsp;{{ data.tradeOverview.year.prop }}%</div>
          </div>
        </div>
      </div>
    </app-card>
    <app-card title="交易趋势">
      <div class="trend">
        <div class="trend-data">
          <div v-for="(item, index) in data.tradeTrend.data" :key="index">
            <div style="font-size: 14px">{{ item.title }}</div>
            <div style="font-size: 20px; font-weight: 500; margin-top: 10px;">{{ item.value.toLocaleString() }}</div>
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
            data: data.tradeTrend.chartText
          },
          yAxis: {
            axisLine: { show: false },
            splitLine: { lineStyle: { type: 'dotted' } },
            type: 'value'
          },
          color: ['#5093FF', '#31C25B'],
          series: [{ data: data.tradeTrend.chartData[0], type: 'line', symbol: 'circle' }, { data: data.tradeTrend.chartData[1], type: 'line', symbol: 'circle' }]
        }" class="trend-chart"/>
      </div>
    </app-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Http, { URL_TRADE } from '../../service'

@Component
export default class Trade extends Vue {
  data: any = null

  created () {
    this.updateData()
  }

  updateData () {
    Http.get(URL_TRADE, {}).then((response) => {
      this.data = response.extra
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_global.scss';

.stat {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &-item {
    text-align: center;

    &-title {
      font-size: 14px;
      margin-bottom: 10px;
      color: $light-font-color;
    }

    &-value {
      font-size: 22px;
      font-weight: 500;
    }
  }
}

.overview {
  display: flex;

  &-chart {
    display: inline-block;
    position: relative;
    width: 360px;

    &-chart {
      height: 240px;
      width: 360px;
    }

    &-value {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      &-title {
        font-size: 14px;
        margin-bottom: 10px;
        color: $light-light-font-color;
      }

      &-value {
        font-size: 22px;
        font-weight: 500;
      }
    }
  }

  &-data {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &-light {
      background: #908ce1;
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 10px;
      border-radius: 5px;
    }

    &-title {
      font-size: 14px;
      color: $light-font-color;
    }

    &-value {
      margin: 10px 0;
    }

    &-prop {
      font-size: 12px;
      color: $light-light-font-color;
    }
  }
}

.trend {
  display: flex;
  justify-content: space-between;

  &-chart {
    flex: 3;
    width: 100%;
    height: 400px;
  }

  &-data {
    flex: 1;
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
