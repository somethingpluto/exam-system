<template>
  <div class="comment-item">
    <n-card>
      <div class="title">
        <span class="user">用户:</span>
        <span class="user-name">{{ item.title }}</span>
      </div>
      <div class="content">
        <span class="content-detail">{{ item.content }}</span>
        <span class="content-date">{{ item.time }}</span>
      </div>
    </n-card>
    <template v-if="item.replays.length != 0">
      <template v-for="replay in item.replays" class="replay-position">
        <n-card class="replays">
          <div class="title user-name">
            {{ replay.replayId }} 回复：{{ item.title }}
          </div>
          <div class="content">
            <span class="content-detail">{{ replay.replay }}</span>
            <span class="content-date">{{ replay.replayTime }}</span>
          </div>
        </n-card>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.comment-item {
  margin-top: 10px;
  margin-bottom: 10px;
}
.n-card {
  width: 1000px;
  min-height: 80px;
  height: auto;
  height: 10px;
  margin: 0 auto;
  border-radius: 20px;
}
.content {
  display: flex;
  justify-content: space-between;
}
.reply {
  width: 80%;
}
.content-detail {
  font-weight: 600;
}
.content-date {
  color: #a3a2a2;
}
.replays {
  width: 50%;
  margin-top: 5px;
}
.user-name {
  color: #0a9a57;
  font-weight: 600;
}
</style>
