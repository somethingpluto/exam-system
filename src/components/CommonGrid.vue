<template>
  <component :is="el" class="cgf-grid" :class="['with-padding-' + padding]">
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * 单元格间隔
     */
    gap?: string
    /**
     * 是否添加内边距
     */
    padding?: 'none' | 'tb' | 'lr' | 'all'
    /**
     * 列数，默认是1
     */
    col?: number
    /**
     * 每一列的宽度，默认是等宽
     */
    colWidth?: string[]
    el?: keyof HTMLElementTagNameMap
  }>(),
  {
    gap: '24px',
    padding: 'none',
    col: 1,
    el: 'div',
    colWidth: () => [],
  }
)

const gridColumns = computed(() => {
  if (props.colWidth && props.colWidth.length >= 1) {
    return props.colWidth.join(' ')
  } else if (props.col >= 1) {
    return new Array(props.col).fill('1fr').join(' ')
  } else {
    return 'auto'
  }
})
</script>
<style lang="scss" scoped>
.cgf-grid {
  display: grid;
  gap: v-bind(gap);
  grid-template-columns: v-bind(gridColumns);
  width: 100%;
  box-sizing: border-box;
  align-items: start;

  &.with-padding-all {
    padding: v-bind(gap);
  }
  &.with-padding-tb {
    padding: v-bind(gap) 0;
  }
  &.with-padding-lr {
    padding: 0 v-bind(gap);
  }
}
</style>
