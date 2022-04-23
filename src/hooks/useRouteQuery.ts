import { useRouteQuery as useQuery } from '@vueuse/router'
import { reactive, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { emptySer, Serializer, useSerializedRef } from './useSerializedRef';

export function useRouteQuery<U, T extends string | string[] = any>(key: string, defaultValue: U, serializer: Serializer<T, U> = emptySer) {
  return useSerializedRef(useQuery<T>(key, serializer.unserialize(defaultValue), {
    route: useRoute(),
    router: useRouter()
  }), serializer)
}

export function useMultiRouteQuery<U extends string>(defaults: Record<U, string | string[]>) {
  const refs: Record<string, Ref<any>> = {}
  for (const key in defaults) {
    refs[key] = useRouteQuery(key, defaults[key])
  }
  return reactive(refs) as Record<U, string | string[]>
}
