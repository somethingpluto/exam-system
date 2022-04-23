<template>
  <n-dialog-provider>
    <div class='manage-main'>
      <Header />
      <div class='content'>
        <KeepAlive>
          <RouterView></RouterView>
        </KeepAlive>
      </div>
    </div>
  </n-dialog-provider>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import Header from '@/components/ManagePage/Header.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    Header,
  },
});
</script>

<style scoped lang='css'>
.manage-main {
  height: 100%;
  width: 100%;
}

.manage-main {
  background-color: #f1f3f4;
}
</style>
