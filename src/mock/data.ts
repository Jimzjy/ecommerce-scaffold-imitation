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

const saleData = [
  {
    data: [
      { title: '昨日支付金额(元)', value: 677.00 },
      { title: '本月已完成(元)', value: 3621.00 },
      { title: '本月目标(元)', value: 10000.00 },
      { title: '完成进度(%)', value: 30 }
    ],
    chartData: [4000, 5600, 9700, 8600, 13000, 10500, 20000, 22000, 18000, 14000, 19000, 18000]
  },
  {
    data: [
      { title: '昨日支付金额(元)', value: 543.00 },
      { title: '本月已完成(元)', value: 3210.00 },
      { title: '本月目标(元)', value: 7643.00 },
      { title: '完成进度(%)', value: 50 }
    ],
    chartData: [5600, 3600, 4000, 5000, 7000, 6400, 8000, 8900, 7300, 6500, 7100, 8200]
  },
  {
    data: [
      { title: '昨日支付金额(元)', value: 1300.00 },
      { title: '本月已完成(元)', value: 6321.00 },
      { title: '本月目标(元)', value: 20000.00 },
      { title: '完成进度(%)', value: 30 }
    ],
    chartData: [4000, 5600, 9700, 8600, 13000, 10500, 20000, 30000, 18000, 14000, 19000, 18000]
  }
]

export {
  realtime,
  notifications,
  functions,
  saleData
}
