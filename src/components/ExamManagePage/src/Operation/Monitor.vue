<template>
  <div class="monitor">
    <div>
      <n-card>
        <div class="title">在线监考</div>
        <n-data-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
          :bordered="true"
        />
      </n-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {columns,data} from '@/components/ExamManagePage/src/Operation/monitor.config';

export default defineComponent({
  setup() {
    return {
      columns,
      data
    }
  }
})
</script>

<style scoped lang="css">
.n-card {
  width: 1239px;
  min-height: 584px;
  height: auto;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 20px;
  padding: 0;
  margin-bottom: 20px;
}
.title {
  font-size: 24px;
  color: rgb(16, 16, 16);
  margin-bottom: 20px;
}
.row {
  display: flex;
  justify-content: space-around;
}
.user,
.status,
.operation {
  border: 1px solid #e8e8e8;
  height: 78px;
  line-height: 78px;
}
.user {
  flex: 2;
  font-size: 24px;
  color: #101010;
  padding-left: 10px;
}
.status {
  flex: 2;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.operation {
  flex: 0.5;
  text-align: center;
}
.isEnter {
  flex: 1;
}
.change-screen {
  flex: 1;
}
.n-button {
  width: 90%;
}
</style>
