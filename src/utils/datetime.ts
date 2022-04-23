import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration' // import plugin
import relativeTime from 'dayjs/plugin/relativeTime' // import plugin

dayjs.extend(duration)
dayjs.extend(relativeTime)

export function formatDate(date: dayjs.ConfigType) {
  return dayjs(date).format("YYYY-MM-DD")
}

export function formatDateTime(date: dayjs.ConfigType) {
  return dayjs(date).format("YYYY-MM-DD hh:mm:ss")
}

export function formatTime(date: dayjs.ConfigType) {
  return dayjs(date).format("hh:mm:ss")
}


export function toRelative(date: dayjs.ConfigType) {
  return dayjs(date).fromNow()
}

export function isBeforeWeek(date1: dayjs.ConfigType, date2: dayjs.ConfigType) {
  return dayjs(date1).startOf('week').isBefore(dayjs(date2).startOf('week'));
}

export function isAfterWeek(date1: dayjs.ConfigType, date2: dayjs.ConfigType) {
  return dayjs(date1).startOf('week').isAfter(dayjs(date2).startOf('week'));
}

export function startOfWeek(date: dayjs.ConfigType) {
  return dayjs(date).startOf('week')
}

export function endOfWeek(date: dayjs.ConfigType) {
  return dayjs(date).endOf('week')
}

export function formatWeekOfYear(date: dayjs.ConfigType) {
  return dayjs(date).format("第ww周(YYYY/MM/DD)")
}

export function getWeeks(start: dayjs.ConfigType, end: dayjs.ConfigType) {
  const diff = dayjs.duration(dayjs(end).diff(dayjs(start)))
  return Number.parseInt((diff.asWeeks() + 1).toString())
}

export function createDayjs(date: string) {
  return dayjs(date, "YYYY-MM-DD HH:mm:ss")
}
