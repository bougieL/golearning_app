import * as React from 'react'

interface IProps {
  children?: any,
  action?: string,
  method?: 'get' | 'post' | 'put' | 'delete'
}

export class Form extends React.Component<IProps> {
  public render() {
    const {children} = this.props
    return <form className="db-form" autoComplete="off">
      {children}
    </form>
  }
}