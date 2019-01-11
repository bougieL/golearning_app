type func = (data: any) => void

class EventEmitter {
  public eventMap: Map<string, {
    once: boolean,
    action: func
  }>
  constructor() {
    this.eventMap = new Map()
  }
  public once(eventName: string, action: func): void {
    this.eventMap.set(eventName, {
      action,
      once: true
    })
  }
  public on(eventName: string, action: func): void {
    this.eventMap.set(eventName, {
      action,
      once: false
    })
  }
  public un(eventName: string): void {
    this.eventMap.delete(eventName)
  }
  public emit(eventName: string, data?): void {
    const event = this.eventMap.get(eventName)
    if (event) {
      const {action, once} = event
      action.apply(this)
      if (once) {
        this.un(eventName)
      }
    } else {
      console.error(`"${eventName}" is undefined`)
    }
  }
}

export const emitter = new EventEmitter()