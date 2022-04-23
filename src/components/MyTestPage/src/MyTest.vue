<template>
  <CommonHeader>
    <template #left>
      <H3>考试列表</H3>
    </template>
    <template #right>
      <n-button size='large' type='info' @click='enterTest'>加入考试</n-button>
    </template>
  </CommonHeader>
  <div class='my-test'>
    <template  v-if='load'>
      <div class='load'>
        <n-spin size="large" >
          <n-alert title="" type="success">
            您的考试正在赶来的路上
          </n-alert>
        </n-spin>
      </div>
    </template>
    <template v-else class='exam-list' v-for='examInfo in examList.data' :key='examInfo.examCode'>
      <Test-Item :examInfo='examInfo' />
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';

import CommonHeader from '@/components/CommonHeader.vue';
import TestItem from '@/components/MyTestPage/src/TestItem.vue';
import getTestListAction from '@/services/getTestList';
import { IExamList } from '@/services/getTestList/type';
import { errorMsg } from '@/utils/message';

export default defineComponent({


  setup() {
    let examList = ref<IExamList>({});
    const load=ref(false)
    // 定义请求函数
    const loading = async () => {
      load.value=true
      examList.value = await getTestListAction();
      if (Object.keys(examList.value).length === 0) {
        errorMsg('获取考试列表失败');
      }
      load.value=false
    };
    // 页面挂载时发送请求
    onMounted(loading);
    const enterTest = () => {
    };
    return {
      enterTest,
      examList,
      load
    };
  },
  components: {
    TestItem,
    CommonHeader,
  },
});
</script>

<style scoped lang='css'>
.my-test {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.exam-list {
  padding-top: 30px;
}
.load{
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
