const option = {
  title: {
    text: '各个分段统计数据',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: '各分段占比图',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 13, name: '90~100' },
        { value: 39, name: '80~90' },
        { value: 28, name: '70~80' },
        { value: 8, name: '60~70' },
        { value: 2, name: '<60' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};


export { option };
