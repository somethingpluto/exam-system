export function obj2Arr<T, K extends string, V extends string>(obj: Record<string, T>, keyName: K, valueName: V) {
  return Object
    .entries(obj)
    .map(
      ([key, value]) => ({ [keyName]: key, [valueName]: value }))
}

/**
 * Parse json strings with json strings in value
 * @param str 
 * @returns 
 */
export function parseDeepJSON(src: any) {
  let res: any = {}
  // JSON.parse is not called when 
  if (!(src instanceof Object)) {
    try {
      res = JSON.parse(src)
    } catch (error) {
      return src
    }
  }
  else {
    res = src
  }

  for (const key in res) {
    res[key] = parseDeepJSON(res[key])
  }
  return res
}