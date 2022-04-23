<template>
  <div class='bar-chart' id='barchart'></div>
</template>

<script>
import * as echarts from 'echarts'
import { defineComponent, onMounted } from 'vue';
import {option} from './barchart.config'
export default defineComponent({
  setup(){
    onMounted(()=>{
      const myChart=echarts.init(document.getElementById("barchart"))
      myChart.setOption(option)
    })
    return{

    }
  }
})
</script>

<style scoped>
.bar-chart{
  height: 100%;
  width: 100%;
}
</style>
