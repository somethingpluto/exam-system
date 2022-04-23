<template>
  <div class='overview'>
    <h1>考试成绩数据概览</h1>
    <h2>一、平均分 <span>81.4分</span></h2>
    <h2>二、最高分 <span>96分</span></h2>
    <h2>三、及格率 <span>96%</span></h2>
    <h2>四、成绩达到80分以上的人数 <span>52人</span></h2>
    <h2>五、分数低于60分的人数 <span style='color: red'>4人</span></h2>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup(){
    return{

    }
  }
})

</script>

<style scoped>
.overview{
  height: 90%;
  width: 100%;
}
span{
  color: #2080f0;
}
</style>
