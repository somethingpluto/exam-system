<template>
  <div class="home-page">
    <n-layout-header>
      <span class="title">考试系统</span>
    </n-layout-header>
    <n-layout-content>
      <n-card>
        <div class="account-operation">
          <RouterView></RouterView>
        </div>
      </n-card>
    </n-layout-content>
    <n-layout-footer>
      <Page-Bottom />
    </n-layout-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageBottom from '@/components/PageBottom/PageBottom.vue'


export default defineComponent({
  components: { PageBottom },
  setup() {
    return {

    }
  }
})
</script>

<style scoped lang="css">
.n-layout,
.home-page {
  height: 100%;
}
.n-layout-header {
  height: 9%;
  background-color: #101010;
  display: flex;
}
.n-layout-content {
  height: 82%;
  background-image: url("@/assets/img/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: right;
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
  flex-direction: column;
  justify-content: center;
  height: 100%;
  font-size: 28px;
  color: #ffffff;
  line-height: calc(310%);
  padding-left: 80px;
}

.account-operation {
  min-height: 270px;
  height: auto;
}
</style>
