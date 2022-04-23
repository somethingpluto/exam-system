<template>
  <div class='radar-chart' id='radar-chart'></div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import * as echarts from 'echarts';
import { option } from './radarchar.config';

export default defineComponent({
  setup() {
    onMounted(()=>{
      const myChart=echarts.init(document.getElementById("radar-chart"))
      myChart.setOption(option)
    })
    return {};
  },
});
</script>

<style scoped>
.radar-chart{
  height: 100%;
  width: 100%;
}
</style>
