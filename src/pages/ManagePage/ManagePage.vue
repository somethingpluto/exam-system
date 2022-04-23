<template>
  <div class="manage-page">
    <n-layout has-sider>
      <n-layout-sider>
        <Sider />
      </n-layout-sider>
      <n-layout>
        <n-layout-content>
          <n-dialog-provider>
            <Main />
          </n-dialog-provider>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Main from '@/components/ManagePage/Main.vue'
import Sider from '@/components/ManagePage/Sider.vue'

export default defineComponent({
  setup() {

    return {}
  },
  components:{
    Sider,
    Main
  }
})
</script>

<style scoped lang="css">
.manage-page,
.n-layout {
  height: 100%;
}
.main {
  height: 100%;
}
</style>
