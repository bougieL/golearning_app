@decor
class Test {
  
}

function decor(target: any): void {
  Object.assign(target, {
    test: true
  })
}