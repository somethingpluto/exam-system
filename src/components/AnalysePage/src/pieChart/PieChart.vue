<template>
  <div class='pie-chart' id='pie-chart'></div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import * as echarts from 'echarts';
import { option } from './pieChart.config';

export default defineComponent({
  setup(){

    onMounted(()=>{
      const myChart=echarts.init(document.getElementById("pie-chart"))
      myChart.setOption(option)
    })
    return{

    }
  }
})

</script>

<style scoped>
.pie-chart{
  height: 80%;
  width: 100%;
}
</style>
