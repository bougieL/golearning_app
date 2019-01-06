import * as React from 'react'

interface IProps {
  children?: any
}

export class Form extends React.Component<IProps> {
  public render() {
    const {children} = this.props
    return <form>
      {children}
    </form>
  }
}