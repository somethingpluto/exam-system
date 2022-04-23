<template>
  <div class="card" :class="[{ 'with-header': hasHeader }, 'shadow-' + shadow, { gray: gray }]">
    <div
      class="header"
      :class="{ 'collapse-mode': collapseMode }"
      @click="collapseOnTitle ? (collapsedModel = !collapsedModel) : null"
      v-if="hasHeader"
    >
      <div>
        <template v-if="!$slots['title-left']">
          <span class="title-text">{{ title || '' }}</span>
        </template>

        <slot v-else name="title-left"></slot>
      </div>
      <div>
        <slot name="title-right"></slot>
      </div>
    </div>
    <div
      :class="['content', { 'content-padding': contentPadding }]"
      v-if="!collapseMode || !collapsedModel"
    >
      <slot></slot>
    </div>
    <div class="footer" v-if="$slots['footer']">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useSlots } from 'vue'

import { useModel } from '@/hooks/useModel'

const props = withDefaults(
  defineProps<{
    /**
     * 卡片标题
     */
    title?: string
    /**
     * 内容边距
     */
    contentPadding?: boolean | string
    /**
     * 是否开启阴影
     */
    shadow?: 'none' | 'always' | 'hover'
    /**
     * 使用灰色背景
     */
    gray?: boolean
    /**
     * 折叠模式
     */
    collapseMode?: boolean
    isCollapsed?: boolean
    collapseOnTitle?: boolean
  }>(),
  {
    shadow: 'none',
    contentPadding: true,
    collapseOnTitle: true,
    gray: false,
  }
)

const emit = defineEmits<{
  (type: 'update:isCollapsed', payload: boolean): void
}>()

const slots = useSlots()
const collapsedModel = useModel(props, 'isCollapsed', emit)

const hasHeader = computed(
  () => props.title || slots['title-left'] || slots['title-right']
)

// const gap = computed(() => {
//   if (typeof props.contentPadding === 'string') {
//     return props.contentPadding
//   }
//   else {
//     return '18px'
//   }
// })
</script>
<style lang="scss" scoped>
.card {
  background: #ffffff;
  border-radius: 12px;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;

  &.gray {
    background: rgba(245, 247, 251, 1);
  }

  .header {
    font-size: 16px;

    line-height: 22px;
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title-text {
      font-weight: bold;
      color: #0a1c39;
    }

    &.collapse-mode {
      cursor: pointer;
    }
  }

  .content {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;

    &.content-padding {
      padding: 18px;
    }
  }

  &.with-header {
    & > .content-padding {
      padding-top: 0;
    }
  }

  &.shadow-always,
  &.shadow-hover:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .footer {
    border-top: 1px solid rgba(9, 30, 66, 0.1);
    padding: 10px 0;
    margin: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 10px;
    font-weight: 400;
    color: rgba(9, 30, 66, 0.5);
    line-height: 14px;
  }
}
</style>
