const option = {
  title:{
    test:'各班平均分'
  },
  xAxis: {
    type: 'category',
    data: ['软工1班', '软工2班', '计科', '物联网', '大数据']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [93, 80, 88, 89, 92],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.4)'
      }
    }
  ]
};
export {option}
