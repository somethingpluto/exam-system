<template>
  <div class="manage-layout">
    <div class="sider">
      <Sider></Sider>
    </div>
    <div class="main">
      <Main></Main>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sider from '@/components/ManagePage/Sider.vue'
import Main from '@/components/ManagePage/Main.vue'

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

<style scoped>
.manage-layout {
  width: 100%;
  height: 100%;
  display: flex;
}
.sider {
  width: 200px;
}
.main {
  flex: 3;
}
</style>
