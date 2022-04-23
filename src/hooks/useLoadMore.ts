import { computed, reactive, ref } from 'vue';

import { BaseMultipageResponse } from '@/http';
// import { BaseMultipageResponse } from '@/http';
import { unpackData } from '@/utils/request';

export function useLoadMore<T>(pageSize: number, fn: (page: number, pageSize: number) => Promise<BaseMultipageResponse<T>>, lazy?: boolean) {

  const page = ref(-1);
  const result = ref<T[]>([])
  const status = reactive({ loading: false, done: false })
  function loadNext() {
    if (status.done) return undefined
    page.value++
    status.loading = true
    return fn(page.value, pageSize).then(unpackData).then((res) => {
      result.value.push(...res.content as any)
      status.loading = false
      if (res.content.length < pageSize) status.done = true
    }).catch(err => {
      page.value--
      status.loading = false
      throw err
    })
  }

  function reload() {
    page.value = -1
    result.value = []
    loadNext()
  }

  if (!lazy) {
    loadNext()
  }

  return { page: computed(() => page.value), pageSize, result, loadNext, reload, status }
}
