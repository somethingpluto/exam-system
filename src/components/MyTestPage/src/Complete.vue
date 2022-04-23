<template>
  <div class="complete">
    <n-card>
      <div class="icon">
        <Icon size="200px" color="#0a9a57">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
              fill="currentColor"
            ></path>
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
              fill="currentColor"
            ></path>
          </svg>
        </Icon>
      </div>
      <div class="info">交卷成功!</div>
    </n-card>
    <template v-if="load">
      <div class="load">
        <n-spin size="large">
          <n-alert title="" type="success">
            正在获取大家对这次考试得看法~
          </n-alert>
        </n-spin>
      </div>
    </template>
    <template v-for="comment in list.records" :key="comment.id">
      <CommentItem :item="comment"></CommentItem>
    </template>
    <div class="publish-comment">
      <n-button  type="info">发表评论</n-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from '@vicons/utils';
import { computed, defineComponent, onMounted, ref } from 'vue';

import getCommentsAction from '@/services/getComments';
import { errorMsg } from '@/utils/message';
import CommentItem from './comments/Comment-Item.vue';
import { answerStore } from '@/store';


export default defineComponent({
  setup() {
    let list = ref<any>([]);
    const loading = async () => {
      list.value = await getCommentsAction();
      if (list.value.length === 0) {
        errorMsg('获取评论列表失败');
      }
    };
    const answer = answerStore();
    answer.clear();
    onMounted(loading);
    computed(() => {
      list;
    });
    return {
      list,
    };
  },
  components: {
    Icon,
    CommentItem,
  },
});
</script>

<style scoped lang="css">
.complete {
  min-height: 700px;
  height: auto;
}

.n-card {
  width: 1000px;
  height: 500px;
  border-radius: 20px;
  margin: 40px auto 0;
}

.icon {
  text-align: center;
  margin-top: 70px;
}

.info {
  font-size: 28px;
  color: rgb(16, 16, 16);
  text-align: center;
  margin-top: 30px;
}

.load {
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.publish-comment {
  display: flex;
  justify-content: center;
}
</style>
