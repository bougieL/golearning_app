import * as React from 'react'
import './style/index.scss'

interface IProps {
  children?: string | number,
  onClick?: (evt: any) => void,
  type?: string
}

export class Button extends React.Component<IProps> {
  public render() {
    const {children, onClick, type} = this.props
    return <button className="bd-button" onClick={onClick} type={type}>
      {children}
    </button>
  }
}