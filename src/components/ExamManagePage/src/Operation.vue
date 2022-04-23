<template>
  <div class="detail-operation">
    <div class="header">
      <Operation-Header />
    </div>
    <div class="operation">
      <Router-View />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import OperationHeader from '@/components/ExamManagePage/src/Operation/Operation-Header.vue'
export default defineComponent({
  setup() {
    return {}
  },
  components:{
    OperationHeader,
  }
})
</script>

<style scoped lang="css">
.detail-operation {
  width: 100%;
}
.operation {
  margin: 0 auto;
}
</style>
