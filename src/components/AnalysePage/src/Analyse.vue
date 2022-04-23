<template>
  <div class="analyse">
    <div class="left">
      <div class="left-top">
        <BarChart></BarChart>
      </div>
      <div class="left-bottom">
        <StackLineChart></StackLineChart>
      </div>
    </div>
    <div class="center">
      <h1>计算机网络考试</h1>
      <div class='exam-info'>
        <div class='exam-number'>应到人数：<span>100人</span></div>
        <div class='enter-number'>实际人数：<span>99人</span></div>
      </div>
      <PieChart></PieChart>
    </div>
    <div class="right">
      <div class="right-top">
        <RadarChart></RadarChart>
      </div>
      <div class="right-bottom">
        <Oveview></Oveview>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  BarChart  from './barChart/BarChart.vue';
import StackLineChart from '@/components/AnalysePage/src/stackLineChart/StackLineChart.vue';
import PieChart from '@/components/AnalysePage/src/pieChart/PieChart.vue';
import RadarChart from '@/components/AnalysePage/src/radarChart/RadarChart.vue';
import Oveview from '@/components/AnalysePage/src/overview/Oveview.vue';

export default defineComponent({
  components: { Oveview, RadarChart, PieChart, StackLineChart, BarChart },
  setup() {
    return {}
  },

})
</script>

<style scoped lang="css">
.analyse {
  height: 100%;
  display: flex;
}
.left {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.center {
  flex: 1;
  text-align: center;
  margin-top: 40px;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}
.left-top {
  flex: 1;
}
.left-bottom {
  flex: 1;
}
.right-top {
  flex: 1;

}
.right-bottom {
  flex: 1;
}
.exam-info{
  display: flex;
  justify-content: space-between;
}
.exam-number{
  font-size: 20px;
}
.enter-number{
  font-size: 20px;
}
span{
  color: #2080f0;
}
</style>
