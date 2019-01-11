export function jsonToForm(data: object): FormData {
  const form = new FormData()
  for (const key in data) {
    if(key) {
      const val = data[key]
      if (Array.isArray(val)) {
        val.forEach(v => {
          form.append(key, v)
        })
      } else {
        form.append(key, val)
      }
    }
  }
  return form
}