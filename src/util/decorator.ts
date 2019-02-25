function debounce (fn: (data: any) => void, wait: number, thisArg: object): (data: any) => void {
  let timer: any
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(thisArg, args)
    }, wait)
  }
}