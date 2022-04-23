import { RouteLocationRaw } from 'vue-router';
export function isExternalLink(path: RouteLocationRaw) {
  return typeof path === 'string' && (path.startsWith("http://") || path.startsWith("https://"))
}