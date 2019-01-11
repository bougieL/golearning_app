interface IThis {
  setState: any,
  state: object
}

export class Binder {
  private that: IThis
  constructor(that: IThis) {
    this.that = that
  }
  public text(key: string, cb?: () => void) {
    const {that} = this
    return {
      onChange: (v: any) => {
        that.setState({
          [key]: v
        }, cb)
      },
      value: that.state[key]
    }
  }
  public modal(key: string, cb? :() => void) {
    const {that} = this
    return {
      onCancel: () => {
        that.setState({
          [key]: false
        }, cb)
      },
      visible: that.state[key]
    }
  }
}