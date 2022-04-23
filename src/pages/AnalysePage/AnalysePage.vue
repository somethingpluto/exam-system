<template>
  <div class="analyse-page">
    <n-layout-header>
      <div class="title-box">
        <div class="logo">
          <n-icon size="24px"><PaperPlane></PaperPlane></n-icon>
        </div>
        <div class="title">计算机网络考试分析</div>
      </div>
    </n-layout-header>
    <n-layout-content>
      <Analyse></Analyse>
    </n-layout-content>
    <n-layout-footer>
      <Page-Bottom />
    </n-layout-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Analyse from '@/components/AnalysePage/src/Analyse.vue'
import PageBottom from '@/components/PageBottom/PageBottom.vue'
import { PaperPlane } from '@vicons/fa'
export default defineComponent({
  setup() {
    return {}
  },
  components:{PageBottom,Analyse,PaperPlane}
})
</script>

<style scoped lang="css">
.analyse-page {
  height: 100%;
}
.n-layout-header {
  height: 9%;
  box-sizing: border-box;

  display: flex;
}
.n-layout-content {
  height: 82%;
}

.n-layout-footer {
  height: 9%;
  background-color: #f0f0f0;
}
.n-card {
  margin-top: 120px;
  margin-right: 80px;
  width: 460px;
  min-height: 418px;
  border-radius: 25px;
  height: auto;
}

.title {
  display: flex;
  height: 100%;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.account-operation {
  min-height: 270px;
  height: auto;
}
.logo {
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
}
.title-box {
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 0px 6px 7px 0px rgba(50, 50, 50, 0.75);
}
</style>
