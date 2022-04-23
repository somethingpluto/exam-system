const option = {
  legend: {
    data: ['题型']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '单项选择题', max: 100 },
      { name: '多项选择题', max: 100 },
      { name: '填空题', max: 100 },
      { name: '概念题', max: 100 },
      { name: '解答题', max: 100 },
    ]
  },
  series: [
    {
      name: '正确率',
      type: 'radar',
      data: [
        {
          value: [81,73,82,90,63],
        }
      ]
    }
  ]
};


export {option}
