<template>
  <div class="operation">
    <n-button class="warning" type="info" @click="warningOnce">
      提醒{{ warningNum === 0 ? '' : warningNum + '' }}
    </n-button>
    <n-button class="error" type="error" @click="errorOnce">
      警告{{ errorNum === 0 ? '' : errorNum + '' }}
    </n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { successMsg } from '@/utils/message';

export default defineComponent({
  setup() {
    const warningNum = ref(0);
    const warningOnce = () => {
      warningNum.value++;
      successMsg("已提醒")

    };
    const errorNum = ref(0);

    const errorOnce = () => {
      errorNum.value++;
      successMsg("已警告")
    };
    return {
      warningNum,
      warningOnce,
      errorNum,
      errorOnce,
    };
  },
});
</script>

<style scoped>
.warning {
  width: 50px;
  text-align: center;
}
.error {
  width: 50px;
  text-align: center;
  margin-left: 6px;
}
</style>
