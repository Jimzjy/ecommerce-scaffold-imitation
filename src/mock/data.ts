const realtime = [
  {
    icon: 'el-icon-shopping-bag-1',
    data: [
      { title: '门店销售额(元)', value: 1024.50, last: 940.30 },
      { title: '门店支付订单数', value: 50, last: 40 }
    ]
  },
  {
    icon: 'el-icon-price-tag',
    data: [
      { title: '网店销售额(元)', value: 803.50, last: 670.00 },
      { title: '网店支付订单数', value: 30, last: 20 }
    ]
  },
  {
    icon: 'el-icon-chat-dot-round',
    data: [
      { title: '新增客户数', value: 10, last: 20 },
      { title: '支付客户数', value: 22, last: 14 }
    ]
  },
  {
    icon: 'el-icon-news',
    data: [
      { title: '新增会员数', value: 6, last: 7 },
      { title: '新增储值金额(元)', value: 860.00, last: 610.00 }
    ]
  }
]

const notifications = [
  {
    title: '订单相关',
    data: [
      { title: '待发货订单', value: 10 },
      { title: '待处理退款', value: 0 }
    ]
  },
  {
    title: '物流信息',
    data: [
      { title: '已完成', value: 20 },
      { title: '派送中', value: 0 },
      { title: '退货中', value: 0 }
    ]
  },
  {
    title: '商品相关',
    data: [
      { title: '门店在售', value: 10 },
      { title: '门店售罄', value: 0 },
      { title: '库存预警', value: 0 },
      { title: '网店在售', value: 0 },
      { title: '网店售罄', value: 0 }
    ]
  },
  {
    title: '通知消息',
    data: [
      { title: '未读客户消息', value: 12 },
      { title: '未读通知', value: 0 },
      { title: '系统通知', value: 0 }
    ]
  }
]

const functions = [
  '发布门店商品', '发布网店商品', '客服系统', '分销管理', '收入/提现', '帮助中心'
]

const saleData = {
  chartText: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01', '11/01', '12/01'],
  chartData: [
    [5600, 3600, 4000, 5000, 7000, 6400, 8000, 8900, 7300, 6500, 7100, 8200],
    [4000, 5600, 9700, 8600, 13000, 10500, 20000, 30000, 18000, 14000, 19000, 18000]
  ],
  dataText: ['昨日支付金额(元)', '本月已完成(元)', '本月目标(元)', '完成进度(%)'],
  data: [
    [4321, 5678, 4567, 90],
    [1234, 6789, 4345, 20],
    [3574, 5786, 2144, 30]
  ]
}

const statRecord = [
  { icon: 'el-icon-view', title: '访客数', value: 996 },
  { icon: 'el-icon-user', title: '浏览量', value: 200 },
  { icon: 'el-icon-data-line', title: '商品曝光次数', value: 10086 },
  { icon: 'el-icon-film', title: '商品浏览量', value: 654 },
  { icon: 'el-icon-school', title: '商品访客数', value: 789 },
  { icon: 'el-icon-present', title: '支付订单数', value: 4765 },
  { icon: 'el-icon-wallet', title: '支付人数', value: 3410 }
]

const statOverview = [
  { title: '新零售', value: 40 },
  { title: '实体店', value: 20 },
  { title: '淘宝店', value: 80 }
]

const statMember = {
  text: ['累计会员数', '新增会员数', '成交会员数', '会员注销数', '总会员数'],
  data: [300, 120, 190, 130, 520]
}

const statSale = {
  text: ['2019-07-01', '2019-07-02', '2019-07-03', '2019-07-04', '2019-07-05', '2019-07-06', '2019-07-07'],
  data: [0, 56, 27, 45, 60, 43, 60]
}

const statFlow = {
  chartText: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01', '11/01', '12/01'],
  chartData: [
    [5600, 3600, 4000, 5000, 7000, 6400, 8000, 8900, 7300, 6500, 7100, 8200],
    [4000, 5600, 9700, 8600, 13000, 10500, 20000, 30000, 18000, 14000, 19000, 18000]
  ],
  dataText: ['浏览次数', '独立访客', 'IP', '点击次数'],
  data: [
    [4321, 5678, 4567, 9876],
    [1234, 6789, 4345, 7466],
    [3574, 5786, 2144, 5767]
  ]
}

const statActivePage = [
  { url: '/abc', v0: '80,489', v1: 90 },
  { url: '/dfsaa', v0: '60,111', v1: 80 },
  { url: '/axcv', v0: '30,222', v1: 70 },
  { url: '/gfj', v0: '10,345', v1: 60 },
  { url: '/dssgd', v0: '7,489', v1: 50 },
  { url: '/w2ewr', v0: '6,765', v1: 40 },
  { url: '/sdfsf', v0: '5,876', v1: 30 },
  { url: '/gjfj', v0: '4,222', v1: 20 }
]

const statMostViewed = [
  { icon: 'el-icon-picture', type: '电子产品', value: '12,345' },
  { icon: 'el-icon-picture', type: '电子', value: '56,779' },
  { icon: 'el-icon-picture', type: '家居', value: '13,456' },
  { icon: 'el-icon-picture', type: '小家电', value: '1,234' },
  { icon: 'el-icon-picture', type: '智能小家电', value: '234' }
]

export {
  realtime,
  notifications,
  functions,
  saleData,
  statRecord,
  statOverview,
  statMember,
  statSale,
  statFlow,
  statActivePage,
  statMostViewed
}
