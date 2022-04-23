const option = {
  title: {
    text: '历史平均分'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['软工1班', '软工2班', '计科', '物联网', '大数据']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['一', '二', '三', '四', '五', '六', '七']
  },
  yAxis: {
    type: 'value',
    min:60,
    max:100
  },
  series: [
    {
      name: '软工1班',
      type: 'line',

      data: [79, 87, 93, 91, 90, 84, 83]
    },
    {
      name: '软工2班',
      type: 'line',

      data: [75, 82, 91, 83, 84, 88, 81]
    },
    {
      name: '计科',
      type: 'line',

      data: [69, 87, 86, 89, 91, 83, 89]
    },
    {
      name: '物联网',
      type: 'line',

      data: [68, 82, 84, 88, 89, 86, 88]
    },
    {
      name: '大数据',
      type: 'line',

      data: [81, 82, 88, 86, 87, 90, 89]
    }
  ]
};



export {option}
