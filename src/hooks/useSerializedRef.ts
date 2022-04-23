import { isNumber } from '@vueuse/core';
import { isNil } from 'lodash';
import { computed, Ref } from 'vue';

export interface Serializer<T, U> {
  serialize: (src: T) => U
  unserialize: (dest: U) => T
}

/**
 * 对原始数据进行双向转换，产生一个新的 origin value
 * @param origin
 * @param serializer
 * @param unserializer
 * @returns
 */
export function useSerializedRef<T, U>(origin: Ref<T>, serializer: Serializer<T, U>) {
  return computed<U>({
    get() {
      return serializer.serialize(origin.value)
    },
    set(value) {
      origin.value = serializer.unserialize(value)
    }
  })
}

export const stringToIntSer: Serializer<string, number> = {
  serialize: (value) => {
    const val = Number.parseInt(value)
    if (isNaN(val)) return undefined as any;
    else return val
  },
  unserialize: (value) => isNumber(value) ? value.toString() : ""
}

export const emptySer: Serializer<any, any> = {
  serialize: (value) => value,
  unserialize: (value) => value
}

export const ObjToStrSer: Serializer<any, string> = {
  serialize: (val) => {
    try {
      return JSON.stringify(val)
    } catch {
      return ""
    }

  },
  unserialize: (val) => {
    try {
      return JSON.parse(val)
    } catch (error) {
      return undefined
    }
  }
}
