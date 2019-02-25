function prefixZero (num: number): string {
  num = Math.floor(num)
  return num > 9 ? `${num}` : `0${num}`
}

/**
 * dateFormat function
 * eg: dateFormat('20190101010101', 'yyyyMMddhhmmss')
 * @export
 * @param {(string | Date | number)} date
 * @param {string} formatter
 * @returns {string}
 */
export function dateFormat (date: string | Date | number , formatter: string): string {
  date = new Date(date)
  const year = prefixZero(date.getFullYear())
  const month = prefixZero(date.getMonth() + 1)
  const day = prefixZero(date.getDate())
  const hour = prefixZero(date.getHours())
  const min = prefixZero(date.getMinutes())
  const sec = prefixZero(date.getSeconds())
  return formatter
    .replace(/yyyy/ig, year)
    .replace(/MM/g, month)
    .replace(/dd/ig, day)
    .replace(/hh/ig, hour)
    .replace(/mm/g, min)
    .replace(/ss/ig, sec)
}
