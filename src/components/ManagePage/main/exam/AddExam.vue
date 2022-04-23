<template>
  <div class="add-exam">
    <n-button type="info">添加考试</n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default  defineComponent({

})
</script>

<style scoped>
.add-exam {
  width: 100px;
}

.n-button {
  width: 100px;
  height: 50px;
  border-radius: 10px;
}
.n-card {
  height: 400px;
  overflow-y: auto;
  border: 2px solid rgba(32, 128, 240, 0.6);
}
</style>
