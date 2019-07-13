import Vue from 'vue'
import ElementUI from 'element-ui'
import ECharts from 'vue-echarts'
import App from './App.vue'
import router from './router'
import store from './store'
import { Card, Selector } from '@/components'
import './mock'
import './element-variables.scss'

import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/visualMap'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('v-chart', ECharts)
Vue.component('app-card', Card)
Vue.component('app-selector', Selector)

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
