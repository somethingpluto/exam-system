<template>
  <div class="test-page">
    <n-layout-header>
      <Test-Header />
    </n-layout-header>
    <n-layout-content>
      <Question-List />
    </n-layout-content>
    <n-layout-footer>
      <Page-Bottom />
    </n-layout-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageBottom from '@/components/PageBottom/PageBottom.vue'
import QuestionList from '@/components/TestPage/src/QuestionList.vue'
import TestHeader from '@/components/TestPage/src/TestHeader.vue'

export default defineComponent({
  components: { PageBottom , TestHeader, QuestionList},
  setup() {
    return {}
  }
})
</script>

<style scoped lang="css">
.test-page {
  height: 100%;
}
.n-layout-header {
  height: 9%;
}

.n-layout-content {
  min-height: 82%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(235, 235, 235);
}

.n-layout-footer {
  height: 9%;
}
</style>
