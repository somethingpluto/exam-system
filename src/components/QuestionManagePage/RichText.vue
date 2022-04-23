<template>
  <div style="border: 1px solid #ccc" class="rich-text">
    <Toolbar
      :editorId="editorId"
      :defaultConfig="toolbarConfig"
      :mode="mode"
      style="border-bottom: 1px solid #ccc"
    />
    <Editor
      :editorId="editorId"
      :defaultConfig="editorConfig"
      :defaultContent="getDefaultContent"
      :defaultHtml="defaultHtml"
      :mode="mode"
      style="height: 15px; overflow-y: hidden"
    />
    <!-- 注意: defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一 -->
  </div>
</template>

<script lang="ts">
import '@wangeditor/editor/dist/css/style.css'

import { Editor, getEditor, removeEditor,Toolbar } from '@wangeditor/editor-for-vue'
import cloneDeep from 'lodash.clonedeep'
import { computed, onBeforeUnmount, ref } from 'vue'
export default {
  components: { Editor, Toolbar },
  setup() {
    const editorId = `w-e-${Math.random().toString().slice(-5)}` //【注意】编辑器 id ，要全局唯一

    // defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一
    const defaultHtml = '一行文字'
    const defaultContent = [
        { type: 'paragraph', children: [{ text: '一行文字' }] }
    ]
    const getDefaultContent = computed(() => cloneDeep(defaultContent)) // 注意，要深拷贝 defaultContent ，否则报错

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = getEditor(editorId)
        if (editor == null) return

        editor.destroy()
        removeEditor(editorId)
    })

    return {
      editorId,
      mode: 'default',
      defaultHtml,
      getDefaultContent,
      toolbarConfig,
      editorConfig,
    };
  }
}
</script>

<style scoped lang="css">
.rich-text {
  height: 100%;
  width: 100%;
}
</style>
