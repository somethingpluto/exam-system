<template>
  <div class='stack-line' id='stack-line'></div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import * as echarts from 'echarts';
import { option } from './stackLineChart.config';

export default defineComponent({
  setup(){
    onMounted(()=>{
      const myChart=echarts.init(document.getElementById("stack-line"))
      myChart.setOption(option)
    })
    return {

    }
  }
})
</script>

<style scoped>
.stack-line {
  height: 100%;
  width: 100%;
}
</style>
