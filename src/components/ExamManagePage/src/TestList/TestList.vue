<template>
  <div class='control-test'>
    <CommonHeader>
      <template #left>
        <H3>考试列表</H3>
      </template>
      <template #right>
        <n-button size='large' type='info' @click='createList'>创建考试</n-button>
      </template>
    </CommonHeader>
    <div class='test-list'>
      <template v-if='load'>
        <div class='load'>
          <n-spin size='large'>
            <n-alert type='success'>
              您的考试正在赶来的路上
            </n-alert>
          </n-spin>
        </div>
      </template>

        <template v-else v-for="exam in examList" :key="exam.examCode">
          <Test-Item :examInfo="exam" />
        </template>
      <List />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';
import { router } from '@/router';
import getTestListAction from '@/services/getTestList';
import List from './List.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import TestItem from '@/components/MyTestPage/src/TestItem.vue';

export default defineComponent({
  setup() {
    const load = ref(true);
    onMounted(async ()=>{
      await getTestListAction()
      load.value=false
    })

    const createList = () => {
      router.push('/exammanage/createlist');
    };
    return {
      createList,
      load
    };
  },
  components: {
    CommonHeader,
    List,
  },
});
</script>

<style scoped lang='css'>
.test-list {
  width: 1200px;
  margin: 0 auto;
}

.load {
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
